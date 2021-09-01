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
 */


var merge = function(leftArray, rightArray) {
  var mergedArray = [];
  var leftPointer = 0;
  var rightPointer = 0;
  var leftLength = leftArray.length;
  var rightLength = rightArray.length;
  var leftItem, rightItem, endSlice;

  while (true) {
    leftItem = leftArray[leftPointer];
    rightItem = rightArray[rightPointer];
    if (leftItem <= rightItem) {
      mergedArray.push(leftItem);
      leftPointer++;
    } else {
      mergedArray.push(rightItem);
      rightPointer++;
    }

    if (leftPointer === leftLength) {
      endSlice = rightArray.slice(rightPointer, rightLength);
      mergedArray = mergedArray.concat(endSlice);
      break;
    } else if (rightPointer === rightLength) {
      endSlice = leftArray.slice(leftPointer, leftLength);
      mergedArray = mergedArray.concat(endSlice);
      break;
    }
  }

  return mergedArray;
};


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
 *    We then merge the sorted halves
 *
 * When splitting an array in two:
 * an even number of elements:
 *  middle gets length / 2
 * an odd number of elements:
 *  middle gets length / 2 rounded down
 *
 *

 * if the array of length 1:
 *  that array is by definition sorted,
 *
 * otherwise:
 *  get the middle
 *  sort the left half
 *  sort the right half
 *  merge them
 *
 */

var sort = function(array) {
  var length = array.length;
  var middle;
  if (!length || length === 1) {
    return array;
  } else {
    if (length % 2 === 0) {
      // right-middle
      middle = length / 2;
    } else {
      // true middle
      middle = Math.floor(length / 2);
    }
    var left = array.slice(0, middle);
    var right = array.slice(middle, length);
    var result = merge(sort(left), sort(right));
    return result;
  }
};


var testValue = [3, 1, 4, 5, 2, 1, 9, 8, 6];
var result = sort(testValue);
console.log(result);