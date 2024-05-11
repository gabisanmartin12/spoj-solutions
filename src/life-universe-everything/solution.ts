const IGNORE_AFTER = 42;

export default (input: number[]) => {
  const result: number[] = [];
  for (let index = 0; index <= input.length; index++) {
    const value = input[index];
    if (value === IGNORE_AFTER) break;
    result.push(value);
  }
  return result;
};
