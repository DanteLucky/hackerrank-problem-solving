function hurdleRace(k, height) {
  // Write your code here
  // Time Complexity: O(n)
  return Math.max(Math.max(...height) - k, 0);
}
