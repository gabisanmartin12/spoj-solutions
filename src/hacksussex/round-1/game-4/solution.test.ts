import { solution } from "./solution";

describe("Hacksussex - r1 - g4", () => {
  test("[[5, 8], [3, 9], [5, 12], [16, 5]] => 3 rectangles - 5 length", () => {
    const result = solution([
      [5, 8],
      [3, 9],
      [5, 12],
      [16, 5],
    ]);
    expect(result).toBe(3);
  });
});
