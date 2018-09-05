//Mengakses Nilai Dalam Array

var reversedWord = ''

function balikString(str) {
  reversedWord = ''
  // setiap kali "letter" lebih atau sama degan 0, tambahkan huruf dari "kata" ke "reversedWord"
  // note: 'letter'=kata.length - 1, which means that it will take the last letter of "kata" first
  for (var letter = str.length - 1; letter >= 0; letter--) {
    reversedWord = reversedWord + str[letter];
  }
  return reversedWord
}

console.log(balikString('hello world!')); // !dlrow olleh

