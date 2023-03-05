function diagonalDifference(arr) {
    // Time Complexity: O(n)
    // n is the length of arr
    let result = 0;
    for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        result += arr[i][i] - arr[i][j];
    }
    return Math.abs(result);
}