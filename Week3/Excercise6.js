function angkaPalindrome (num){
//to create a function that will return the palindorme of a given number
function checkPalindrome (num) {
  var palindrome=''
  for(index=0; index<num.toString().length;index++){
    palindrome = num.toString()[index] + palindrome
}
  return palindrome
}
//Start of angkaPalindorme function
if (num<9){
  return num+1
} else {
num = num +1
while(checkPalindrome(num)!=num){
    num=num+1
    checkPalindrome(num)
  }
  return num
}
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
