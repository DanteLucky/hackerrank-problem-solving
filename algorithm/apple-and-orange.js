/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apple
 *  6. INTEGER_ARRAY orangess
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Time complexity: O(|apples| + |oranges|)
    const isBetween = (v) => s <= v && v <= t;
    console.log(apples.map(value => a + value).filter(isBetween).length);
    console.log(oranges.map(value => b + value).filter(isBetween).length);
}
