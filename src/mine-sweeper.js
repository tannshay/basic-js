const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const col = matrix[0].length
  const row = matrix.length
  const res = Array.from({ length: row }, () => Array(col).fill(0))
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j]) {
        if (i > 0) {
          res[i - 1][j]++
        }
        if (i < row - 1) {
          res[i + 1][j]++
        }
        if (j > 0) {
          res[i][j - 1]++
        }
        if (j < col - 1) {
          res[i][j + 1]++
        }
        if (i > 0 && j > 0) {
          res[i - 1][j - 1]++
        }
        if (i > 0 && j < col - 1) {
          res[i - 1][j + 1]++
        }
        if (i < row - 1 && j > 0) {
          res[i + 1][j - 1]++
        }
        if (i < row - 1 && j < col - 1) {
          res[i + 1][j + 1]++
        }
      }
    }
  }
  return res
}

module.exports = {
  minesweeper
};
