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

export type CreateContactInput = Omit<
  Contact,
  "id" | "status" | "createdAt"
>;

// Compatibilidad temporal con el código viejo
export type Consulta = Contact;
export type ConsultaStatus = ContactStatus;
export type CreateConsultaInput = CreateContactInput;