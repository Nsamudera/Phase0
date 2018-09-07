//Logic Challenge - Mencari Mean

/** Steps
 * 1. Add each number
 * 2. Store the amount to a new variable
 * 3. divide total with amount of integers
 */

function cariMean(arr) {
    // create new variable 'total' to add the numbers
    var total = '';
    //for each instance that 'index' is less than the length of the array/input . . .
    for (var index = 0; index < arr.length; index++) {
        //add the number (indicated by current index of the array) into 'total'
        //make sure to turn those into data type of number so it adds properly
        total = Number(total) + Number(arr[index]);
    }
    //once all the numbers has been added, divide the total by the length of the array (AKA the amount of numbers used)
    //make sure to round the result
    return Math.round(total / arr.length);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7