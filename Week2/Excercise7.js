//1. Menyusun Barisan Bintang
var rows1 = 5  

// while the currentrow (currentRow) is less than row2, display '*'
for(var currentRow = 1; currentRow <= rows1; currentRow ++){
  console.log('*');
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5
var asterik ='*'

// while the asterik amount (astnum) is less than rows2, add '*' for "asterik"
for(var astnum=1; astnum < rows2; astnum ++){
   asterik = asterik + '*';}
// while the currentrow (currentRow) is less than row2, display asterik
   for (var currentRow=1; currentRow <= rows2; currentRow ++){
     console.log(asterik)
     }

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5
var asterik2 = '*'

for(var currentRow =1; currentRow<=rows3; currentRow++ ){
  console.log(asterik2)
    asterik2 = asterik2 + '*'
}