// MERGE TESTS:
/**
 * Arrays of equal size:
 *    Arrays with inconsistent intervals
 *    Arrays with consistent intervals
 *    Array 1's elems are all bigger than Array 2's
 *      ^vice versa
 *    Arrays with repeated numbers
 *    Arrays with the same elements at each index
 * Arrays of +/- 1 diff length:
 *    Arrays with inconsistent intervals
 *    Arrays with consistent intervals
 *    Array 1's elems are all bigger than Array 2's
 *      ^vice versa
 *    Arrays with repeated numbers
 *    Arrays with the same elements at each index
 */

 var testsForMerge = [
  // equal sized
  [[2, 4, 5, 9], [1, 3, 7, 8]],
  [[1, 3, 5, 7], [2, 4, 6, 8]],
  [[-2, -1, 0, 5], [-4, -3, -1, 5]],
  [[3, 5, 6, 9], [12, 14, 15, 19]],
  [[20, 21, 24, 25], [0, 4, 6, 7]],
  [[3, 3, 4, 5], [1, 2, 2, 29]],
  [[1, 3, 4, 8], [1, 3, 4, 8]],
  [[3], [5]],
  [[1], [0]],
  [[3], [-5]],
  // lopsided
  [[2, 4, 5], [1, 3, 7, 8]],
  [[1, 3, 5, 7], [2, 4, 6]],
  [[3, 5, 6, 9], [12, 14, 15]],
  [[20, 21, 24], [0, 4, 6, 7]],
  [[3, 3, 4, 5], [1, 2, 2]],
  [[1, 3, 4], [1, 3, 4, 8]],
  [[2, 4], [1]],
  [[6], [7, 9]],
  [[5], [3, 4]],
  [[-2], [-7, -1]],
  [[-4, 0], [2]],
  [[-4, 0], [-2]]
];

var isSorted = function(array) {
  var answer = array.every(function(current, i, arr) {
    if (i === 0) {
      return true;
    } else {
      return arr[i-1] <= current
    }
  });
  return answer;
};

// borrow merge()
var ms = require('./mergeSort.js');

var testMerge = function(testCases) {
  var currentPair, left, right, result, testNumber, expectedLength, actualLength;
  var testResult = testCases.every(function(current, i, arr) {
    testNumber = i + 1;
    left = current[0];
    right = current[1];
    result = ms.merge(left, right);
    expectedLength = left.length + right.length;
    actualLength = result.length;
    if (isSorted(result) && expectedLength === actualLength) {
      return true;
    } else {
      console.log('====================================');
      console.log('Bug at test ' + testNumber + ':');
      console.log('expected length: ', expectedLength);
      console.log('got length of: ', actualLength);
      console.log('result of merging ' + left + ' and ' + right + ' :');
      console.log(result);
      console.log('====================================');
      return false;
    }
  });

  if (testResult) {
    console.log('Success - all tests passed');
  }

}(testsForMerge);

exports.isSorted = isSorted;