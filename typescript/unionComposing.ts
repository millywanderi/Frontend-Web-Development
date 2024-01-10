// Declare that a type could be one of many types.
type colors = "Pink" | "Blue" | "Green";
type positiveEvenNumbersUnderTen = 2 | 4 | 6 | 8;

/*
 * Unions provide a way to handle different types too.
 * For example, you may have a function that takes an array or a string:
 */
function getLength(obj: string | string[]) {
  return obj.length;
}

/*
 * can make a function return different values depending on whether
 * it is passed a string or an array:
 */
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}
