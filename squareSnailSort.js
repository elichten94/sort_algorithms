var squareSnailSort = function(array) {

    if (!isCorrectInput(array)) {
        return undefined;
    }

    if (array.length === 0) {
        return [];
    }

    var numRows = array.length;
    var numColumns = array[0].length;
    var numBlocks = numRows * numColumns;
    var totalElems = 0;
    var snailResult = [];

    for (var i = 0; totalElems < numBlocks; i++) {
        for (var a = 0 + i; a < numColumns - i; a++) {
            snailResult.push(array[i][a]);
            totalElems++;
        }
        
        for (var b = 1 + i; b < numRows - i; b++) {
            snailResult.push(array[b][numColumns - 1 - i]);
            totalElems++;
        }
        
        for (var c = numColumns - 2 - i; c > (i - 1); c--) {
            snailResult.push(array[numRows - 1 - i][c]);
            totalElems++;
        }
        
        for (var d = numRows - 2 - i; d > i; d--) {
            snailResult.push(array[d][i]);
            totalElems++;
        }
    }

    return snailResult;
};

isCorrectInput = function(arrayOfArrays) {

    if (!arrayOfArrays) {
        console.log("Missing argument");
        return false;
    }

    if (!Array.isArray(arrayOfArrays)) {
        console.log("Argument must be a square 2-dimentional array (N x N)");
        return false;
    }

    if ((arrayOfArrays.length === 1 && arrayOfArrays[0].length <= 1) || arrayOfArrays.length === 0) {
        return true;
    }

    var remainingSafetyChecks = arrayOfArrays.every(function(current, currentIndex, currentArray) {
        var currentLen = current.length;
        if (currentIndex !== 0) {
            return Array.isArray(current) && currentLen === currentArray[currentIndex - 1].length && currentLen === arrayOfArrays.length;
        } else {
            return Array.isArray(current) && arrayOfArrays.length === currentLen;
        }
    });

    if (!remainingSafetyChecks) {
        console.log("Argument must be a square 2-dimentional array (N x N)");
    }

    return remainingSafetyChecks;
};
