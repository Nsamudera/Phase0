//Logic Challenge - X dan O
function xo(str) {
  var x = 0
  var o = 0
  //set variable "letter" to 0
  //while "letter" is less than or equal to length of "str" minus one . . .
  for (var letter = 0; letter <= str.length - 1; letter++) {
    //if letter on "str" is x, add 1 to the "x" variable.  
    if (str[letter] == 'x') {
      x = x + 1
      // insert: to check "x" count each time 
      //console.log('x: ' + x)
      // if letter on "str" is o, add 1 to the "o" variable
    } else if (str[letter] == 'o') {
      o = o + 1
      // insert: to check "o" count each time 
      // console.log('o: ' + o)
    }
  }
  //if "x" equals to "o" return true, if not, return false
  if (x == o) {
    return 'true';
  } else {
    return 'false'
  }
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
