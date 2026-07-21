'use client';

import { FormEvent, useState } from 'react';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { cn } from "@/lib/utils";

const services = [
  'Instalación de aire acondicionado',
  'Reparación de aire acondicionado',
  'Heladera vertical comercial',
  'Heladera horizontal / freezer',
  'Mantenimiento preventivo',
  'Refrigeración industrial',
  'Otro',
];

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono / WhatsApp',
    value: '3416609115',
    href: 'tel:+5491123456789',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@friototal.com.ar',
    href: 'mailto:info@friototal.com.ar',
  },
  {
    icon: MapPin,
    label: 'Zona de cobertura',
    value: 'ROSARIO y alrededores',
  },
  {
    icon: Clock,
    label: 'Horario de atención',
    value: 'Lun a Sáb · 8:00 – 20:00 hs',
  },
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;
  setStatus('loading');

  
  const formData = new FormData(form);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setStatus('success');
      setFeedback(data.message);
      form.reset();
    } catch (err) {
      setStatus('error');
      setFeedback(err instanceof Error ? err.message : 'Error al enviar');
    }
  }

  return (
    <section id="contacto" className="border-t border-white/10 bg-slate-900/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-frost-400">
              Contacto
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¿Tu equipo no enfría? Escribinos hoy
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Contanos qué equipo necesitás instalar o reparar — aire
              acondicionado, heladera vertical u horizontal — y un técnico te
              responde en menos de 24 horas con presupuesto sin cargo.
            </p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-frost-500/15 text-frost-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-white transition hover:text-frost-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1.5 block text-sm text-slate-400">
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Juan Pérez"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-600 focus:border-frost-500 focus:outline-none focus:ring-1 focus:ring-frost-500"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="phone" className="mb-1.5 block text-sm text-slate-400">
                  Teléfono
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  placeholder="11 2345-6789"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-600 focus:border-frost-500 focus:outline-none focus:ring-1 focus:ring-frost-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-1.5 block text-sm text-slate-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-600 focus:border-frost-500 focus:outline-none focus:ring-1 focus:ring-frost-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="service" className="mb-1.5 block text-sm text-slate-400">
                  Servicio requerido
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white focus:border-frost-500 focus:outline-none focus:ring-1 focus:ring-frost-500"
                >
                  <option value="" disabled>
                    Seleccioná un servicio
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm text-slate-400">
                  Detalle del problema o consulta
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Ej: Split 3000 fg que no enfría, heladera vertical con escarcha excesiva..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-600 focus:border-frost-500 focus:outline-none focus:ring-1 focus:ring-frost-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-frost-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-frost-500/30 transition hover:bg-frost-400 disabled:opacity-60"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar solicitud'}
              <Send className="h-4 w-4" />
            </button>

            {feedback && (
              <p
                className={cn(
                  'mt-4 rounded-xl px-4 py-3 text-sm',
                  status === 'success'
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'bg-red-500/10 text-red-400'
                )}
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
