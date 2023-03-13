function climbingLeaderboard(ranked, player) {
    // Write your code here
    // Time Complexity: O(m + n)
    // m: The length of the players array
    // n: The length of the ranked array
    let newLen = 0;
  
    for (let i = 0; i < ranked.length; i++) {
      if (ranked[i] !== ranked[i + 1]) {
        ranked[newLen++] = ranked[i];
      }
    }
  
    ranked.splice(newLen);
  
    const result = [];
    let j = ranked.length - 1;
  
    for (let i = 0; i < player.length; i++) {
      while (ranked[j] <= player[i]) {
        j--;
      }
  
      result.push(j + 2);
    }
  
    return result;
  }
  