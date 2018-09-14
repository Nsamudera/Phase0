//Logic Challenge - Mengurutkan Abjad

function urutkanAbjad(str) {
  var kamus = 'abcdefghijklmnopqrstuvwxyz'
  var output = ''

  //we want to check each letter of 'kamus' and see if it matches with the letters in 'str'
  for (var i = 0; i < kamus.length; i++) {
    for (var j = 0; j < str.length; j++) {
      //if the letters match we put it in 'output'
      if (kamus[i] === str[j]) {
        output = output + str[j]
      }
    }
  }
  return output
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'