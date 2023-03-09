function sockMerchant(n, ar) {
    // Time Complexity: O(n)
    return ar
      .reduce((freq, value) => (freq[value - 1]++, freq), new Array(100).fill(0))
      .reduce((k, v) => k + Math.floor(v / 2), 0);
  }