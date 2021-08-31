

var sort = function(array) {

};

/*
 * MERGE FUNCTION:
 *
 * In: Two sorted arrays
 * Out: One sorted array
 * Constraints: Assume only number-element arrays will be passed in
 *              elements can be positive or negative
 * Edge: Different sized L vs. R (will only be +/- 1 length)
 *       Widely spaced numbers: will this make a difference?
 *        Neither should...
 *
 *
 * Strats:
 * Merge will have to look at both arrays and
 *  place one item at a time into the new array
 * Clearly, we'll start at the beginning
 * For each index in the left array
 *    we should compare the element in the same index of the right array
 *    whichever element is smaller gets pushed first.

 *    once we determine an element in array A is smaller than an element in array B,
 *    we push element in array A to the sorted array
 *    we then compare the next element in array A to the same element from previous comparison in array B (make sure index doesn't get reset)
 *    once we push an element in array B,
 *    we compare the same element from previous comparison in array A to the next element in array B
 *
 *    NOTE: One element in array A CAN get compared all of B's unchecked elements and vise-versa
 *
 *  If we are at the end of array A, we can safely push the remaining elements to be checked in array B
 */

var merge = function(left, right) {

};

// tests:
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
 *
 *
 */

var tests = [
  // equal sized
  [[2, 4, 5, 9], [1, 3, 7, 8]],
  [[1, 3, 5, 7], [2, 4, 6, 8]],
  [[3, 5, 6, 9], [12, 14, 15, 19]],
  [[20, 21, 24, 25], [0, 4, 6, 7]],
  [[3, 3, 4, 5], [1, 2, 2, 29]],
  [[1, 3, 4, 8], [1, 3, 4, 8]],
  // lopsided
  [[2, 4, 5], [1, 3, 7, 8]],
  [[1, 3, 5, 7], [2, 4, 6]],
  [[3, 5, 6, 9], [12, 14, 15]],
  [[20, 21, 24], [0, 4, 6, 7]],
  [[3, 3, 4, 5], [1, 2, 2]],
  [[1, 3, 4], [1, 3, 4, 8]],
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

var testMerge(testCases) {
  var length = testCases.length;
  var currentPair, result, testNumber
  for (var i = 0; i < length; i++) {
    currentPair = testCases[i]
    result = merge(currentPair[0], currentPair[1])
    console.log(result);
    testNumber = i + 1;
    console.log('test ' + testNumber + isSorted(currentPair));
  }
}(tests);




 /*
 *
 * SORT FUNCTION:
 *
 * In: An array
 * Out: A sorted array
 * Constraints: Only worry about an array of numbers for now
 *              Return to other edgecases later
 * Edge: Empty array
 *       later:
 *       (Not an array
 *       Array with mixed types)

 *
 *
 * Strats:
 * We sort the array by splitting it into two.
 *    We sort the left half
 *    We sort the right half
 *    We then merge them
 */