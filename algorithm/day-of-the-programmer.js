function dayOfProgrammer(year) {
    // Time Complexity: O(1)
    const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year === 1918) {
      daysOfMonth[2] = 15;
    } else if (year < 1918) {
      if (year % 4 === 0) {
        daysOfMonth[2] = 29;
      }
    } else if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
      daysOfMonth[2] = 29;
    }
  
    let day = 256;
    let month = 1;
  
    while (day - daysOfMonth[month] > 0) {
      day -= daysOfMonth[month];
      month++;
    }
  
    return [day, month, year]
      .map((num) => num.toString().padStart(2, "0"))
      .join(".");
  }  