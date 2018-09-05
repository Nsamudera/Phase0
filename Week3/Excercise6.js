//Logic Challenge - Number Palindrome

function angkaPalindrome(num) {
  //to create a function that will return the palindrome of a given number
  function checkPalindrome(num) {
    var palindrome = '';
    //for each instance that 'index' is less than the length of the number, then . . .
    for (var index = 0; index < num.toString().length; index++) {
      //add the letter to the output ('palindrome')
      palindrome = num.toString()[index] + palindrome;
    }
    //once done, return/store the output result
    return palindrome;
  }
  //Start of angkaPalindorme function
  if (num < 9) {
    return num + 1;
  } else {
    num = num + 1;
    // while palindrome (which is done by calling the function to return the palidnrome result) is not equal to the orignal input . . .
    while (checkPalindrome(num) != num) {
      // move to the next number and check if it is a palindrome
      num = num + 1;
      checkPalindrome(num);
    }
    return num;
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
