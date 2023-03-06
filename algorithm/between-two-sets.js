function getTotalX(a, b) {
    // Time Complexity: O(|gcd(b) / lcm(a)|)
    const gcd = (a, b) => (b ? gcd(b, a % b) : a);
    const lcm = (a, b) => (a * b / gcd(a, b));

    const lcmA = a.reduce(lcm);
    const gcdB = b.reduce(gcd);

    let result = 0;

    for (let i = 1; i <= gcdB / lcmA; i++) {
        if (gcdB % (lcmA * i) == 0) {
            result++;
        }
    }

    return result;
}