function perkalianUnik(arr) {
  var product = 1; //to store the result of the product of all numbers within the array
  var output = []; //to store the output, which will display final result

  //for each instance that the index (variable 'i') is less than the length of the array . . .
  for (var i = 0; i < arr.length; i++) {
    // multiply the numbers of the array and store in 'product'
    product = product * arr[i];
  }
  //for each instance that the index (variable 'j') is less than the length of the array . . .
  for (var j = 0; j < arr.length; j++) {
    //Divide the product by the number (indicated by the index) and push it into the output
    output.push(product / arr[j]);
  }
  return output;
}