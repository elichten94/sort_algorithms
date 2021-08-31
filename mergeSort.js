var merge = function(left, right) {

};

var sort = function(array) {

};

/**
 * MERGE FUNCTION:
 *
 * In: Two sorted arrays
 * Out: One sorted array
 * Edge: Different sized arrays (will only be +/- 1)
 * Constraints: None - assume only number arrays will be passed in
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
 *    we then compare the next element in array A to the same element in array B
 *    once we push an element in array B,
 *    we compare the next element in array B
 *
 *   play with number cards to see if there is a cap on how many times we compare some element
 *    to other elements
 *
 *
 *
 *
 *
 *
 * SORT FUNCTION:
 *
 * In: An array
 * Out: A sorted array
 * Edge: Empty array
 *       Not an array
 *       Array with mixed types
 * Constraints: Only worry about an array of numbers for now
 *              Return to other edgecases later
 *
 *
 * Strats:
 * We sort the array by splitting it into two.
 *    We sort the left half
 *    We sort the right half
 *    We then merge them
 */