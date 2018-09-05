//Melakukan Looping Data Array

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(){
    //for each instance that the number of array (variable 'n) is less than the length of the input array then . . . 
    for(var n=0; n<input.length; n++){
        console.log('Nomor ID: ' + input[n][0]) // Display the ID number of the current array (index 0)
        console.log('Nama Lengkap: ' + input[n][1]) // Display the name of the current array (index 1)
        console.log('TTL: ' + input[n][2] + ' ' + input[n][3]) // Display the location and birth date of the current array (index 2 and 3)
        console.log('Hobi: ' + input[n][4]) // Display the hobby of the current array (index 4)
        console.log('\n') // to add space between array inputs
    }
}

dataHandling()
