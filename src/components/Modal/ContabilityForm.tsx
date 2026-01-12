import { useState } from "react";
import type IContabilityItem from "@/types/index";
import { X } from "lucide-react";
import { useContability } from "@/context/ContabilityProvider";

interface ContabilityFormProps {
  onClose: () => void;
}

export function ContabilityForm({ onClose }: ContabilityFormProps) {
  const { addTransaction } = useContability();
  const [form, setForm] = useState<Omit<IContabilityItem, "id">>({
    title: "",
    details: "",
    count: 0,
    type: "ingreso",
    divisa: "EUR",
    date: new Date().toISOString().split("T")[0], // Fecha de hoy por defecto
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem: IContabilityItem = {
      ...form,
      id: crypto.randomUUID(),
    };

    addTransaction(newItem); // Usamos el contexto
    onClose(); // Se cierra el modal y la lista ya estará actualizada
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Nueva Transacción</h2>
        <button
          type="button"
          onClick={onClose}
          className="p-1 hover:bg-surface rounded-full"
        >
          <X className="w-5 h-5 text-slate-400" />
        </button>
      </div>

      {/* Selector de Tipo (Toggle pill) */}
      <div className="flex p-1 bg-surface rounded-xl border border-border-subtle">
        {(["ingreso", "egreso"] as const).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setForm({ ...form, type })}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all capitalize ${
              form.type === type
                ? "bg-background text-foreground shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-xs font-medium text-slate-500 ml-1 uppercase">
            Monto
          </label>
          <div className="relative">
            <select
              value={form.divisa}
              onChange={(e) =>
                setForm({
                  ...form,
                  divisa: e.target.value as IContabilityItem["divisa"],
                })
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-lg bg-surface border-none focus:ring-0 focus:outline-none cursor-pointer"
            >
              <option value="USD" defaultValue={"USD"}>
                $
              </option>
              <option value="EUR">€</option>
              <option value="GBP">£</option>
            </select>
            <input
              required
              type="number"
              step="0.01"
              value={form.count || ""}
              onChange={(e) =>
                setForm({ ...form, count: Number(e.target.value) })
              }
              className="w-full bg-surface border-none p-4 pl-14 rounded-2xl text-2xl font-bold focus:ring-2 focus:ring-brand-accent transition-all"
              placeholder="0.00"
            />
          </div>
        </div>

        <input
          required
          type="text"
          placeholder="Título (ej: Supermercado)"
          className="w-full bg-surface border-none p-4 rounded-2xl focus:ring-2 focus:ring-brand-accent transition-all"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          type="text"
          placeholder="Detalles opcionales"
          className="w-full bg-surface border-none p-4 rounded-2xl focus:ring-2 focus:ring-brand-accent transition-all"
          onChange={(e) => setForm({ ...form, details: e.target.value })}
        />

        <input
          type="date"
          value={form.date}
          className="w-full bg-surface border-none p-4 rounded-2xl focus:ring-2 focus:ring-brand-accent transition-all text-slate-600"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-fab-blue text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:opacity-90 active:scale-95 transition-all"
      >
        Guardar Registro
      </button>
    </form>
  );
}
