import fs from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';
import type { Consulta, ConsultaStatus, CreateConsultaInput } from '@/types/contact';

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'consultas.json');

const SEED: Consulta[] = [
  {
    id: 'seed-1',
    name: 'Fernando Benegas',
    email: 'fernando@email.com',
    phone: '11 5555-1234',
    service: 'Instalación de aire acondicionado',
    message: 'Necesito instalar un split 3000 fg en living comedor.',
    status: 'pendiente',
    createdAt: '2026-07-20T10:30:00.000Z',
  },
  {
    id: 'seed-2',
    name: 'Juan Pérez',
    email: 'juan@email.com',
    phone: '11 4444-5678',
    service: 'Heladera vertical comercial',
    message: 'Heladera vertical no mantiene temperatura, hace escarcha excesiva.',
    status: 'finalizado',
    createdAt: '2026-07-18T14:00:00.000Z',
  },
];

async function ensureDataFile(): Promise<Consulta[]> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(raw) as Consulta[];
    return Array.isArray(parsed) ? parsed : SEED;
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify(SEED, null, 2), 'utf-8');
    return SEED;
  }
}

async function writeConsultas(consultas: Consulta[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(consultas, null, 2), 'utf-8');
}

export async function getAllConsultas(): Promise<Consulta[]> {
  const consultas = await ensureDataFile();
  return consultas.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getConsultaById(id: string): Promise<Consulta | null> {
  const consultas = await getAllConsultas();
  return consultas.find((c) => c.id === id) ?? null;
}

export async function createConsulta(input: CreateConsultaInput): Promise<Consulta> {
  const consultas = await getAllConsultas();
  const nueva: Consulta = {
    id: randomUUID(),
    ...input,
    status: 'pendiente',
    createdAt: new Date().toISOString(),
  };
  consultas.unshift(nueva);
  await writeConsultas(consultas);
  return nueva;
}

export async function updateConsultaStatus(
  id: string,
  status: ConsultaStatus
): Promise<Consulta | null> {
  const consultas = await getAllConsultas();
  const index = consultas.findIndex((c) => c.id === id);
  if (index === -1) return null;

  consultas[index] = { ...consultas[index], status };
  await writeConsultas(consultas);
  return consultas[index];
}

export async function deleteConsulta(id: string): Promise<boolean> {
  const consultas = await getAllConsultas();
  const filtered = consultas.filter((c) => c.id !== id);
  if (filtered.length === consultas.length) return false;
  await writeConsultas(filtered);
  return true;
}

export function formatConsultaDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}
