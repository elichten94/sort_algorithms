// MERGE FUNCTION:
/**
 * RUNTIME BRAINSTORMING:
 *    When can we push multiple elements at a time?
 *    any elements in rightArray that are less than first element of leftArray and vice versa
 *    Try this with the paper tiles, see what happens later on in the array:
 *      Can we continue the process all the way to the end?
 *
 *    if left[i] < right[j]
 *        ... and left[i+1] < right[j]
 *        ... and left[i+2] < right[j]
 *        ... until left[i+n] > right[j]
 *        push a slice of i up to n to the sorted array
 *
 *  -- or the other way around --
 *      if left[len-1] < right[0]
 *      ... otherwise if left[len-2] < right[0];
 *      ... otherwise if left[len-3] < right[0];
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

    if (leftItem <= rightItem || rightItem === undefined) {
      mergedArray.push(leftItem);
      leftPointer++;
    } else if (leftItem > rightItem || leftItem === undefined) {
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

exports.merge = merge;
exports.sort = sort;
