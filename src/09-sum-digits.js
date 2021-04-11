/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let m = n;

  if (m < 10) {
    return m;
  }

  while (m > 0) {
    sum += m % 10;
    m = Math.floor(m / 10);
    if (m < 10) {
      sum += m;
      m = 0;
    }
  }

  if (sum > 9) {
    m = sum;
    sum = 0;
    while (m > 0) {
      sum += m % 10;
      m = Math.floor(m / 10);
    }
  } else {
    return sum;
  }

  return sum;
}

module.exports = getSumOfDigits;
