export function deepEquals(valueOne: any, valueTwo: any) {
  // Different types
  if (typeof valueOne !== typeof valueTwo) return false;
  // Primitive values, undefined and NaN.
  if (typeof valueOne !== "object") return Object.is(valueOne, valueTwo);

  // is the same object? we don't need to deep compare then.
  if (valueOne === valueTwo) return true;
  // Either one is null
  if (!valueOne || !valueTwo) return false;
  // Beyond this point, both should be either arrays or objects
  if (Array.isArray(valueOne) !== Array.isArray(valueTwo)) return false;

  // Different sizes
  const valueOneKeys = Object.keys(valueOne);
  if (valueOneKeys.length !== Object.keys(valueTwo).length) return false;

  // Both are objects or arrays, so we should iterate over each property/index.
  return valueOneKeys.every(
    (key) => key in valueTwo && deepEquals(valueOne[key], valueTwo[key])
  );
}