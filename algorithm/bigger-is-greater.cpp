string biggerIsGreater(string w) {
  // Time complexity - O(|w|)
  return next_permutation(w.begin(), w.end()) ? w : string("no answer");
}