import { ClassNamesProps } from "@/utils/utilsClsx"; // O tu lógica de clases
import { Settings, Trash2 } from "lucide-react";
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
    <div className="flex flex-col w-full relative group">
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
        className={`flex items-center justify-between py-4 px-2 relative bg-amber-950 transition-all duration-300 ease-out ${
          viewOptions ? "w-[calc(100%-150px)] shadow-brand-primary" : "w-full"
        }`}
        onClick={onClick}
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

      <hr className="border-border-subtle group-last:hidden" />
    </div>
  );
}
