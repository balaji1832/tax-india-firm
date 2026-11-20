-- Safe to paste into MySQL Workbench. Existing rows are preserved.
CREATE DATABASE IF NOT EXISTS taxindia_firm
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE taxindia_firm;

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id CHAR(36) PRIMARY KEY,
  submitted_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(32) NOT NULL,
  email VARCHAR(254) NOT NULL,
  message TEXT NOT NULL,
  sheets_synced_at DATETIME(3) NULL,
  INDEX pending_sync (sheets_synced_at, submitted_at)
);
