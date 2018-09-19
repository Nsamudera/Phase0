function cariPelaku(str) {
  //to match 'abc' in the input globally
  var split = str.match(/abc/g)

  //to count number of times 'abc' in in the array
  var count = 0
  for (var i = 0; i < split.length; i++) {
    count = count + 1
  }
  return count
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2