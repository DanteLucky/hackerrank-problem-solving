function bonAppetit(bill, k, b) {
  // Write your code here
  // Time Complexity: O(n)
  const sum = bill.reduce((prev, cur) => prev + cur);
  console.log(b - (sum - bill[k]) / 2 || "Bon Appetit");
}
