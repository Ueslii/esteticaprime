import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina várias classes do Tailwind de forma segura.
 * Exemplo:
 * cn("text-sm", isActive && "text-yellow-400") → "text-sm text-yellow-400"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
