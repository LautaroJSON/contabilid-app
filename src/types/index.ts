export interface IContabilityItem {
  id: string;
  title: string;
  details: string;
  count: number;
  type: "ingreso" | "egreso";
  divisa: "€" | "$" | "£";
  date: string; // Fecha en formato ISO
}
