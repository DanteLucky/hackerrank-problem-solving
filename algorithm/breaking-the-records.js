function breakingRecords(scores) {
    // Write your code here
    // Time complexity: O(|scores|)
    // n is the leng of the scores
    let min = scores[0];
    let max = scores[0];
    let maxCount = 0;
    let minCount = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            maxCount++;
            max = scores[i];
        }
        if (scores[i] < min) {
            minCount++;
            min = scores[i];
        }
    }
    return [maxCount, minCount];
}