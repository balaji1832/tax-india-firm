import { randomUUID } from "node:crypto";
import mysql, { type Pool, type RowDataPacket } from "mysql2/promise";
import type { ContactInput } from "./validation";

export type ContactEnquiry = ContactInput & {
  id: string;
  submittedAtUtc: string;
};

type PendingRow = RowDataPacket & {
  id: string;
  submitted_at: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

const poolHolder = globalThis as typeof globalThis & { contactPool?: Pool };

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not configured`);
  return value;
}

export function getContactPool(): Pool {
  if (poolHolder.contactPool) return poolHolder.contactPool;

  const port = Number(requiredEnv("CONTACT_DB_PORT"));
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("CONTACT_DB_PORT must be a valid port");
  }

  poolHolder.contactPool = mysql.createPool({
    host: requiredEnv("CONTACT_DB_HOST"),
    port,
    user: requiredEnv("CONTACT_DB_USER"),
    password: process.env.CONTACT_DB_PASSWORD ?? "",
    database: requiredEnv("CONTACT_DB_NAME"),
    waitForConnections: true,
    connectionLimit: 5,
    timezone: "Z",
    dateStrings: true,
  });
  return poolHolder.contactPool;
}

export async function saveContactEnquiry(input: ContactInput): Promise<ContactEnquiry> {
  const enquiry: ContactEnquiry = {
    id: randomUUID(),
    submittedAtUtc: new Date().toISOString(),
    ...input,
  };
  const mysqlTimestamp = enquiry.submittedAtUtc.slice(0, 23).replace("T", " ");

  await getContactPool().execute(
    `INSERT INTO contact_enquiries
      (id, submitted_at, name, phone, email, message, sheets_synced_at)
     VALUES (?, ?, ?, ?, ?, ?, NULL)`,
    [
      enquiry.id,
      mysqlTimestamp,
      enquiry.name,
      enquiry.phone,
      enquiry.email,
      enquiry.message,
    ],
  );

  return enquiry;
}

export async function markContactEnquirySynced(id: string): Promise<void> {
  await getContactPool().execute(
    `UPDATE contact_enquiries
     SET sheets_synced_at = UTC_TIMESTAMP(3)
     WHERE id = ? AND sheets_synced_at IS NULL`,
    [id],
  );
}

export async function getPendingContactEnquiries(limit = 100): Promise<ContactEnquiry[]> {
  const [rows] = await getContactPool().execute<PendingRow[]>(
    `SELECT id, submitted_at, name, phone, email, message
     FROM contact_enquiries
     WHERE sheets_synced_at IS NULL
     ORDER BY submitted_at, id
     LIMIT ?`,
    [limit],
  );

  return rows.map((row) => ({
    id: row.id,
    submittedAtUtc: new Date(row.submitted_at.replace(" ", "T") + "Z").toISOString(),
    name: row.name,
    phone: row.phone,
    email: row.email,
    message: row.message,
  }));
}
