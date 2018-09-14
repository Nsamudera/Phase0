function hitungHuruf(kata) {

  //To split each word into its own array, so that we can compare the letters within each word
  var arr = kata.split(' ')

  //To store the highest amount of times that a letter appears in the word being checked. Will be resetted each time the compared letters changes
  var repeatCheck = 0
  //To store the highest amount of times that a letter has appeared in all the words that has been checked.
  var repeat = 0
  //to store the index of the word that has the highest 'repeat'
  var repeatIndex = ''

  //to go over each word in the array
  for (var i = 0; i < arr.length; i++) {
    //every time we are checking a new word, make sure that 'repeatCheck' is 0
    repeatCheck = 0
    var usedLetter = '' //to store the letters already checked so that we don't double count if it occurs more than once

    //to compare each letter ('j') in the word being checked with the adjacent letters ('k')
    for (var j = 0; j < arr[i].length - 1; j++) {

      for (var k = j + 1; k < arr[i].length; k++) {

        //if the first letter and the second letter is the same and the letter is not in 'usedLetter' . . .
        if (arr[i][j] == arr[i][k] && !usedLetter.includes(arr[i][j])) {
          //add 1 to 'repeatCheck'
          repeatCheck = repeatCheck + 1
        }
        //if 'repeatCheck' is higher than 'repeat' . . .
        //then store the value of 'repeatCheck' to 'repeat'. Store the index of the word in 'repeatIndex'
        if (repeatCheck > repeat) {
          //<for tracing purpose>: 
          //console.log(arr[i] + ' ' + arr[i][j])
          //console.log(repeatIndex)
          repeat = repeatCheck
          repeatIndex = i
          //<for tracing purpose>:
          //console.log(repeat)
          //console.log(repeatIndex)
        }
      }
      //once we finish checking for the first letter, we add it to 'usedLetter'
      usedLetter = usedLetter + arr[i][j]
      //console.log('used letter :  ' + usedLetter)
    }
  }
  return arr[repeatIndex]
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau