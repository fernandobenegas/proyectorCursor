import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { Contact } from "@/types/contact";

const filePath = path.join(process.cwd(), "data", "contacts.json");

export async function getContacts(): Promise<Contact[]> {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function saveContacts(contacts: Contact[]) {
  await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
}

export async function addContact(
  contact: Omit<Contact, "id" | "createdAt" | "status">
) {
  const contacts = await getContacts();

  const newContact: Contact = {
    id: randomUUID(),
    status: "PENDING",
    createdAt: new Date().toISOString(),
    ...contact,
  };

  contacts.unshift(newContact);

  await saveContacts(contacts);

  return newContact;
}