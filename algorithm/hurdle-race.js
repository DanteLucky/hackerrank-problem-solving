function hurdleRace(k, height) {
    // Write your code here
    // Time Complexity: O(|height|)
    return Math.max(Math.max(...height) - k, 0);
  }
  