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
      middle = length / 2;
    } else {
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
