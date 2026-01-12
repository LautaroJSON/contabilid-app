import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function ClassNamesProps(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
