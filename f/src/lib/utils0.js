import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { TypeCheck } from "./errorChecker";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export class StrPhrase {
  constructor() {}
  static capEach1stLetter(arr) {
    if (TypeCheck.array(arr)) {
      return arr.map((item) => item.charAt(0).toUpperCase() + item.slice(1));
    }
    throw new Error("Error in StrPhrase.capEach1stLetter");
  }
}

class UniqueOnly {
  constructor() {
    this.items = new Set();
  }
  addItem(item) {
    this.items.add(item);
  }
  getItems() {
    return [...new Set(this.items)];
  }
}

export const uniqueOnly = new UniqueOnly();

export class HoverColor {
  constructor() {}
  static alert() {
    return `hover:bg-red-950`;
  }
  static warn() {
    return `hover:bg-yellow-800`;
  }
  static save() {
    return `hover:bg-green-950`;
  }
}
