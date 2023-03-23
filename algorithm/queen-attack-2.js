function queensAttack(n, k, r_q, c_q, obstacles) {
    // Time complexity - O(|obstacles|)
  
    const row = ([r]) => r - r_q;
    const col = ([, c]) => c - c_q;
  
    const directions = [
      { isLine: ([r]) => r === r_q, edges: [0, n + 1], dist: col },
      { isLine: ([, c]) => c === c_q, edges: [0, n + 1], dist: row },
      {
        isLine: ([r, c]) => r - c === r_q - c_q,
        edges: [0, n - Math.abs(r_q - c_q) + 1],
        dist: r_q >= c_q ? col : row,
      },
      {
        isLine: ([r, c]) => r + c === r_q + c_q,
        edges: [Math.max(0, r_q + c_q - n - 1), Math.min(r_q + c_q, n + 1)],
        dist: col,
      },
    ];
  
    let result = 0;
  
    for (const { isLine, edges, dist } of directions) {
      const obs = [...obstacles.filter(isLine), ...edges.map((v) => [v, v])].map(
        dist
      );
      result += Math.min(...obs.filter((d) => d > 0));
      result -= Math.max(...obs.filter((d) => d < 0));
    }
  
    return result - 8;
  }