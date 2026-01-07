import { ClassNamesProps } from "@/utils/utilsClsx"; // O tu lógica de clases
import type IContabilityItem from "@/types"; // Asegúrate de que la ruta sea correcta

export function ContabilityItem({ item }: { item: IContabilityItem }) {
  const isIngreso = item.type === "ingreso";

  return (
    <div className="group flex flex-col w-full">
      <div className="flex items-center justify-between py-4 px-2">
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
