function angryProfessor(k, a) {
    // Time Complexity: O(|a|)
    return a.filter((s) => s <= 0).length < k ? 'YES' : 'NO';
}