type Rectangle = [number, number];

export const solution = (rectangles: Rectangle[]) => {
  let largestLength = 0;
  const countByLength = new Map<number, number>();
  
  for (const rectangle of rectangles) {
    const maxLength = Math.min(rectangle[0], rectangle[1]);
    if (maxLength > largestLength) largestLength = maxLength;
    const counter = countByLength.get(maxLength);
    countByLength.set(maxLength, (counter ?? 0) + 1);
  }

  return countByLength.get(largestLength);
};
