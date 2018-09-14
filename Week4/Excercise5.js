//Logic Challenge - Ubah Huruf

function ubahHuruf(kata) {
    var output = ''
    // you can only write your code here!
    var kamus = 'abcdefghijklmnopqrstuvwxyz'

    //for each instance that the index 'i' is less than the length of 'kata' . . . 
    for (var i = 0; i < kata.length; i++) {
        //for each instance that the index 'j' is less than the length of 'kamus'
        for (var j = 0; j < kamus.length; j++) {
            //if the letter from 'kata' with index 'i' and 'kamus' with index 'j' are the same and it is not "z"
            if (kata[i] == kamus[j] && kata[i] != 'z') {
                //Then we add the next alphabet to 'output' (indicated by the index 'J' + 1)
                output = output + kamus[j + 1]
                //if the letter from 'kata' with index 'i' and 'kamus' with index 'j' are the same and it is "z"
            } else if (kata[i] == kamus[j] && kata[i] == 'z') {
                //Then we add "a" to ouput
                output = output + 'a'
            }
        }
    }
    return output
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu