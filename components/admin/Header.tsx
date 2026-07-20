import {
  Bell,
  UserCircle,
} from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-slate-900 px-8">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-sm text-slate-400">
          Bienvenido al panel administrativo.
        </p>
      </div>

      <div className="flex items-center gap-5">
        <button className="rounded-xl bg-slate-800 p-3 hover:bg-slate-700">
          <Bell className="h-5 w-5 text-slate-300" />
        </button>

        <div className="flex items-center gap-3 rounded-xl bg-slate-800 px-4 py-2">
          <UserCircle className="h-9 w-9 text-cyan-400" />

          <div>
            <p className="font-medium text-white">
              Fernando
            </p>

            <span className="text-xs text-slate-400">
              Administrador
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}