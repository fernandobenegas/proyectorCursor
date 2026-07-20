"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ClipboardList,
  Settings,
  ArrowLeft,
  Snowflake,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Consultas",
    href: "/admin/contacts",
    icon: ClipboardList,
  },
  {
    title: "Configuración",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-white/10 bg-slate-950">
      <div className="flex items-center gap-3 border-b border-white/10 px-6 py-6">
        <div className="rounded-xl bg-cyan-500/20 p-2">
          <Snowflake className="h-7 w-7 text-cyan-400" />
        </div>

        <div>
          <h2 className="font-bold text-white">FRÍO TOTAL</h2>

          <p className="text-xs text-slate-400">
            Panel Administrativo
          </p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-cyan-500 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Icon className="h-5 w-5" />

              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800"
        >
          <ArrowLeft className="h-5 w-5" />

          Volver al sitio
        </Link>
      </div>
    </aside>
  );
}