import {
  ArrowRight,
  CheckCircle2,
  Refrigerator,
  ShieldCheck,
  ThermometerSnowflake,
  Wind,
} from 'lucide-react';

const highlights = [
  'Instalación certificada de splits y centrales',
  'Reparación de heladeras verticales y horizontales',
  'Mantenimiento preventivo con garantía',
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40" />
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-frost-500/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        {/* Columna izquierda: título y texto */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-frost-500/30 bg-frost-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-frost-300">
            <ThermometerSnowflake className="h-3.5 w-3.5" />
            Refrigeración profesional · Respuestas las 24 hs
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tu clima perfecto,{' '}
            <span className="text-gradient">frío o calor bajo control</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Somos especialistas en instalación, reparación y mantenimiento de
            equipos de aire acondicionado, Mantenimiento de artefactos de gas. 
            Atendemos hogares, comercios y oficinas con técnicos
            certificados y repuestos originales.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-frost-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-frost-500 px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-frost-500/30 transition hover:bg-frost-400"
            >
              Pedir presupuesto gratis
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3.5 text-base font-semibold text-white transition hover:border-frost-400/50 hover:bg-white/5"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* Columna derecha: carteles flotantes y bloque central */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Cartel flotante arriba izquierda */}
          <div className="
glass animate-float absolute
hidden sm:block
sm:left-2
md:-left-4
lg:-left-8
top-8
md:top-16
lg:top-24
z-10
rounded-2xl
p-3 md:p-4
shadow-lg shadow-cyan-400/40
">
            <Wind className="h-8 w-8 text-frost-400" />
            <p className="mt-2 text-sm font-semibold text-white">Aire acondicionado</p>
            <p className="text-xs text-slate-400">Split · Central · Inverter</p>
          </div>

          {/* Cartel flotante abajo derecha */}
          <div className="
glass animate-float absolute
hidden sm:block
sm:right-2
md:-right-4
lg:-right-8
bottom-45
md:bottom-56
lg:bottom-64
z-10
rounded-2xl
p-3 md:p-4
shadow-lg shadow-cyan-400/40
">
            <Refrigerator className="h-8 w-8 text-cyan-400" />
            <p className="mt-2 text-sm font-semibold text-white">Estufas</p>
            <p className="text-xs text-slate-400">·Gas Natural</p>
          </div>

          {/* Bloque central */}
          <div className="glass relative text-center mx-auto rounded-3xl p-8 shadow-lg shadow-cyan-400/40 sm:p-10">
          <div className="flex h-12 w-50 items-center justify-center rounded-2xl bg-frost-500/20">
                <ShieldCheck className="h-6 w-6 text-frost-400" />
            </div>
            <div className="flex items-center gap-3 border-b border-white/10 pb-6 justify-center">
              
              <div className="align-center flex flex-col items-center gap-2">
                <p className="font-semibold text-white">Garantía</p>
                
              </div>
            </div>


            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/5 p-4 text-center">
                <p className="text-3xl font-bold text-frost-300">+500</p>
                <p className="mt-1 text-xs text-slate-400">Equipos instalados</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-center">
                <p className="text-3xl font-bold text-frost-300">24 hs</p>
                <p className="mt-1 text-xs text-slate-400">de respuesta</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-center">
                <p className="text-3xl font-bold text-frost-300">+7</p>
                <p className="mt-1 text-xs text-slate-400">Años de experiencia</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-center">
                <p className="text-3xl font-bold text-frost-300">100%</p>
                <p className="mt-1 text-xs text-slate-400">Repuestos certificados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
