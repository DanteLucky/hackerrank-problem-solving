function miniMaxSum(arr) {
    // Timecomplexity: O(n)
    // n is the length of the arr
    // Write your code here
    const result = arr.reduce(
        (prev, curr) => prev + curr, 0);
    console.log(result - Math.max(...arr), result - Math.min(...arr));
}