import {
  Wind,
  Flame,
  Wrench,
  Settings,
  Gauge,
  Droplets,
  Waves,
  Bath,
  ClipboardList,
  Zap,
  Download,
} from 'lucide-react';

const services = [
  {
    icon: Wind,
    title: 'Instalación de aire acondicionado',
    description:
      'Montaje profesional de splits, multisplit y equipos centrales. Cálculo de frigorías, tendido de cañerías, vacío, carga de gas y puesta en marcha con prueba de consumo.',
    tags: ['Split', 'Inverter', 'Conductos'],
  },
  {
    icon: Gauge,
    title: 'Refrigeración industrial',
    description:
      'Instalación y service de cámaras frigoríficas, cuartos fríos y sistemas de refrigeración para industria alimenticia, logística y gastronomía.',
    tags: ['Cámaras frías', 'Industria', 'Gastronomía'],
  },
  {
    icon: Wrench,
    title: 'Reparación de equipos de climatización',
    description:
      'Diagnóstico de fallas en compresores, ventiladores, tarjetas electrónicas y sensores. Recuperación de gas, detección de fugas y reemplazo de componentes con garantía.',
    tags: ['Fugas', 'Compresor', 'Electrónica'],
  },
  {
    icon: Settings,
    title: 'Mantenimiento preventivo',
    description:
      'Planes periódicos para evitar roturas en temporada alta. Limpieza de filtros, revisión de presiones, lubricación y informe técnico con recomendaciones.',
    tags: ['Preventivo', 'Plan anual', 'Informe'],
  },
  {
    icon: Flame,
    title: 'Instalaciones de gas',
    description:
      'Obra nueva de gas domiciliaria y comercial, instalación de artefactos (cocinas, calefones, termotanques, calderas), pruebas de hermeticidad y verificación de monóxido.',
    tags: ['Obra nueva', 'Artefactos', 'Hermeticidad'],
  },
  {
    icon: ClipboardList,
    title: 'Trámites y habilitaciones',
    description:
      'Gestión de factibilidad, proyectos y trámites administrativos ante el ente regulador, inspecciones oculares y certificados de verificación para habilitación municipal.',
    tags: ['Factibilidad', 'Inspección', 'Certificados'],
  },
  {
    icon: Droplets,
    title: 'Instalaciones de agua',
    description:
      'Agua fría y caliente en fusión para cocina, baño y lavadero, tanques cisterna y elevados, bombas presurizadoras y elevadoras, biodigestores y pruebas hidráulicas.',
    tags: ['Fusión', 'Tanques', 'Bombas'],
  },
  {
    icon: Waves,
    title: 'Desagües y destapaciones',
    description:
      'Conexión de desagües cloacales y pluviales, cámaras de inspección y sépticas, pozos ciegos y destapaciones domiciliarias, comerciales y en edificios.',
    tags: ['Cloacas', 'Pluvial', 'Destapaciones'],
  },
  {
    icon: Bath,
    title: 'Grifería y sanitarios',
    description:
      'Instalación de bañeras, duchas, inodoros, vanitorys y grifería tradicional o embutida, más reemplazo de monocomandos, flexibles y válvulas.',
    tags: ['Griferías', 'Sanitarios', 'Reemplazos'],
  },
];

const extras = [
  {
    icon: Droplets,
    title: 'Tratamiento anti-hongos',
    text: 'Limpieza profunda de bandejas y ductos para mejorar la calidad del aire.',
  },
  {
    icon: Zap,
    title: 'Optimización energética',
    text: 'Ajuste de equipos inverter para reducir el consumo eléctrico hasta un 30%.',
  },
];

export default function Features() {
  return (
    <section id="servicios" className="border-t border-white/10 bg-slate-900/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-frost-400">
            Nuestros servicios
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Soluciones completas en refrigeración, gas y agua
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Desde la instalación de tu primer split hasta el mantenimiento de tus
            artefactos de gas y agua.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-frost-500/40 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-frost-500/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-frost-500/15 text-frost-400 transition group-hover:bg-frost-500/25">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {extras.map((extra) => (
            <div
              key={extra.title}
              className="flex gap-4 rounded-2xl border border-frost-500/20 bg-frost-500/5 p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-frost-500/20 text-frost-300">
                <extra.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{extra.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{extra.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 rounded-3xl border border-frost-500/20 bg-frost-500/5 p-8 text-center">
          <h2 className="text-xl font-semibold text-white">
            ¿Querés ver el detalle y el precio de cada servicio?
          </h2>
          <p className="max-w-xl text-xl text-slate-400">
            Descargá nuestra lista de precios orientativos, actualizada según el
            índice de inflación al consumidor.
          </p>
          <a 
            href="/COSTOS_REFRIGERACION_ROSARIO.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-slate-950 "
          >
            <Download className="h-4 w-4" />
            Ver lista de precios (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}