function bonAppetit(bill, k, b) {
    // Time Complexity: O(|bill|)
    const sum = bill.reduce((prev, cur) => prev + cur);
    console.log(b - (sum - bill[k]) / 2 || "Bon Appetit");
  }