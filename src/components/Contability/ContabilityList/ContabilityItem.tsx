import { ClassNamesProps } from "@/utils/utilsClsx"; // O tu lógica de clases
import type IContabilityItem from "@/types"; // Asegúrate de que la ruta sea correcta

interface Props {
  item: IContabilityItem;
  viewOptions?: boolean;
  onDelete?: (id: string) => void;
  onEdit?: (item: IContabilityItem) => void;
  onClick?: () => void;
}

export function ContabilityItem({
  item,
  viewOptions,
  onClick,
  onDelete,
  onEdit,
}: Props) {
  const isIngreso = item.type === "ingreso";

  return (
    <div className="flex flex-col w-full relative group" onClick={onClick}>
      <div className="absolute flex -center h-15 right-0 -translate-y-1/2 top-1/2 rounded-[28px] overflow-hidden hover:bg-red-600 transition-colors">
        <button
          onClick={() => onEdit?.(item)}
          className="w-[70px] h-full dark:dark:bg-zinc-700 flex items-center justify-center"
        >
          <Settings className="w-8 h-8" color="white" />
        </button>
        <button
          onClick={() => onDelete?.(item.id)}
          className="w-[70px] h-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
        >
          <Trash2 className="w-8 h-8" color="white" />
        </button>
      </div>

      <div
        className={`flex items-center justify-between py-4 px-2 relative bg-surface transition-all duration-300 ease-out ${
          viewOptions ? "w-[calc(100%-150px)] shadow-brand-primary" : "w-full"
        }`}
      >
        <div className="flex flex-col gap-0.5">
          <span className="text-foreground font-semibold text-base">
            {item.title}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-xs dark:text-slate-400">
              {item.details}
            </span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">
              • {item.date}
            </span>
          </div>
        </div>

        <div
          className={ClassNamesProps(
            "font-bold text-lg tabular-nums",
            isIngreso ? "text-income" : "text-expense"
          )}
        >
          {isIngreso ? "+" : "-"}
          {item.divisa}
          {item.count.toLocaleString()}
        </div>
      </div>

      {/* <div className="h-px w-full bg-amber-200 opacity-50 last:hidden" /> */}
      <hr className="border-border-subtle group-last:hidden" />
    </div>
  );
}

import { Settings, Trash2 } from "lucide-react";
import { useState } from "react";

interface Props {
  item: IContabilityItem;
  onDelete?: (id: string) => void;
  onEdit?: (item: IContabilityItem) => void;
}

export function TransactionItem({ item, onDelete, onEdit }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // El ancho de los botones sumados (aprox 120px)
  const shiftAmount = "translate-x-[-120px]";

  return (
    <div className="relative overflow-hidden bg-surface group">
      {/* CAPA DE FONDO: Acciones (Solo visibles al deslizar) */}
      <div className="absolute inset-0 flex justify-end">
        <button
          onClick={() => onEdit?.(item)}
          className="w-[60px] h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors"
        >
          <Settings className="w-5 h-5" />
        </button>
        <button
          onClick={() => onDelete?.(item.id)}
          className="w-[60px] h-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      {/* CAPA SUPERIOR: Contenido del Asiento */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative p-4 bg-surface transition-transform duration-300 ease-out cursor-pointer
          ${isOpen ? shiftAmount : "translate-x-0"}
        `}
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">
              {item.title}
            </span>
            <span className="text-xs text-slate-500">{item.date}</span>
          </div>

          <div className="flex flex-col items-end">
            <span
              className={`font-bold ${
                item.type === "ingreso" ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.type === "ingreso" ? "+" : "-"}
              {item.divisa}
              {item.count.toFixed(2)}
            </span>
            <span className="text-[10px] uppercase text-slate-400 tracking-wider">
              {item.details || "Sin detalles"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
