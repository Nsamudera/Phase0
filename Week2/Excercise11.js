//Logic Challenge - Balik Kata

var reversedWord = ''

function balikKata(kata) {
  reversedWord = ''
  // setiap kali "letter" lebih atau sama degan 0, tambahkan huruf dari "kata" ke "reversedWord"
  // note: 'letter'=kata.length - 1, which means that it will take the last letter of "kata" first
  for (var letter = kata.length - 1; letter >= 0; letter--) {
    reversedWord = reversedWord + kata[letter];
  }
  return reversedWord
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS