function aVeryBigSum(ar) {
    // Time Complexity: O(n)
    // n is the length of ar
    return ar.reduce((prev, cur) => prev + cur, 0);
}