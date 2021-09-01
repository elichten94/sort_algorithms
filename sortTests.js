// SORT TESTS:
/**
 *
 * Empty array
 * Array with one element
 * Array of all same numbers
 * Array with one unique value
 * Array with negatives
 * Array with decimals
 * Array that's already sorted
 * Array in reverse-sorted order
 * ^ passed
 *
 *
 * LATER:
 *
 * Sortable values:
  * Array of strings
  * Array of bools? not sure if should be sortable
 *
 * Should throw errors for:
  * no argument
  * more than one argument
  * non-array input
  * Unsortable values:
    * Array of falsy values
    * Array of mixed values
    * Array of functions
  *
 * Other - see what outputs:
  * Array of arrays
  * Array of objects
 */


var sortTests = [
  [],
  [3],
  [0],
  [-1],
  [-0],
  [2, 2, 2, 2, 2],
  [0, 0, 0],
  [0.4, 0.4, 0.4],
  [4, 4, 4, 1, 4, 4, 4, 1],
  [4, 2, 2, 2, 2, 4],
  [-3, 5, 6, -3, -78, 0, 5],
  [-3, -4, -5, -1, -2, -56, -41, -12, -4],
  [3.2, 0.45, 3.4, 9, 95.342903, 34.9, 2, 1, 9,54, 7.777777, 3, 2.34],
  [0.3, 4.2, 31.5, 3.9808, 4.5, 6.3, 8.241, 2.4601],
  [0.1, 0.099999, 4.99999999, 5.0, 5.001, 0.099998],
  [2, 3, 4, 7, 8, 12, 32, 41, 42, 47],
  [-2.09, -2.089999, 0, 1.3, 1.9, 27, 45.887],
  [67, 45.73, 31.09, 31, 30.999999],
  [53, 52, 51, 50]
];



// borrow merge() and sort()
var ms = require('./mergeSort.js');
// borrow isSorted()
var tests = require('./mergeTests');


var testSort = function(testCases) {
  var testNumber, result, expectedLength, actualLength;
  var answer = testCases.every(function(current, i, arr) {
    testNumber = i + 1;
    result = ms.sort(current);
    if (tests.isSorted(result)) {
      console.log(result);
      return true;
    } else {
      console.log('====================================');
      console.log('Bug at test ' + testNumber + ':');
      console.log('expected length: ', expectedLength);
      console.log('got length of: ', actualLength);
      console.log('result of calling sort() on ' + current + ' :');
      console.log(result);
      console.log('====================================');
      return false;
    }
  });

  if (answer) {
    console.log('Success - all tests passed');
  }

}(sortTests);