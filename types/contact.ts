export type ContactStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "COMPLETED";

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: ContactStatus;
  createdAt: string;
}