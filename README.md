# Frío Total — Landing Page

Landing page moderna para un servicio de **refrigeración, instalación y reparación** de equipos de aire acondicionado y heladeras verticales y horizontales.

Stack: **Next.js 15** · **React 19** · **TypeScript** · **Tailwind CSS**

## Secciones

- **Hero** — Propuesta de valor con CTA y estadísticas
- **Servicios** — Instalación AC, reparación, heladeras, mantenimiento e industria
- **Precios** — Tres planes (Básico, Profesional, Empresarial)
- **Contacto** — Formulario conectado a API Route

## Requisitos

- Node.js 18.18 o superior
- npm 9 o superior

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Levantar servidor de desarrollo
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000)

## Build de producción

```bash
npm run build
npm start
```

## Deploy en Vercel

Este proyecto está optimizado para desplegarse en [Vercel](https://vercel.com) sin configuración extra.

### Opción 1: Desde la web (recomendada)

1. Subí el proyecto a un repositorio en **GitHub**, **GitLab** o **Bitbucket**.
2. Entrá a [vercel.com/new](https://vercel.com/new).
3. Importá tu repositorio.
4. Vercel detecta **Next.js** automáticamente. No cambies el framework preset.
5. Configuración por defecto:
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
6. Clic en **Deploy**.

En unos minutos tendrás una URL como `https://tu-proyecto.vercel.app`.

### Opción 2: Con Vercel CLI

```bash
# Instalar CLI globalmente
npm i -g vercel

# Desde la raíz del proyecto
vercel

# Seguir los prompts (login, confirmar proyecto)
# Para producción:
vercel --prod
```

### Variables de entorno (opcional)

Si integrás envío de emails (Resend, SendGrid, etc.), agregá las variables en:

**Vercel Dashboard → Project → Settings → Environment Variables**

Ejemplo:

| Variable | Descripción |
|----------|-------------|
| `RESEND_API_KEY` | API key para emails de contacto |
| `CONTACT_EMAIL` | Email destino de solicitudes |

Luego actualizá `app/api/contact/route.ts` para usar esas variables.

### Dominio personalizado

1. En Vercel: **Project → Settings → Domains**
2. Agregá tu dominio (ej. `friototal.com.ar`)
3. Configurá los DNS según las instrucciones de Vercel

## Estructura del proyecto

```
proyectorCursor/
├── app/
│   ├── api/contact/route.ts   # API del formulario
│   ├── globals.css            # Tailwind + estilos globales
│   ├── layout.tsx             # Layout y metadata SEO
│   └── page.tsx               # Página principal
├── components/
│   ├── header.tsx
│   ├── hero.tsx
│   ├── features.tsx
│   ├── pricing.tsx
│   ├── contact.tsx
│   └── footer.tsx
├── lib/utils.ts
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Personalización

- **Marca y textos:** editá los componentes en `components/`
- **Colores:** paleta `frost` en `tailwind.config.ts`
- **Teléfono y email:** actualizá en `header.tsx`, `contact.tsx` y `footer.tsx`
- **Precios:** modificá el array `plans` en `components/pricing.tsx`

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Desarrollo en localhost:3000 |
| `npm run build` | Build de producción |
| `npm start` | Servidor de producción |
| `npm run lint` | Linter de Next.js |

## Nota sobre carpetas legacy

Las carpetas `client/` y `server/` pertenecen a la estructura anterior (Vite + Express) y ya no se usan. Podés eliminarlas si no las necesitás.
