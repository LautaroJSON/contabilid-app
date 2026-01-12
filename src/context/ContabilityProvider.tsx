import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import type IContabilityItem from "@/types";

interface ContabilityContextType {
  transactions: IContabilityItem[];
  addTransaction: (item: IContabilityItem) => void;
  totalBalance: number;
  // Podrías agregar deleteTransaction o updateTransaction aquí más adelante
}

const ContabilityContext = createContext<ContabilityContextType | undefined>(
  undefined
);

export function ContabilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transactions, setTransactions] = useState<IContabilityItem[]>([]);

  const totalBalance = useMemo(() => {
    return transactions.reduce((acc, item) => {
      return item.type === "ingreso" ? acc + item.count : acc - item.count;
    }, 0);
  }, [transactions]);

  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      try {
        setTransactions(JSON.parse(saved));
      } catch (error) {
        console.error("Error al parsear transacciones:", error);
      }
    }
  }, []);

  const addTransaction = (item: IContabilityItem) => {
    setTransactions((prev) => {
      const newState = [item, ...prev];
      localStorage.setItem("transactions", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <ContabilityContext.Provider
      value={{ transactions, addTransaction, totalBalance }}
    >
      {children}
    </ContabilityContext.Provider>
  );
}

// Hook personalizado para usar el contexto fácilmente
export function useContability() {
  const context = useContext(ContabilityContext);
  if (!context) {
    throw new Error(
      "useContability debe usarse dentro de un ContabilityProvider"
    );
  }
  return context;
}
