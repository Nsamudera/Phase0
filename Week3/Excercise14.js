function mengelompokkanAngka(arr) {
  var ganjil =[] // to store the array containing angka ganjil
  var genap= [] // to store the array containing angka genap
  var kelipatan3=[] // to store the array containing angka kelipatan3
  var output=[] // to store the final output to be displayed
  
  //for each instance that index ('i') is less than the array/input length . . . 
  for(var i=0; i<arr.length;i++){
   
    // if the number modulus by 3 is 0, then store the number in 'kelipatan3'
    if(arr[i]%3==0){
      kelipatan3.push(arr[i])
      //console.log('kelipatan3: ' + kelipatan3)
    }
    // if the number modulus by 2 is 0, then store the number in 'genap'
    else if(arr[i]%2==0){
      genap.push(arr[i])
      //console.log('genap: ' + genap)
    }
    // if the number modulus by 2 is not equal to 0, then store the number in 'ganjil'
    else if(arr[i] % 2 != 0){
      ganjil.push(arr[i])
     // console.log('ganjil: ' + ganjil)
    }
  }
// Display the output with the following order: 'genap', 'ganjil', 'kelipatan3'
output.push(genap, ganjil, kelipatan3)
return (output)
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]