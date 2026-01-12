import { useContability } from "@/context/ContabilityProvider";
import { ContabilityItem } from "./ContabilityItem";
import { ReceiptText } from "lucide-react";
import { useState } from "react";

function EmptyState() {
  return (
    <div className="flex flex-col items-center pt-4 justify-center text-center animate-in fade-in zoom-in duration-500">
      {/* Círculo de fondo para el icono */}
      <div className="w-20 h-20 bg-surface border border-border-subtle rounded-full flex items-center justify-center mb-4 shadow-sm">
        <ReceiptText className="w-10 h-10 text-slate-300 dark:text-slate-600" />
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-1">
        Sin movimientos aún
      </h3>

      <p className="text-sm text-slate-500 max-w-[230px] leading-relaxed">
        Toca el botón azul + para registrar tu primer ingreso o egreso.
      </p>

      {/* Una flecha sutil apuntando hacia donde estaría el FAB (opcional) */}
      <div className="mt-8 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-slate-300 rotate-180"
        >
          <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export function ContabilityList() {
  const { transactions } = useContability();
  const [idViewOptions, setidViewOptions] = useState<string | null>(null);

  return (
    <section className="flex flex-col w-full max-w-[800px]">
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-lg font-bold text-foreground">
          Actividad Reciente
        </h2>
        <button className="text-brand-accent text-sm font-medium hover:underline">
          Ver todo
        </button>
      </div>

      <div className="bg-surface border border-border-subtle rounded-[24px] p-4 shadow-sm">
        {transactions.length !== 0 ? (
          transactions.map((item) => (
            <ContabilityItem
              onClick={() =>
                setidViewOptions((prev) => (prev === item.id ? null : item.id))
              }
              key={item.id}
              item={item}
              viewOptions={idViewOptions === item.id}
            />
          ))
        ) : (
          <EmptyState></EmptyState>
        )}
      </div>
    </section>
  );
}
