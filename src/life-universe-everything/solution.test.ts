import solution from "./solution";

describe("Life, the universe and Everything", () => {
  it("[1, 2, 88, 42, 99]", () => {
    const result = solution([1, 2, 88, 42, 99]);
    expect(result).toStrictEqual([1, 2, 88]);
  });
});
