//Logic Challenge - Palindrome

function palindrome(kata) {
  var reversedkata = '';
  //for each instance that index is greater or equal to 0, then ...
  for (var index = kata.length - 1; index >= 0; index--) {
    //add the letter (as denoted by 'kata'[index] to 'reversedkata'
    reversedkata = reversedkata + kata[index];
  }
  //after 'reversedkata' is complete, compare it to the orinal word 'kata'
  //if 'reversedkata' is the same as 'kata' return true, if not return false.
  if (kata === reversedkata) {
    return true;
  }
  else {
    return false;
  }
}