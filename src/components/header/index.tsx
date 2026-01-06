import { Menu, Search } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-background transition-colors duration-300">
      {/* Botón de Menú (Izquierda) */}
      <button
        className="p-2 -ml-2 hover:bg-surface rounded-lg transition-colors text-foreground"
        aria-label="Abrir menú"
      >
        <Menu className="w-6 h-6 stroke-[1.5]" />
      </button>

      {/* Título Central */}
      <h1 className="text-xl font-bold tracking-tight text-foreground">
        Contabilidapp
      </h1>

      {/* Botón de Búsqueda (Derecha) */}
      <button
        className="p-2 -mr-2 hover:bg-surface rounded-lg transition-colors text-foreground"
        aria-label="Buscar"
      >
        <Search className="w-6 h-6 stroke-[1.5]" />
      </button>
    </header>
  );
}
