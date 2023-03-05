function simpleArraySum(ar) {
    // Time Complexity: O(n)
    // n is the length of ar
    return ar.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0);
}