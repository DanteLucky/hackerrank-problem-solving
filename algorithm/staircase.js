function staircase(n) {
    // Timecomplexity: O(n^2)
    // n is the input integer(length of the stair)
    // Write your code here
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i));
    }
}