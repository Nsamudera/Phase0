function tentukanDeretGeometri(arr) {
  for (var i = 0; i < arr.length - 2; i++) {
    var division1 = (Number(arr[i + 1]) / Number(arr[i])); // Division result between first set of numbers
    var division2 = (Number(arr[i + 2]) / Number(arr[i + 1])); // Division result between second set of numbers
    // console.log('num 1: ' + arr[i+1] + '/' + arr[i]) To check the first set of number being tested
    // console.log('multiplication 1:: ' + (Number(arr[i+1])/Number(arr[i])))
    // console.log('num 2: ' + arr[i+2] + '/' + arr[i+1])  To check the second set of number being tested
    // console.log('multiplication 2: ' + (Number(arr[i+2])/Number(arr[i+1])))
    if (division1 !== division2) {
      return false;
    }
  }
  return true;
}