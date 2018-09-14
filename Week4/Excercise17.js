function totalDigitRekursif(angka) {

  //if the length of the input used to perform the function 'totalDigitRekursif' is 1, then we return the input (which will stop the recursion)
  if (String(angka).length === 1) {
    return angka
  }
  else {
    var str = String(angka) // to make the input a string so we can use .length
    var firstNum = Number(str.slice(0, 1)) // to find the first digit of the input. We slice starting from the 0 index up to (but not including) the 1st index
    var remainingNum = Number(str.slice(1)) //to find the rest of the number w/o 'firstNum': We slice from the the 1st index until the endt

    /** Tracing purpose:  
    console.log('first num: ' + firstNum)
    console.log('remaining num: ' + remainingNum)
    */

    //if the length of the input is not 1, then we keep calling the funciton 'totalDigitRekursif' using 'remaining number'
    return firstNum + totalDigitRekursif(remainingNum)
  }
}

// // TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
