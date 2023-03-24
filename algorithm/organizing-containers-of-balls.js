function organizingContainers(container) {
    // Time complexity - O(|containers|²)
  
    const n = container.length;
  
    const source = container
      .map((bucket) => bucket.reduce((acc, v) => acc + v))
      .sort((a, b) => a - b);
  
    const target = new Array(n).fill(0);
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        target[i] += container[j][i];
      }
    }
  
    target.sort((a, b) => a - b);
  
    return source.every((v, i) => v === target[i]) ? "Possible" : "Impossible";
  }