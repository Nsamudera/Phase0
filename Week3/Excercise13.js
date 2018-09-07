function targetTerdekat(arr) {
  var xindex = ''; // To store the index/location of "x"
  var oindex = ''; // To store the index/location of "o"
  var diff = ''; //To store the difference between "x" and "o" (AKA jaraknya)

  //This function is used to find the spacing between "o" and "x". 
  //This is written as its own function since it is used more than once.
  function checkDifference() {
    //function only starts/activate if both 'xindex' and 'oindex' is not empty: meaning we have found both an "x" and "o" in the array.
    if (xindex !== '' && oindex !== '') {
      //if 'diff' is blank, we store the difference between the "o" and "x" (this will be our starting point to compare the spacing length)
      if (diff === '') {
        diff = Math.abs(xindex - oindex);
        //if 'diff' is already filled, it will only be updated if the value of the spacing is less than what is already stored
      } else if (diff !== '' && Math.abs(xindex - oindex) < diff) {
        diff = Math.abs(xindex - oindex);
      }
    }
  }
  //we will go through the formula only if there is an "x" in the array.
  if (arr.includes('x')) {
    //for each instance that the index ('i') is less than the lenght of the array . . .
    for (var i = 0; i < arr.length; i++) {
      //if the array is an "o", we will put a value in 'oindex' (to indicate that an "o" was found) and call the function 'checkDifference'
      if (arr[i] == 'o') {
        oindex = i;
        checkDifference();
        //if the array is an "x", we will put a value in 'xindex' (to indicate that an "x" was found) and call the function 'checkDifference'
      } else if (arr[i] == 'x') {
        xindex = i;
        checkDifference();
      }
    }
    //if there is no "x" found in the array, return 0
  } else {
    return 0;
  }
  return diff;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2