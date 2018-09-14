function checkAB(str) {

  //Create function to check the difference in spacing between "a" and "b"

  function checkDiff() {
    // run the function only if 'aIndex' and 'bIndex' is not empty
    if (aIndex != '' && bIndex != '') {
      //if the spacing is 3 , then return true, else return false
      // Why put 4?, because we want to check if the letter is in the 4th space after the other, which means it has a space between them of 3.
      if (Math.abs(aIndex - bIndex) == 4) {
        diff = true
      } else {
        diff = false
      }
      //else (AKA not both 'aIndex' and 'bIndex' is filled, return false)
    } else {
      diff = false
    }
  }

  var aIndex = '' //to store the index of the letter "a"
  var bIndex = '' //to store the index of the letter "b"
  var diff = '' //to store the difference/spacing between letter "a" and "b"
  //for each letter we check if it is "a" or "b"
  for (var i = 0; i < str.length; i++) {
    //if the letter is "a" then set 'aIndex' to the index and call 'checkDiff'
    if (str[i] == 'a') {
      aIndex = [i]
      checkDiff()
    //if the letter is "b" then set 'bIndex' to the index and call 'checkDiff'
    } else if (str[i] == 'b') {
      bIndex = [i]
      checkDiff()
    }
  }
  return diff

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false