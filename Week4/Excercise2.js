//Logic Challenge - Faktor Persekutuan Terbesar

function fpb(angka1, angka2) {
    var fpb = ''

    //Step 1. Find which of the input is the smaller one
    var smallerNum = ''
    if (angka1 < angka2) {
        smallerNum = angka1
    } else {
        smallerNum = angka2
    }

    //Step 2. Find the fpb
    //for each instance that index is less than the smaller number . . .
    for (i = 1; i < smallerNum; i++) {
        //If both 'angka1' and 'angka2' is divisible by 'i', then store that number ('i') to 'fpb'
        if (angka1 % i == 0 && angka2 % i == 0) {
            fpb = i
        }
    }
    return fpb
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1