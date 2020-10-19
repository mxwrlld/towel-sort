
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if( toString.call(matrix) != '[object Array]' || matrix.length == 0) {
    return [];
  }
  let arr = [].concat(matrix[0]);
  for(let i = 1; i < matrix.length; ++i) {
    if( i % 2 == 0) {
      arr = arr.concat(matrix[i]);
    }
    else {
      arr = arr.concat(matrix[i].reverse());
    }
  }
  return arr;
}
