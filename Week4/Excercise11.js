function changeMe(arr) {

  //if the array is empty, return ""
  if (arr.length === 0) {
    console.log('""')
  }
  //for each instance that the index 'i' is less than the array's length . . .
  for (var i = 0; i < arr.length; i++) {
    var ageOutput = ''
    //if the data in the third index of 'i' (AKA age info) is invalid or is greater than current year of 2018 . . .
    if (!arr[i][3] || arr[i][3] > 2018) {
      //make 'ageOutput' show "Invalid Birth Year"
      ageOutput = 'Invalid Birth Year'
      // else, return the difference between 2018 and the date of birth
    } else {
      ageOutput = 2018 - arr[i][3]
    }

    //once we have determined the ouptut for age we put each info as needed
    var output = {
      firstname: arr[i][0], lastname: arr[i][1], gender: arr[i][2], age: ageOutput
    }
    console.log(i + 1 + '. ' + output.firstname + ' ' + output.lastname)
    console.log(output)
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""