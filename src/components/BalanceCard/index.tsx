import { Info } from "lucide-react";

export function BalanceCard() {
  return (
    <div
      className="
      relative overflow-hidden
      flex
      bg-brand-primary p-6 rounded-[24px] 
      text-white shadow-xl shadow-slate-200/50
      w-full
      max-w-[600px]

      dark:shadow-none
    "
    >
      <div className="absolute top-4 right-4 hover:opacity-100 transition-opacity">
        <Info className="w-5 h-5" />
      </div>

      {/* Cuerpo de la Tarjeta */}
      <div className="flex flex-col gap-1">
        <h3 className="text-slate-200 text-sm font-medium tracking-wide">
          Total Balance
        </h3>

        <div className="flex items-baseline gap-1 py-2">
          <span className="text-4xl font-bold tracking-tight">€2,450.75</span>
        </div>

        <p className="text-slate-400 text-xs">Uprights and expenses details</p>
      </div>

      {/* Botones Inferiores (Estilo Píldora) */}
      {/* <div className="flex justify-between items-center">
        <button
          className="
          bg-slate-600/50 hover:bg-slate-800 
          text-slate-300 text-xs px-4 py-2 
          rounded-full transition-colors
        "
        >
          Recent Moods
        </button>

        <button
          className="
          bg-slate-600/50 hover:bg-slate-800 
          text-slate-300 text-xs px-4 py-2 
          rounded-full transition-colors
        "
        >
          Seed 42
        </button>
      </div> */}
    </div>
  );
}
