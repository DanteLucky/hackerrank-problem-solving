function birthdayCakeCandles(candles) {
    // Timecomplexity: O(|candles|)
    const highestCandle = Math.max(...candles);
    return candles.filter((v) => (v === highestCandle)).length;
}