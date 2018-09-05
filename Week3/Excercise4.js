//Menggunakan Built-in Function pada Array

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
var lastname = 'Elsharawy'
var gender = 'Pria'
var school = 'SMA International Metro'

function dataHandling2 (){
    //Splice Section
    input.splice(1,1,input[1] + lastname)
    input.splice(2,1,'Provinsi ' + input[2])
    input.splice(4,1,gender,school)
    console.log(input)
    //Date split - Month
    var datesplit=input[3].split("/")
    switch (datesplit[1]){
        case '01':
        console.log('Januari');
        break;
        case '02':
        console.log('Februari');
        break;
        case '03':
        console.log('Maret');
        break;
        case '04':
        console.log('April');
        break;
        case '05':
        console.log('Mei');
        break;
        case '06':
        console.log('Juni');
        break;
        case '07':
        console.log('Juli');
        break;
        case '08':
        console.log('Agustus');
        break;
        case '09':
        console.log('September');
        break;
        case '10':
        console.log('Oktober');
        break;
        case '11':
        console.log('November');
        break;
        case '12':
        console.log('Desember');
        break;
}
//Descending sort of datesplit
datesplit.sort(function(value1, value2) {return Number(value1)<Number(value2)})
console.log(datesplit)

//date using hyphens
datesplit=input[3].split("/") //to change date split back to original form
console.log(datesplit.join("-"))

//slice name
console.log(input[1].slice(0,15))
}

dataHandling2()