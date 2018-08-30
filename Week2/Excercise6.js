//1. Melakukan Looping Menggunakan While

var numstart1 = 2
var numlimit1 = 20
var numstart2 = 20
var numlimit2 = 2


console.log('LOOPING PERTAMA')
while(numstart1 <= numlimit1) {
    console.log(numstart1 + ' - I love coding');
    numstart1 = numstart1 + 2
}
console.log('LOOPING KEDUA')
while (numstart2 >= numlimit2) {
  console.log(numstart2 + ' - I will become fullstack developer')
  numstart2 = numstart2 - 2 
}

//2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA')
for(var numstart=1; numstart<=20; numstart++) {
  console.log(numstart + ' - I love coding')
}

console.log('LOOPING KEDUA')
for(var numstart=20; numstart>=1; numstart--) {
  console.log(numstart + ' - I will become fullstack developer')
}

//3. Angka Ganjil dan Genap

console.log('Ganjil Genap Example:')
for(var counter=1; counter<=100; counter++) {
  console.log('Counter sekarang =' + counter);
  if(counter % 2==0) {
    console.log('Genap' + '\n');}
    else {
      console.log('Ganjil' + '\n');
    }
  }

  console.log('Counter plus 2 Example:')
  for(var counter=1; counter<=100; counter+=2) {
    if(counter %3==0){
      console.log('counter sekarang = ' + counter)
      console.log(counter+ ' ' + 'KELIPATAN 3' + '\n')}
  }

  console.log('Counter plus 5 Example:')
  for(var counter=1; counter<=100; counter+=5) {
    if(counter %6==0){
      console.log('counter sekarang = ' + counter)
      console.log(counter+ ' ' + 'KELIPATAN 6' + '\n')}
  }

  console.log('Counter plus 9 Example:')
  for(var counter=1; counter<=100; counter+=9) {
    if(counter %10==0){
      console.log('counter sekarang = ' + counter)
      console.log(counter+ ' ' + 'KELIPATAN 10' + '\n')}
  }