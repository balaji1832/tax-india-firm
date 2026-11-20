export type ContactInput = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export type ContactValidation =
  | { ok: true; value: ContactInput }
  | { ok: false; error: string };

export function validateContactInput(input: unknown): ContactValidation {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, error: "Please complete all contact fields." };
  }

  const fields = input as Record<string, unknown>;
  if (
    typeof fields.name !== "string" ||
    typeof fields.phone !== "string" ||
    typeof fields.email !== "string" ||
    typeof fields.message !== "string"
  ) {
    return { ok: false, error: "Please complete all contact fields." };
  }

  const value: ContactInput = {
    name: fields.name.trim(),
    phone: fields.phone.trim(),
    email: fields.email.trim(),
    message: fields.message.trim(),
  };

  if (value.name.length < 2 || value.name.length > 100) {
    return { ok: false, error: "Enter a name between 2 and 100 characters." };
  }

  const digits = value.phone.replace(/\D/g, "");
  if (
    value.phone.length > 30 ||
    !/^[+()\d\s-]+$/.test(value.phone) ||
    digits.length < 7 ||
    digits.length > 15
  ) {
    return { ok: false, error: "Enter a valid phone number." };
  }

  if (
    value.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email)
  ) {
    return { ok: false, error: "Enter a valid email address." };
  }

  if (!value.message || value.message.length > 5000) {
    return { ok: false, error: "Enter a message of up to 5,000 characters." };
  }

  return { ok: true, value };
}
