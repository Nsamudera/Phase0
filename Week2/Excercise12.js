//Logic Challenge - Konversi Menit

function konversiMenit(menit) {
    // if "menit" modulus by 60 is a single digit, then add ':0' before displaying the result
    if (((menit % 60).toString().length) == 1) {
        return Math.floor(menit / 60) + ':0' + (menit % 60);
    }
    // else, if "menit" modulus by 60 is not a single digit, then display the result right away
    else {
        return Math.floor(menit / 60) + ':' + (menit % 60)
    }
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

