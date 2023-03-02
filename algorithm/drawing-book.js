function pageCount(n, p) {
  // Write your code here
  // Time Complexity: O(1)

  return Math.min(
    n % 2 ? Math.floor((n - p) / 2) : Math.ceil((n - p) / 2),
    Math.floor(p / 2)
  );
}
