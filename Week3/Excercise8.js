//Logic Challenge - Pasangan Angka Terbesar

/**algorithm/pseudocode
1. Compare the number individually from left to right
2. if the first number is bigger than the second number, then the first will be labeled as the "bigger number".
3. compare the "bigger number" form previous step with the next integer.
4a. if the "bigger number" is bigger than the integer being compared, then do nothing
4b. if the "bigger number" is smaller than the integer being compared, then update "bigger number" with the current integer.
5. Once every integer is compared and the "bigger number" has been determined, find the integer to the right of the "bigger number"
6.display the "bigger number" and the adjacent number.
**/

function pasanganTerbesar(num) {
  var numtostring = num.toString(); //to convert the number to string, so that we can use the index to compare each integer
  var biggestnum = numtostring[0]; // the biggest number of the input will be stored here for comparison, which will start with index 0
  var biggestnumindex = numtostring.indexOf(biggestnum); //to find the index of the biggesstnum, which will be used later to find the next/adjacent number of the biggest number

  //while "index" is less than the length of the input, we will compare each index.
  for (var index = 0; index < numtostring.length; index++) {
    // if the current number is bigger than the variable 'biggestnum' (which is originally set as the first number in the input) . . . 
    if (numtostring[index] > biggestnum) {
      //1. we update the value of 'biggestnum'
      biggestnum = numtostring[index];
      //2. we update the value of 'biggestnumindex'
      biggestnumindex = numtostring.indexOf(biggestnum);
    }
  }
  //return the biggest number and the number to the right of it and convert it to data type of Number
  return Number(biggestnum + numtostring[biggestnumindex + 1]);
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99