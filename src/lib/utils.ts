
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function hasAdvantage(value1: any, value2: any): boolean {
  // For boolean values
  if (value1 === true && value2 !== true) return true;
  
  // For numeric values (assuming higher is better)
  if (typeof value1 === 'number' && typeof value2 === 'number') {
    return value1 > value2;
  }
  
  // Default case - no clear advantage
  return false;
}
