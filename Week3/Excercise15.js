
function groupAnimals(animals) {

  //to create a new variable to be used during sorting, since the index of the original input will be used for comparison
  var sortedInput = animals.slice();

  //Step1. Sort the input/array so that it is easier to aplhabetize the result

  //for each instance that 'staticWord' is less than the lenght of the sorted Array . . .
  //'staticWord' = the first word that we will compare that will not change
  for (var staticWord = 0; staticWord < sortedInput.length; staticWord++) {
    //'comparedWord' = the second word that we will compare that will change each time when we are comparing with the staticWord
    for (var comparedWord = staticWord + 1; comparedWord < sortedInput.length; comparedWord++) {

      //If the first word ('staticWord') is greater than the second word ('comparedWord') 
      // AND
      //the words being compared does not start with the same letter 
      //   *** Note that when sorting alphabet a < z  
      if (sortedInput[staticWord] > sortedInput[comparedWord] && sortedInput[staticWord][0] !== sortedInput[comparedWord][0]) {
        //Swap the first word with the second word
        temp = sortedInput[staticWord]
        sortedInput[staticWord] = sortedInput[comparedWord]
        sortedInput[comparedWord] = temp
      }

      var diffOriInput = (Number(animals.indexOf(sortedInput[staticWord])) - Number(animals.indexOf(sortedInput[comparedWord]))) // To find the spacing in the original input between the two words being compared
      var diffSortedInput = (Number(sortedInput.indexOf(sortedInput[staticWord])) - Number(sortedInput.indexOf(sortedInput[comparedWord]))) // To find the spacing in the sorted input between the two words being compared
      //If the first word and second word starts with the same letter 
      // AND
      //The product of the difference between the spacing of the words in the original input and the difference of the words in the sorted input is less than 0
      //    ***The purpose is that if the spacing between the words being compared has a different sign (example in the orignal it is positive (+), while in the sorted it is negative (-), this means that words in the sorted array is in a different position than the orginal, and that we should switch them out)
      if (sortedInput[staticWord][0] == sortedInput[comparedWord][0] && ((diffOriInput * diffSortedInput) < 0)) {
        //Swap the first and second word
        temp = sortedInput[staticWord]
        sortedInput[staticWord] = sortedInput[comparedWord]
        sortedInput[comparedWord] = temp
      }
    }
  }
  //Step2. To Group the inputs in the array based on first letter 
  
  //Create a variable to store the output and set it to the first item of the input
  //   *** note that the first item is put under []. This is because we want words with the same letter to be under its own array
  var output = [[sortedInput[0]]]
  
  //For each instance that the index 'i' is less than the length of the array/input . . .
  //   *** the point of this loop is to check each individual animal word from the input
  for (i = 1; i < sortedInput.length; i++) {
    //For each instance that the index 'j' is less than the length of the output . . .
    //   *the point of this loop is to check each individual animal word from the output and compare it with each word from the input/array
    for (j = 0; j < output.length; j++) {
      //Set a var 'unique' and set it to blank
      //this will be used to check whether the first letter of the word is unique or not
      var unique = ''
      //If the first letter of the current index/animal word of the input is the same as the first letter of the current index/animal word of the output 
      if (sortedInput[i][0] == output[j][0][0]) {
        //Add 1 to unique: 
        //   *** the point is to make it not blank.
        unique = unique + 1
        //Push the animal word to the output array containing that letter (which will be the word at current index of j)
        output[j].push(sortedInput[i])
        break
      }
    }
    //If after each input array and output array has been checked for same first letter, and the 'unique' variable is still blank . . .
    if (unique == '') {
      //Push the word from the input to the back of the output
      output.push([sortedInput[i]])
    }
  }
  return output
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));