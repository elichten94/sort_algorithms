// MERGE FUNCTION:
/**
 *
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
 *
 *  TO HELP RUNTIME:
 *    When can we push multiple elements at a time?
 *    any elements in array B that are less than first element of array A
 *      and vice versa
 *    Try this with the paper tiles, see what happens later on in the array:
 *      Can we continue the process all the way to the end
 *      if left[i] < right[j]
 *        ... and left[i+1] < right[j]
 *        ... and left[i+2] < right[j]
 *        ... until left[i+n] > right[j]
 *        push left.slice(i, n) to the sorted array
 *
 *
 * DEBUGGING:
 *
 * if we finish appending one array,
 *   we should append the rest of other before quitting
 *
 * STRATEGY 2: POINTER LOOP
 *
 * Instead of a nested for loop,
 * lets try a while loop
 * we only advance left++ or right++ if we push from left or right!
 *
 * if we push from left:
 *  we should move the left pointer to the next element
 *
 * if we push from right:
 *  we should move the right pointer to the next element
 *
 * while the sorted array's length is less than the combined lengths of L and R:
 * (or while the left pointer is not at leftLength and the right pointer is not at rightLength):
 *    assess which is greater: leftElem or rightElem?
 *    if left is greater:
 *      push current left to the sorted array
 *      advance the left pointer to the next index
 *    otherwise:
 *      push current right to array
 *      advance the right pointer to the next index
 *
 *    if one of the pointers is now past the end of their array:
 *      we should eat up the rest of the other array from other pointer's position to end
 *      (update that pointer so the loop stops if using the second boolean expr above)
 *
 *
 *
 *
 */

var merge = function(leftArray, rightArray) {
  var sortedArray = [];
  var leftLength = leftArray.length;
  var rightLength = rightArray.length;
  var currentLeft, currentRight, leftIndex, rightIndex;
  var rightIndexWas = 0;

  for (leftIndex = 0; leftIndex < leftLength; leftIndex++) {
    // if (rightIndexWas === rightLength - 1) {
    //   sortedArray.push(leftArray.slice(leftIndex, leftLength));
    //   sortedArray = sortedArray.flat();
    //   break;
    // }
    currentLeft = leftArray[leftIndex];

    for (rightIndex = rightIndexWas; rightIndex < rightLength; rightIndex++) {
      currentRight = rightArray[rightIndex];
      if (currentLeft <= currentRight) {
        sortedArray.push(currentLeft);
        rightIndexWas = rightIndex;
        // allows us to move to next left item
        break;
      } else {
        sortedArray.push(currentRight);
        rightIndexWas = rightIndex;
      }
    }

    // if (leftIndex === leftLength - 1) {
    //   // get the remaining part of the right
    //   sortedArray.push(rightArray.slice(rightIndex, rightLength));
    //   sortedArray = sortedArray.flat();
    // }

  }

  return sortedArray;
};



// TESTS:
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
  if (answer) {
    return 'sorted!';
  } else {
    return 'not yet sorted';
  }
};

var testMerge = function(testCases) {
  var length = testCases.length;
  var currentPair, left, right, result, testNumber, expectedLength, actualLength;
  for (var i = 0; i < length; i++) {
    testNumber = i + 1;
    currentPair = testCases[i]
    left = currentPair[0];
    right = currentPair[1];
    result = merge(left, right);
    expectedLength = left.length + right.length;
    actualLength = result.length;

    console.log('Test ' + testNumber + ' result: ', result);
    console.log('Test ' + testNumber + ' is ' + isSorted(result));
    console.log('expected length: ', expectedLength);
    console.log('actual length: ', actualLength);
    console.log('============================');
  }
}(testsForMerge);


// SORT FUNCTION:
 /**
 *
 *
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

var sort = function(array) {

};