import { solution } from "./solution";

describe("swap string", () => {
  test("aaaa - aaaa", () => {
    const result = solution("aaaa", "aaaa");
    expect(result).toBe(true);
  });

  test("bank - kanb", () => {
    const result = solution("bank", "kanb");
    expect(result).toBe(true);
  });

  test("bank - sant", () => {
    const result = solution("bank", "sant");
    expect(result).toBe(false);
  });

  test("asdf - asdg", () => {
    const result = solution("asdf", "asdg");
    expect(result).toBe(false);
  });
});
