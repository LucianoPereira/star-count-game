export const range = (start, end) =>
  new Array(end - start + 1).fill().map((el, ind) => ind + start);

export const sum = (arr) => arr.reduce((a, b) => a + b, 0);

export const sumIn = (arr, max) => {
  const sets = [[]];
  const sums = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, len = sets.length; j < len; j++) {
      const pickedSet = sets[j].concat(arr[i]);
      const pickedSum = sum(pickedSet);
      if (pickedSum <= max) {
        sets.push(pickedSet);
        sums.push(pickedSum);
      }
    }
  }

  return sums;
};
