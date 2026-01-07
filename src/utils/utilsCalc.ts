import type IContabilityItem from "@/types";

type GroupedTransactions = Record<string, IContabilityItem[]>;

export const groupTransactionsByCurrency = (
  transactions: IContabilityItem[]
): GroupedTransactions => {
  return transactions.reduce((acc, item) => {
    const currency = item.divisa as unknown as string;

    // Si la divisa aún no existe en nuestro "acumulador", creamos el array vacío
    if (!acc[currency]) {
      acc[currency] = [];
    }

    // Agregamos la transacción al grupo correspondiente
    acc[currency].push(item);

    return acc;
  }, {} as GroupedTransactions);
};
