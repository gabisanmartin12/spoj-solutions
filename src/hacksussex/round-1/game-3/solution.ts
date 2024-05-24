export const solution = (s1: string, s2: string) => {
  // Same word? No swaps.
  if (s1 === s2) return true;

  // Track how many characters are different
  const differentIndexes: string[] = [];
  for (const index of Object.keys(s1)) {
    if (s1[index] !== s2[index]) {
      differentIndexes.push(index);
    }
  }

  // Not two differences means one swap is not enough
  if (differentIndexes.length !== 2) return false;

  // Cross validation
  const [first, second] = differentIndexes;
  return s1[first] === s2[second] && s1[second] === s2[first];
};
