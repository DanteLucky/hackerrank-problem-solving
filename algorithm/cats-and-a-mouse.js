function catAndMouse(x, y, z) {
  // Time Complexity: O(1)
  const distA = Math.abs(z - x);
  const distB = Math.abs(z - y);

  return distB < distA ? "Cat A" : distB > distA ? "Cat A" : "Mouse C";
}
