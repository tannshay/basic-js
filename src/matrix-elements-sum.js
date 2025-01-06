const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const col = matrix[0].length
  const row = matrix.length
  let res = 0
  for (let i = 0; i < col; i++) {
    res += matrix[0][i]
  }
  for (let i = 0; i < col; i++) {
    for (let j = 1; j < row; j++) {
      if (matrix[j - 1][i] !== 0) {
        res += matrix[j][i]
      }
    }
  }
  return res
}

module.exports = {
  getMatrixElementsSum
};
