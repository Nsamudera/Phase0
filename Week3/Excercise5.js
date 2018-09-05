//Logic Challenge - Palindrome

function palindrome(kata){
  var reversedkata=''
  for(var index=kata.length-1; index>=0 ; index--){
    reversedkata = reversedkata + kata[index]
  }
  if(kata===reversedkata){
    return true}
    else {
      return false
    }
  }