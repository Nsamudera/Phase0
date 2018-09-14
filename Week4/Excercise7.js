//Logic Challenge - Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {
  var faktorKali = []
  var digitNum = ''
  var output = []
  //Step 1. Find all the factors that multiplies into 'angka

  //for every instance that index 'i' is less than or equal to 'angka' . . .
  for (var i = 1; i <= angka; i++) {
    //if the 'angka' is divisible by the index . . .
    if (angka % i == 0) {
      //then push the result of the division and 'angka' divided by the resul to 'faktorKali'
      faktorKali.push([i, angka / i])
    }
  }

  //Step 2 Find the length/number of digits of each factors
  
  //for each array within the array (AKA the array containing the factors) . . .
  for (var i = 0; i < faktorKali.length; i++) {
    //for each number within the array . . .
    for (var j = 0; j < faktorKali[i].length; j++) {
      //add the length of the digits making the factor and store it in 'digitNum'
      digitNum = Number(digitNum) + Number(faktorKali[i][j].toString().length)
    }
    //push each result to 'output'
    output.push(digitNum)
    //make sure to reset digit Num for each array that we are looking into
    digitNum = ''
  }
  //Step 3. Compare the result and return the highest one
  var lowestDigit = output[0]
  for (var i = 1; i < output.length; i++) {
    if (output[i] < lowestDigit) {
      lowestDigit = output[i]
    }
  }
  return lowestDigit
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2