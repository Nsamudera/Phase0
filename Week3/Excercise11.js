function tentukanDeretAritmatika(arr) {
  for (var i = 0; i < arr.length - 2; i++) {
    var diff1 = (Number(arr[i + 1]) - Number(arr[i]));// Difference between first set of numbers
    var diff2 = (Number(arr[i + 2]) - Number(arr[i + 1]));// Difference between second set of numbers
    //console.log('num 1: ' + arr[i+1] + '-' + arr[i])   To check the first set of number being tested
    //console.log('diff 1:: ' + (Number(arr[i+1]) - Number(arr[i])))
    //console.log('num 2: ' + arr[i+2] + '-' + arr[i+1]) To check the second set of numbers being tested
    //console.log('diff 2: ' + (Number(arr[i+2]) - Number(arr[i+1])))
    
    if (diff1 !== diff2) {
      return false;
    }
  }
  return true;
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false