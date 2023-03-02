function simpleArraySum(ar) {
    // Write your code here
    return ar.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0);
}