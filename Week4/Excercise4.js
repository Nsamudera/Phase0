//Logic Challenge - Mencari Modus

function cariModus(arr) {

    //Step1. Find out how many times each number appears
    var output = [] //Output is used to see how many times the number appear

    //for each instance that the index is less than the length of the input 'arr' . . .
    for (i = 0; i < arr.length; i++) {
        //set variable 'count' to 1. This will be used to count how many times the number (indicated by index 'i' appears)
        var count = 1

        //for each instance that the index 'j' is less than the length of 'arr'
        // this is to compare the next number with index 'i'
        for (j = i + 1; j < arr.length; j++) {
            //console.log('current starting number: ' + arr[i])
            //console.log('current number being compared: ' + arr[j])
            //console.log('current count: ' + count)

            //if the first number and the second number being compared is the same
            //Then we add 1 to 'count'
            if (arr[i] == arr[j]) {
                //console.log('these numbers are the same')
                count = count + 1
                //console.log('new count is at: ' + count)

            }
            //console.log('<------------>')
        }
        //Once it has check how many times 'i' has appear, push it to 'output'
        output.push(count)
        //console.log(output)
    }

    //Step2. To check which number appear the most
    //console.log('output is: ' + output)

    //Create new variable 'mostRepeat' and set it to the first number in 'output'
    //create new variable 'mostRepeatindex' and set it to the index of the first number in put put (which is 0)
    var mostRepeat = output[0]
    var mostRepeatindex = 0

    //for each instance that index 'i' is less than the length of output . . .
    for (i = 1; i < output.length; i++) {
        //if the number is larger than 'mostRepeat', we update mostRepeat with the bigger number and 
        //AND update mostRepeatindex with the new index
        if (output[i] > mostRepeat) {
            mostRepeat = output[i]
            mostRepeatindex = output.indexOf(mostRepeat)
            //console.log('new most repeat: ' + mostRepeat)
            //console.log('new most repeat index: ' + mostRepeatindex)
        }
    }

    //Step3. To display the result depending on the outcome of MostRepeat

    //if the the highest times that the same number is shown is 1, then DISPALY -1
    if (mostRepeat == 1) {
        return -1
    } else {
        //else if the highest times that the same number is shown is not 1, then. . .

        //do looping to see if the numbers are all the same or not
        for (var i = 0; i < arr.length - 1; i++) {
            isSame = true
            //if the numbers being compared is not the same, set 'isSame' to false
            if (arr[i] != arr[i + 1]) {
                isSame = false

            }
        }

        //if 'isSame' is still true, then return -1
        //if 'isSame' is false,, then returnthe number with the index of the most repeated number.
        if (isSame === true) {
            return -1
        } else if (isSame === false) {
            return arr[mostRepeatindex]
        }
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1