//Logic Challenge - Naik Angkot

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var outputArr = []

    //to go over each array that contains the data
    for (var i = 0; i < arrPenumpang.length; i++) {
        var outputObj = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0
        }
        // ***tracing: console.log(arrPenumpang[i])
        // ***tracing: console.log('<-------->')

        var start = arrPenumpang[i][1] //to store the 'naikDari' letter
        var end = arrPenumpang[i][2] //to store the 'tujuan' letter
        var startI = '' //to store the index of 'naikDari' letter that is found in 'rute'
        var endI = '' ////to store the index of 'tujuan' letter that is found in 'rute'
        // ***tracing: console.log('start: ' + start)
        // ***tracing: console.log('end: ' + end)
        for (var k = 0; k < rute.length; k++) {
            // ***tracing: console.log(rute[k])

            //if the letter matches between 'naikDari' and 'rute' with index 'k'
            //then 'startI' becomes the index of that letter found in 'rute'
            if (start === rute[k]) {
                startI = k
                //if the letter matches between 'tujuan' and 'rute' with index 'k'
                //then 'endI' becomes the index of that letter found in 'rute'
            } else if (end === rute[k]) {
                endI = k
            }
        }
        //the property of 'bayar' in 'outputObj' becomes the difference in the index of 'start' and 'end' multiplied by Rp 2000
        outputObj.bayar = 2000 * (Math.abs(startI - endI))
        //tp push the result to 'outputArr'
        outputArr.push(outputObj)
    }
    return outputArr
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]