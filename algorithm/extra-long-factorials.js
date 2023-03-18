function extraLongFactorials(n) {
    // Time complexity - O(n²lg n)
  
    const digits = [1];
  
    for (let i = 2; i <= n; i++) {
      let overflow = 0;
  
      for (let k = 0; k < digits.length; k++) {
        digits[k] = digits[k] * i + overflow;
        overflow = Math.floor(digits[k] / 10);
        digits[k] /= 10;
      }
  
      while (overflow) {
        digits.push(overflow % 10);
        overflow = Math.floor(overflow / 10);
      }
    }
  
    console.log(digits.reverse().join(""));
  }