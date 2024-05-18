import { deepEquals } from "./solution";

describe("deepEquals", () => {
  describe("null", () => {
    test("null", () => {
      const result = deepEquals(null, null);
      expect(result).toBe(true);
    });

    test("undefined", () => {
      const result = deepEquals(null, undefined);
      expect(result).toBe(false);
    });

    test("empty string", () => {
      const result = deepEquals(null, "");
      expect(result).toBe(false);
    });

    test("empty object", () => {
      const result = deepEquals(null, {});
      expect(result).toBe(false);
    });

    test("empty array", () => {
      const result = deepEquals(null, []);
      expect(result).toBe(false);
    });

    test("NaN", () => {
      const result = deepEquals(null, NaN);
      expect(result).toBe(false);
    });
  });

  describe("undefined", () => {
    test("undefined", () => {
      const result = deepEquals(undefined, undefined);
      expect(result).toBe(true);
    });

    test("null", () => {
      const result = deepEquals(undefined, null);
      expect(result).toBe(false);
    });

    test("empty string", () => {
      const result = deepEquals(undefined, "");
      expect(result).toBe(false);
    });

    test("empty object", () => {
      const result = deepEquals(undefined, {});
      expect(result).toBe(false);
    });

    test("empty array", () => {
      const result = deepEquals(undefined, []);
      expect(result).toBe(false);
    });

    test("NaN", () => {
      const result = deepEquals(undefined, NaN);
      expect(result).toBe(false);
    });
  });

  describe("NaN", () => {
    test("NaN", () => {
      const result = deepEquals(NaN, NaN);
      expect(result).toBe(true);
    });

    test("undefined", () => {
      const result = deepEquals(NaN, undefined);
      expect(result).toBe(false);
    });

    test("null", () => {
      const result = deepEquals(NaN, null);
      expect(result).toBe(false);
    });

    test("empty string", () => {
      const result = deepEquals(NaN, "");
      expect(result).toBe(false);
    });

    test("empty object", () => {
      const result = deepEquals(NaN, {});
      expect(result).toBe(false);
    });

    test("empty array", () => {
      const result = deepEquals(NaN, []);
      expect(result).toBe(false);
    });
  });

  describe("zero against falsy values", () => {
    test("zero", () => {
      const result = deepEquals(0, 0);
      expect(result).toBe(true);
    });

    test("empty string", () => {
      const result = deepEquals(0, "");
      expect(result).toBe(false);
    });

    test("empty array", () => {
      const result = deepEquals(0, []);
      expect(result).toBe(false);
    });

    test("empty object", () => {
      const result = deepEquals(0, {});
      expect(result).toBe(false);
    });

    test("null", () => {
      const result = deepEquals(0, null);
      expect(result).toBe(false);
    });

    test("undefined", () => {
      const result = deepEquals(0, undefined);
      expect(result).toBe(false);
    });

    test("NaN", () => {
      const result = deepEquals(0, NaN);
      expect(result).toBe(false);
    });
  });

  describe("one level objects", () => {
    test("empty objects", () => {
      const result = deepEquals({}, {});
      expect(result).toBe(true);
    });

    test("empty array", () => {
      const result = deepEquals({}, []);
      expect(result).toBe(false);
    });

    test("object with numbered index", () => {
      const result = deepEquals({ "0": "a" }, ["a"]);
      expect(result).toBe(false);
    });

    test("null", () => {
      const result = deepEquals({}, null);
      expect(result).toBe(false);
    });

    test("undefined", () => {
      const result = deepEquals({}, undefined);
      expect(result).toBe(false);
    });

    test("ordered properties", () => {
      const result = deepEquals(
        { a: 1, b: "2", c: undefined },
        { a: 1, b: "2", c: undefined }
      );
      expect(result).toBe(true);
    });

    test("unordered properties", () => {
      const result = deepEquals(
        { a: 1, b: "2", c: undefined },
        { c: undefined, a: 1, b: "2" }
      );
      expect(result).toBe(true);
    });
  });

  describe("deep objects", () => {
    test("same object", () => {
      const nestedObject = { a: { b: { c: { d: { e: 1 } } } } };
      const result = deepEquals(nestedObject, nestedObject);
      expect(result).toBe(true);
    });

    test("different same object", () => {
      const result = deepEquals(
        { a: { b: { c: { d: { e: 1 } } } } },
        { a: { b: { c: { d: { e: 1 } } } } }
      );
      expect(result).toBe(true);
    });

    test("different object", () => {
      const result = deepEquals({ a: undefined, b: 2 }, { b: 2, c: 3 });
      expect(result).toBe(false);
    });

    test("complex object", () => {
      const result = deepEquals(
        {
          a: [1, 2, 3, { a: 1, b: ["a", undefined] }],
          b: NaN,
          c: "loooooong string",
          nested: { a: { b: { c: {}, d: [1, 2, 3] } } },
        },
        {
          a: [1, 2, 3, { a: 1, b: ["a", undefined] }],
          b: NaN,
          c: "loooooong string",
          nested: { a: { b: { c: {}, d: [1, 2, 3] } } },
        }
      );
      expect(result).toBe(true);
    });
  });

  describe("one level array", () => {
    test("empty arrays", () => {
      const result = deepEquals([], []);
      expect(result).toBe(true);
    });

    test("different arrays", () => {
      const result = deepEquals(["1"], [1]);
      expect(result).toBe(false);
    });

    test("number arrays", () => {
      const result = deepEquals([1, 2, 3, 4], [1, 2, 3, 4]);
      expect(result).toBe(true);
    });

    test("string arrays", () => {
      const result = deepEquals(["1", "2", "3", "4"], ["1", "2", "3", "4"]);
      expect(result).toBe(true);
    });

    test("random array", () => {
      const result = deepEquals(
        ["1", null, 3, NaN, undefined],
        ["1", null, 3, NaN, undefined]
      );
      expect(result).toBe(true);
    });
  });

  describe("deep arrays", () => {
    test("same big array", () => {
      const array = new Array(100000).fill(0);
      const result = deepEquals(array, array);
      expect(result).toBe(true);
    });

    test("big arrays", () => {
      const array1 = new Array(100000).fill(0);
      const array2 = new Array(100000).fill(0);
      const result = deepEquals(array1, array2);
      expect(result).toBe(true);
    });

    test("nested arrays", () => {
      const result = deepEquals(
        [1, [2, [3, [4, [5, [6]], 7]], 8], 9],
        [1, [2, [3, [4, [5, [6]], 7]], 8], 9]
      );
      expect(result).toBe(true);
    });

    test("nested custom arrays", () => {
      const result = deepEquals(
        [1, { a: "b" }, [4, { c: [5, 5, NaN, undefined, { prop: "this" }] }]],
        [1, { a: "b" }, [4, { c: [5, 5, NaN, undefined, { prop: "this" }] }]]
      );
      expect(result).toBe(true);
    });
  });
});
