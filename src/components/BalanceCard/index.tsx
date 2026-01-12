import { useContability } from "@/context/ContabilityProvider";
import { Info, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function BalanceCard() {
  const { totalBalance, transactions } = useContability();
  const [showHelp, setShowHelp] = useState(false);
  const [showAllDivisas, setShowAllDivisas] = useState(false);
  const [currency, setCurrency] = useState<string>();

  // async function convertCurrency(amount: number, from: string, to: string) {
  //   // Las divisas deben ser códigos de 3 letras (EUR, USD, GBP)
  //   if (from === to) return amount;

  //   try {
  //     const response = await fetch(
  //       `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
  //     );
  //     const data = await response.json();
  //     return data.rates[to];
  //   } catch (error) {
  //     console.error("Error al convertir divisa:", error);
  //     return amount; // Retorna el original si falla
  //   }
  // }

  return (
    <div
      className="
      relative overflow-hidden
      flex
      bg-brand-primary p-6 rounded-3xl 
      text-white shadow-xl shadow-slate-200/50
      w-full
      max-w-150
      dark:shadow-none
    "
    >
      <div className="absolute top-4 right-4 hover:opacity-100 transition-opacity">
        <button
          onClick={() => setShowHelp(true)}
          className="p-1 hover:bg-slate-800 rounded-full transition-colors"
        >
          <Info className="w-5 h-5" />
        </button>
      </div>

      {/* Cuerpo de la Tarjeta */}
      <div className="flex flex-col gap-1 w-full">
        <h3 className="text-slate-200 text-sm font-medium tracking-wide">
          Total Balance
        </h3>
        <div className="flex justify-between items-center pr-1">
          <div className="flex items-baseline">
            <select
              defaultValue={"USD"}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent text-white text-4xl rounded appearance-none p-2 border-none outline-none focus:ring-0 cursor-pointer"
            >
              <option value="USD">$</option>
              <option value="EUR">€</option>
              <option value="GBP">£</option>
            </select>

            <span className="text-4xl font-bold tracking-tight">
              {(totalBalance || 0).toFixed(2)}
            </span>
          </div>

          <button onClick={() => setShowAllDivisas(!showAllDivisas)}>
            {showAllDivisas ? (
              <ChevronDown className="w-10 h-10" />
            ) : (
              <ChevronUp className="w-10 h-10" />
            )}
          </button>
        </div>
        {showAllDivisas && (
          <div className="flex flex-col gap-1 text-2xl text-brand-primary bg-blue-50 p-3 rounded-lg animate-slide-down">
            <span>
              $
              {transactions
                .filter((item) => item.divisa === "USD") // Filtramos solo los USD
                .reduce((acc, item) => {
                  return item.type === "ingreso"
                    ? acc + item.count
                    : acc - item.count;
                }, 0)
                .toFixed(2)}{" "}
              USD
            </span>
            <span>
              €
              {transactions
                .filter((item) => item.divisa === "EUR") // Filtramos solo los USD
                .reduce((acc, item) => {
                  return item.type === "ingreso"
                    ? acc + item.count
                    : acc - item.count;
                }, 0)
                .toFixed(2)}{" "}
              EUR
            </span>
          </div>
        )}

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

      {showHelp && (
        <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md p-6 flex flex-col justify-center animate-in fade-in duration-300">
          <button
            onClick={() => setShowHelp(false)}
            className="absolute top-4 right-4 p-1"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>

          <h4 className="text-sm font-bold text-white mb-2">
            ¿Qué es el Balance Total?
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Es el resultado neto de tu actividad financiera. Se calcula sumando
            todos tus
            <span className="text-income font-bold"> ingresos</span> y restando
            tus
            <span className="text-expense font-bold"> egresos</span> registrados
            hasta la fecha.
          </p>
        </div>
      )}
    </div>
  );
}
