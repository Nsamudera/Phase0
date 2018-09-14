function angkaPrima(angka) {
    //for each instance that the index is less than 'angka'
    for (var i = 2; i < angka; i++) {
        //return false if angka is able to be divided by any number beside itself and 1
        if (angka % i == 0) {
            return false
        }
    }
    return true
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false