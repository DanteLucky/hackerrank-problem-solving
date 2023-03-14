function utopianTree(n) {
    // Write your code here
    // Time Complexity: O(|n|)
    return (1 << (Math.ceil(n / 2) + 1)) - (n % 2) - 1;
  }
  