# Deep equals

Build a deepEquals function which takes in two values that can be anything but functions. They could be as simple as a number and as complex as N-level nested objects with different types of properties at different levels.
It should compare every single value in both arguments and return true when they have exactly the same values.

## Examples

```typescript
deepEquals(NaN, NaN); // true
deepEquals(null, null); // true
deepEquals({ a: 1, b: 2 }, { b: 2, a: 1 }); // true
deepEquals({ a: undefined, b: 1 }, { b: 1, c: 3 }); // false
deepEquals({}, []); // false
deepEquals(0, "0"); // false
deepEquals({ "0": "a" }, ["a"]); // false
```
