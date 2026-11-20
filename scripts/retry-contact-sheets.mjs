import { getPendingContactEnquiries, markContactEnquirySynced } from "../lib/contact/db.ts";
import { SheetHeaderMismatchError, syncContactEnquiryToSheet } from "../lib/contact/sheets.ts";

async function main() {
  const pending = await getPendingContactEnquiries(1000);
  let synced = 0;
  let failed = 0;

  for (const enquiry of pending) {
    try {
      await syncContactEnquiryToSheet(enquiry);
      await markContactEnquirySynced(enquiry.id);
      synced += 1;
    } catch (error) {
      failed += 1;
      const message = error instanceof SheetHeaderMismatchError
        ? error.message
        : "Google Sheets sync failed; the MySQL row remains pending.";
      console.error(`${enquiry.id}: ${message}`);
    }
  }

  console.log(`Pending checked: ${pending.length}; synced: ${synced}; failed: ${failed}.`);
  if (failed) process.exitCode = 1;
}

main().catch(() => {
  console.error("Could not load pending enquiries from MySQL. Check the local configuration and database.");
  process.exitCode = 1;
});
