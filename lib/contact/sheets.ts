import type { ContactEnquiry } from "./db";

export class SheetHeaderMismatchError extends Error {
  constructor() {
    super("Sheet1!A1:F1 contains different headers. No sheet rows were changed.");
    this.name = "SheetHeaderMismatchError";
  }
}

type SyncResponse = {
  ok?: boolean;
  id?: string;
  status?: "appended" | "already-present";
  duplicate?: boolean;
  code?: string;
};

export async function syncContactEnquiryToSheet(
  enquiry: ContactEnquiry,
): Promise<"appended" | "already-present"> {
  const url = process.env.CONTACT_SHEETS_WEB_APP_URL;
  const token = process.env.CONTACT_SHEETS_TOKEN;
  if (!url || !token) throw new Error("Contact Sheets web app is not configured");

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: token,
      token,
      enquiry: {
        ...enquiry,
        submittedAt: enquiry.submittedAtUtc,
      },
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) throw new Error("Contact Sheets web app request failed");

  let result: SyncResponse;
  try {
    result = (await response.json()) as SyncResponse;
  } catch {
    throw new Error("Contact Sheets web app returned an invalid response");
  }
  if (result.code === "HEADER_MISMATCH") throw new SheetHeaderMismatchError();
  if (result.ok !== true || result.id !== enquiry.id) {
    throw new Error("Contact Sheets web app did not confirm the enquiry");
  }
  if (result.status === "already-present" || result.duplicate === true) {
    return "already-present";
  }
  return "appended";
}
