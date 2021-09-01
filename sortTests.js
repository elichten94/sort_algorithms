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

// SORT TESTS:
/**
 *
 * Empty array
 * Array of all same numbers
 * Array with negatives
 * Array with decimals
 * Array that's already sorted
 *
 *
 * Later:
 *
 * Sortable values:
  * Array of strings
  * Array of bools? not sure if should be sortable
 *
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
 *
 *
 */

var tests = [
];