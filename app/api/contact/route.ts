import { markContactEnquirySynced, saveContactEnquiry } from "../../../lib/contact/db";
import { SheetHeaderMismatchError, syncContactEnquiryToSheet } from "../../../lib/contact/sheets";
import { validateContactInput } from "../../../lib/contact/validation";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<Response> {
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return Response.json({ saved: false, error: "Send the form as JSON." }, { status: 415 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 12_000) {
    return Response.json({ saved: false, error: "The enquiry is too long." }, { status: 413 });
  }

  let body: unknown;
  try {
    const text = await request.text();
    if (text.length > 12_000) {
      return Response.json({ saved: false, error: "The enquiry is too long." }, { status: 413 });
    }
    body = JSON.parse(text);
  } catch {
    return Response.json({ saved: false, error: "Invalid form submission." }, { status: 400 });
  }

  const validation = validateContactInput(body);
  if (!validation.ok) {
    return Response.json({ saved: false, error: validation.error }, { status: 400 });
  }

  const missingDbSettings = [
    "CONTACT_DB_HOST",
    "CONTACT_DB_PORT",
    "CONTACT_DB_USER",
    "CONTACT_DB_PASSWORD",
    "CONTACT_DB_NAME",
  ].filter((name) => process.env[name] === undefined ||
    (name !== "CONTACT_DB_PASSWORD" && !process.env[name]));
  if (missingDbSettings.length) {
    console.error(`Contact database settings missing: ${missingDbSettings.join(", ")}`);
    return Response.json(
      { saved: false, error: "Contact form is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  let enquiry;
  try {
    enquiry = await saveContactEnquiry(validation.value);
  } catch {
    console.error("Contact enquiry could not be saved to MySQL.");
    return Response.json(
      { saved: false, error: "We could not save your enquiry. Please try again." },
      { status: 500 },
    );
  }

  try {
    await syncContactEnquiryToSheet(enquiry);
    await markContactEnquirySynced(enquiry.id);
    return Response.json(
      { saved: true, enquiryId: enquiry.id, sheetsSynced: true },
      { status: 201 },
    );
  } catch (error) {
    const syncError = error instanceof SheetHeaderMismatchError
      ? error.message
      : "Google Sheets sync is pending; retry the saved enquiry later.";
    console.error(`Contact enquiry ${enquiry.id}: ${syncError}`);
    return Response.json(
      { saved: true, enquiryId: enquiry.id, sheetsSynced: false, syncError },
      { status: 201 },
    );
  }
}
