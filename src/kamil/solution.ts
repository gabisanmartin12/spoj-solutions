// K => T
// G => D
// R => L, F

export default (word: string) => {
  let combinations = 0;

  for (let letter of word) {
    if (["T", "D", "L", "F"].includes(letter)) {
      combinations++;
    }
  }

  return Math.pow(combinations, 2);
};
