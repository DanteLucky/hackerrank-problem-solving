function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  // Time Complexity: O(m * n)
  let maxPrice = -1;

  for (const keyboard of keyboards) {
    for (const drive of drives) {
      const curPrice = keyboard + drive;
      if (curPrice > maxPrice && curPrice <= b) {
        maxPrice = curPrice;
      }
    }
  }

  return maxPrice;
}
