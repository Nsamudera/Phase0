//1. Menyusun Barisan Bintang
var rows1 = 5

// while the currentrow ("currentRow") is less than "rows1", display '*'
for (var currentRow = 1; currentRow <= rows1; currentRow++) {
  console.log('*');
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5
var asterik = '*'

// while the asterik amount ("astnum") is less than "rows2", add '*' for "asterik"
for (var astnum = 1; astnum < rows2; astnum++) {
  asterik = asterik + '*';
}
// while the currentrow ("currentRow") is less than "rows2", display "asterik"
for (var currentRow = 1; currentRow <= rows2; currentRow++) {
  console.log(asterik)
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5
var asterik2 = '*'
var astnum = 0

for (var currentRow = 0; currentRow < rows3; currentRow++) {
  while (astnum < currentRow) {
    asterik2 = asterik2 + '*'
    astnum = astnum + 1
  }
  console.log(asterik2)
}