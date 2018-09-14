function kaliTerusRekursif(angka) {
    //if the length of the input is 1, then return 'angka' (which will end the loop)
  if (String(angka).length===1){
    return angka
  }
  else {
    var str=String(angka)
    var output = 1
    //for each digit of the number, we multiply them together
    for(i=0;i<str.length;i++){
      output = output * Number(str[i])
    }
    return kaliTerusRekursif(output)
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6