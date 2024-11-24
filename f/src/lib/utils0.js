import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Joi from "joi";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export class StrPhrase {
  constructor() {}
  static capEach1stLetter(arr) {
    const schema = Joi.object({
      arr: Joi.array().items(Joi.string()).required(),
    });
    const result = schema.validate({ arr });
    if (result.error) {
      throw new TypeError(result.error.message);
    }
    return arr.map((item) => item.charAt(0).toUpperCase() + item.slice(1));
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
