import { Snowflake } from 'lucide-react';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#precios', label: 'Precios' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <a href="#inicio" className="inline-flex items-center gap-2 font-bold text-white">
              <Snowflake className="h-5 w-5 text-frost-400" />
              Frío Total
            </a>
            <p className="mt-2 max-w-sm text-sm text-slate-500">
              Instalación y reparación de aire acondicionado, heladeras verticales
              y horizontales. Servicio técnico certificado en CABA y GBA.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-frost-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Frío Total. Todos los derechos reservados.
          · Refrigeración · Climatización · Heladeras comerciales
        </div>
      </div>
    </footer>
  );
}
