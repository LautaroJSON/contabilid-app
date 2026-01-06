import { ContabilityItem } from "./ContabilityItem";
import type { IContabilityItem } from "@/types";

const EXAMPLE_ITEMS: IContabilityItem[] = [
  {
    id: "1",
    title: "Salario Mensual",
    details: "Pago nómina",
    count: 2100,
    type: "ingreso",
    divisa: "€",
    date: "2026-01-05",
  },
  {
    id: "2",
    title: "Alquiler",
    details: "Pago departamento",
    count: 850,
    type: "egreso",
    divisa: "€",
    date: "2026-01-04",
  },
  {
    id: "3",
    title: "Venta Teclado",
    details: "Marketplace",
    count: 50,
    type: "ingreso",
    divisa: "€",
    date: "2026-01-02",
  },
  {
    id: "4",
    title: "Supermercado",
    details: "Compra semanal",
    count: 120.5,
    type: "egreso",
    divisa: "€",
    date: "2026-01-01",
  },
];
export function ContabilityList() {
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
        {EXAMPLE_ITEMS.map((item) => (
          <ContabilityItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
