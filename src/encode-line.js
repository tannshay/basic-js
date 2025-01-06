const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return ''
  }
  let encStr = ''
  let count = 1
  let cur = str[0]
  for (let i = 1; i < str.length; i++) {
    if (str[i] === cur) {
      count++
    } else {
      if (count == 1) {
        encStr += cur
      } else {
        encStr += count + cur
      }
      cur = str[i]
      count = 1
    }
  }
  if (count == 1) {
    encStr += cur
  } else {
    encStr += count + cur
  }
  return encStr
}

module.exports = {
  encodeLine
};
