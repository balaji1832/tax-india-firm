// Optional template. The existing Apps Script using CONTACT_SYNC_SECRET also works.
// Enable the Advanced Google service "Google Sheets API" (identifier: Sheets).
// If using this template, add Script Properties CONTACT_SPREADSHEET_ID and CONTACT_SYNC_SECRET.

const HEADERS = [
  "Enquiry ID", "Submitted At (UTC)", "Name", "Phone Number",
  "Email Address", "Message",
];
const TAB = "Sheet1";

function doPost(e) {
  const reply = (data) => ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
  let lock;
  try {
    const body = JSON.parse(e.postData.contents);
    const props = PropertiesService.getScriptProperties();
    const expectedToken = props.getProperty("CONTACT_SYNC_SECRET");
    const spreadsheetId = props.getProperty("CONTACT_SPREADSHEET_ID");
    if (!expectedToken || !spreadsheetId || body.secret !== expectedToken) {
      return reply({ ok: false, code: "UNAUTHORIZED" });
    }

    const item = body.enquiry;
    if (!item || !["id", "submittedAt", "name", "phone", "email", "message"]
      .every((key) => typeof item[key] === "string")) {
      return reply({ ok: false, code: "INVALID_ENQUIRY" });
    }

    lock = LockService.getScriptLock();
    lock.waitLock(30000);

    const headerResult = Sheets.Spreadsheets.Values.get(spreadsheetId, `${TAB}!A1:F1`);
    const current = (headerResult.values && headerResult.values[0]) || [];
    if (current.length === 0) {
      Sheets.Spreadsheets.Values.update(
        { range: `${TAB}!A1:F1`, majorDimension: "ROWS", values: [HEADERS] },
        spreadsheetId, `${TAB}!A1:F1`, { valueInputOption: "RAW" },
      );
    } else if (current.length !== HEADERS.length ||
      HEADERS.some((heading, index) => current[index] !== heading)) {
      return reply({ ok: false, code: "HEADER_MISMATCH" });
    }

    const idResult = Sheets.Spreadsheets.Values.get(spreadsheetId, `${TAB}!A2:A`,
      { valueRenderOption: "UNFORMATTED_VALUE" });
    const alreadyPresent = (idResult.values || []).some((row) => String(row[0]) === item.id);
    if (alreadyPresent) return reply({ ok: true, id: item.id, duplicate: true });

    Sheets.Spreadsheets.Values.append(
      {
        range: `${TAB}!A:F`, majorDimension: "ROWS",
        values: [[item.id, item.submittedAt, item.name, item.phone, item.email, item.message]],
      },
      spreadsheetId, `${TAB}!A:F`,
      { valueInputOption: "RAW", insertDataOption: "INSERT_ROWS" },
    );
    return reply({ ok: true, id: item.id });
  } catch (_) {
    return reply({ ok: false, code: "SYNC_FAILED" });
  } finally {
    if (lock && lock.hasLock()) lock.releaseLock();
  }
}
