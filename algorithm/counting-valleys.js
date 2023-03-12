function countingValleys(steps, path) {
    // Write your code here
    // Time Complexity: O(n)
    let result = 0;
    let curLevel = 0;
    let prevLevel = 0;
  
    for (let i = 0; i < steps; i++) {
      curLevel += path[i] === "U" ? 1 : -1;
      if (curLevel === 0 && prevLevel < 0) {
        result++;
      }
      prevLevel = curLevel;
    }
  
    return result;
  }
  