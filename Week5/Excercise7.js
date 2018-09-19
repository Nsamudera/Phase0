function hapusSimbol(str) {
 var arr = str.match(/\w+/g)// to match all alphanumeric characters globally
 
 var output=''
 //to loop each alphanumeric data that we got and to join them into one string
 for(var i=0;i<arr.length;i++){
   output= output + arr[i]
 }
return output
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100