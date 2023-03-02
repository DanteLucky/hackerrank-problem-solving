function birthdayCakeCandles(candles) {
    // Write your code here
    // Timecomplexity: O(n)
    // n is the length of the arr
    const highestCandle = Math.max(...candles);
    return candles.filter((v) => (v === highestCandle)).length;
}