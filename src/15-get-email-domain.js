/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const str = email;
  let ind = 0;
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '@') {
      ind = i + 1;
    }
  }

  result = str.slice(ind);

  return result;
}

module.exports = getEmailDomain;
