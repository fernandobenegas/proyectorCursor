'use client';

import { useState } from 'react';
import { Menu, Phone, Snowflake, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#precios', label: 'Precios' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2 font-bold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-frost-400 to-frost-600 shadow-lg shadow-frost-500/25">
            <Snowflake className="h-5 w-5 text-white" />
          </span>
          <span>
            Refrigeracion <span className="text-frost-400">Rosario</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+5491123456789"
            className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-frost-300"
          >
            <Phone className="h-4 w-4" />
             3416609115
          </a>
          <a
            href="#contacto"
            className="rounded-full bg-frost-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-frost-500/30 transition hover:bg-frost-400"
          >
            Solicitar técnico
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-300 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          'border-t border-white/10 bg-slate-950/95 md:hidden',
          open ? 'block' : 'hidden'
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-frost-500 px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            Solicitar técnico
          </a>
        </nav>
      </div>
    </header>
  );
}
