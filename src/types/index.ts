export default interface IContabilityItem {
  id: string;
  title: string;
  details: string;
  count: number;
  type: "ingreso" | "egreso";
  divisa: "EUR" | "USD" | "GBP";
  date: string; // Fecha en formato ISO
}
