function pickingNumbers(a) {
  // Write your code here
  // Time Complexity: O(n)
  const freqArr = a.reduce(
    (freq, value) => (freq[value - 1]++, freq),
    new Array(99).fill(0)
  );

  let result = 0;

  for (let i = 1; i < freqArr.length; i++) {
    if (result < a[i - 1] + a[i]) {
      result = a[i - 1] + a[i];
    }
  }

  return result;
}
