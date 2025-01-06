const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('')
  let arr2 = s2.split('')
  return arr1.reduce((acc, cur) => {
    if (arr2.includes(cur)) {
      arr2.splice((arr2.indexOf(cur)), 1)
      acc++
    }
    return acc
  }, 0)
}

module.exports = {
  getCommonCharacterCount
};
