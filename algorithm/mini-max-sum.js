function miniMaxSum(arr) {
    // Timecomplexity: O(|n|)
    const result = arr.reduce(
        (prev, curr) => prev + curr, 0);
    console.log(result - Math.max(...arr), result - Math.min(...arr));
}