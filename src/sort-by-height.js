const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for (let leftBorder = 0; leftBorder < arr.length - 1; leftBorder++) {
    let minIndex = leftBorder
    let cur = leftBorder + 1
    while (cur < arr.length) {
      if (arr[cur] !== -1 && arr[cur] < arr[minIndex]) {
        minIndex = cur
      }
      cur++
    }

    if (minIndex !== leftBorder) {
      const temporary = arr[leftBorder]
      arr[leftBorder] = arr[minIndex]
      arr[minIndex] = temporary
    }
  }
  return arr
}

module.exports = {
  sortByHeight
};
