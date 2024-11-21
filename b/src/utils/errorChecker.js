export function errorValue(value) {
  const type = typeof value;
  const message = `Value is (${value}), value type is (${type}).`;
  //equality
  if (value === null)
    throw new TypeError(`null. Value is (null), value type is (null).`);
  if (value === undefined) throw new TypeError(`undefined. ${message}`);
  //type of
  if (typeof value === "boolean") throw new TypeError(`boolean. ${message}`);
  if (typeof value === "number") throw new TypeError(`number. ${message}`);
  if (typeof value === "string") throw new TypeError(`string. ${message}`);
  if (typeof value === "function") throw new TypeError(`function. ${message}`);
  //special
  if (Array.isArray(value))
    throw new TypeError(`Array. Value is [${value}], value type is array.`);
  if (
    value.constructor === Object &&
    !Array.isArray(value) &&
    !(value instanceof RegExp) &&
    !(value instanceof Error)
  )
    throw new TypeError(`Object. Value is {${value}}, value type is ${type}.`);
  //customized

  //Not categorize
  throw new TypeError(`Value not Categorize.`);
}

export class TypeCheck {
  constructor() {}
  //equality
  static null(value) {
    if (value === null) return value;
    return errorValue(value);
  }
  static undefined(value) {
    if (value === undefined) return value;
    return errorValue(value);
  }
  //type of
  static boolean(value) {
    if (typeof value === "boolean") return value;
    return errorValue(value);
  }
  static number(value) {
    if (typeof value === "number") return value;
    return errorValue(value);
  }
  static string(value) {
    if (typeof value === "string") return value;
    return errorValue(value);
  }
  static function(value) {
    if (typeof value === "function") return value;
    return errorValue(value);
  }
  //special
  static array(value) {
    if (Array.isArray(value)) return value;
    return errorValue(value);
  }
  static object(value) {
    if (
      value.constructor === Object &&
      !Array.isArray(value) &&
      !(value instanceof RegExp) &&
      !(value instanceof Error)
    )
      return value;
    return errorValue(value);
  }
}
