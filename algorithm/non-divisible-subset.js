function nonDivisibleSubset(k, s) {
  // Time complexity - O(|s| + k)

  const freq = s.reduce(
    (acc, value) => (acc[value % k]++, acc),
    new Array(100).fill(0)
  );

  let maxLen = Math.min(freq[0], 1);

  if (k % 2 === 0) {
    maxLen += Math.min(freq[k / 2], 1);
  }

  for (let i = 1; i < Math.ceil(k / 2); i++) {
    maxLen += Math.max(freq[i], freq[k - i]);
  }

  return maxLen;
}