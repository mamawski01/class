import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export class StrPhrase {
  constructor() {}
  static capEach1stLetter(str) {
    return str?.replace(/\b\w/g, (char) => char.toUpperCase());
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
