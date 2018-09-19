//Logic Challenge: Deep Sum


function deepSum(arr) {
    var output = ''
    //to loop for each array

    //if the array is empty . . .
    if (arr.length === 0) {
        output = 'No number'
    } else {
        //to go over outer array that contains the array with numbers
        for (var i = 0; i < arr.length; i++) {
            // *** tracing: console.log(arr[i])
            //to go over each inner array that contains the numbers
            for (var j = 0; j < arr[i].length; j++) {
                //*** tracing: console.log('      ' + arr[i][j])
                //to go through each number in the array within array
                for (var k = 0; k < arr[i][j].length; k++) {
                    //console.log('             ' + arr[i][j][k])
                    output = Number(output) + Number(arr[i][j][k])
                }
            }
        }
    }
    return output
}

//TEST CASE
console.log(deepSum([
    [
        [4, 5, 6],
        [9, 1, 2, 10],
        [9, 4, 3]
    ],
    [
        [4, 14, 31],
        [9, 10, 18, 12, 20],
        [1, 4, 90]
    ],
    [
        [2, 5, 10],
        [3, 4, 5],
        [2, 4, 5, 10]
    ]
])); // 316

console.log(deepSum([
    [
        [20, 10],
        [15],
        [1, 1]
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [2],
        [9, 11]
    ],
    [
        [3, 5, 1],
        [1, 5, 3],
        [1]
    ],
    [
        [2]
    ]
])); // 156

console.log(deepSum([])); // No number