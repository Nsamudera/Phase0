//Logic Challenge - Menghitung Jumlah Kata

function hitungJumlahKata(kalimat) {
  //Split the input based on space between the words
  //Then count the length of the new array
  return kalimat.split(" ").length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5