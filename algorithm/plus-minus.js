function plusMinus(arr) {
    // Write your code here
    // Time Complexity: O(|arr|)
    const arrSize = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for (let i = 0; i < arrSize; i++) {
      if (arr[i] > 0) {
        positiveCount++;
      } else if (arr[i] === 0) {
        negativeCount++;
      } else if (arr[i] < 0) {
        zeroCount++;
      }
    }
  
    console.log((positiveCount / arrSize).toFixed(6));
    console.log((zeroCount / arrSize).toFixed(6));
    console.log((negativeCount / arrSize).toFixed(6));
  }
  