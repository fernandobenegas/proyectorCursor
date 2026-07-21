import { Check, Sparkles } from 'lucide-react';
import { cn } from "@/lib/utils";

const plans = [
  {
    name: 'Precio Promocional por todo el mes de agosto',
    subtitle: 'Ideal para hogares',
    price: '$120.000',
    period: 'instalación split hasta 3500 fg',
    description:
      'Diagnóstico e instalacion de aire acondicionado split. Incluye revisión de presiones, detección de fugas y prueba de funcionamiento.',
    features: [
      'Instalacion completa del equipo',
      'Revisión completa del equipo',
      'Detección de fallas y fugas',
      'Presupuesto sin compromiso',
      'Atención en Rosario y alrededores',
    ],
    cta: 'Solicitar visita',
    highlighted: true,
  },
  {
    name: 'Profesional',
    subtitle: 'Comercios y oficinas',
    price: '$380.000',
    period: 'instalación split hasta 6000 fg',
    description:
      'Instalación profesional de aire acondicionado, vacío, carga de gas y prueba de funcionamiento.',
    features: [
      'Instalación split o multi split',
      'Cañería de cobre hasta 3 m',
      'Soporte y protección eléctrica',
      'Puesta en marcha y capacitación',
      'Garantía 6 meses mano de obra'

    ],
    cta: 'Pedir instalación',
    highlighted: false,
  },
  {
    name: 'Empresarial',
    subtitle: 'Industria y gastronomía',
    price: 'Consultar',
    period: 'plan a medida',
    description:
      'Contrato de mantenimiento para heladeras horizontales, cámaras frigoríficas y sistemas centrales de climatización.',
    features: [
      'Visitas programadas mensuales',
      'Prioridad en emergencias 24/7',
      'Repuestos con descuento',
      'Informes técnicos digitales',
      'Instalaciones en edificios y locales comerciales',
    ],
    cta: 'Contactar asesor',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-frost-400">
            Precios transparentes
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Planes para cada necesidad de refrigeración
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Precios orientativos en pesos argentinos. El valor final depende del
            modelo, potencia y complejidad del trabajo. Consultá sin cargo.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-3xl border p-8 transition',
                plan.highlighted
                  ? 'border-frost-500/50 bg-gradient-to-b from-frost-500/10 to-slate-950 shadow-2xl shadow-frost-500/10'
                  : 'border-white/10 bg-slate-950/60 hover:border-white/20'
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-frost-500 px-4 py-1 text-xs font-semibold text-white">
                  <Sparkles className="h-3.5 w-3.5" />
                  Más solicitado
                </span>
              )}

              <div>
                <p className="text-sm font-medium text-frost-400">{plan.subtitle}</p>
                <h3 className="mt-1 text-2xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-white">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-500">{plan.period}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {plan.description}
                </p>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-frost-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={cn(
                  'mt-8 block rounded-full py-3.5 text-center text-sm font-semibold transition',
                  plan.highlighted
                    ? 'bg-frost-500 text-white shadow-lg shadow-frost-500/30 hover:bg-frost-400'
                    : 'border border-white/15 text-white hover:border-frost-400/50 hover:bg-white/5'
                )}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          * Los precios no incluyen repuestos salvo indicación contraria. Aceptamos
          transferencia, efectivo y tarjetas en cuotas.
        </p>
      </div>
    </section>
  );
}
