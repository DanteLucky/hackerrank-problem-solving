function timeConversion(time) {
    // Write your code here
    const [h, m, s] = time.slice(0, -2).split(":").map(value => +value);
    if (time.slice(-2) === 'PM') {
        if (h < 12) {
            h = h + 12;
        }
    } else if (h === 12) {
        h = h - 12;
    }
    return [h, m, s].map(value => value.toString().padStart(2, '0')).join(':');
}