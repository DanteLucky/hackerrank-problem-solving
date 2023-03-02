/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // Write your code here
    // Time complexity: O(n)
    // n is the leng of the input square
    if (s.length < m) {
        return 0;
    }
    let sumSquare = s.slice(0, m).reduce((prev, cur) => prev + cur);
    let result = sumSquare === d ? 1 : 0;

    for (let i = m; i < s.length; i++) {
        sumSquare = sumSquare - s[i - m] + s[i];
        if (sumSquare === d) {
            result++;
        }
    }
    return result
}