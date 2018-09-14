function sorting(arrNumber) {
  //sort the array from highest to lowest
  arrNumber.sort(function (value1, value2) { return Number(value1) < Number(value2) });
  return arrNumber
}

function getTotal(arrNumber) {
  var output = ''
  var startNum = arrNumber[0]//the number we want to check will always be the first number after being sorted
  var repeat = 1 // repeat is always at one since we are counting 'startNum' as well

  //for every instance that the number we are comparing (indicated by index 'i') is equal to 'start Num', add 1 to 'repeat'
  for (i = 1; i < arrNumber.length; i++) {
    if (startNum === arrNumber[i]) {
      repeat = repeat + 1
    }

  }
  //if the array is empty (length of 0), then ...
  if (arrNumber.length == 0) {
    output = "''"

    //else, if the array is not empty . . . 
  } else {
    output = 'angka paling besar adalah ' + startNum + ' dan jumlah kemunculan sebanyak ' + repeat + ' kali'
  }

  return output
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''