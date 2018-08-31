var tanggal = (21); // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = (1); // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = (1945) // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (bulan) {
  case 1:
    // to check if both the date and year does not meet the criteria.
    if ((tanggal <= 0 || tanggal >= 32) && (tahun < 1900 || tahun > 2200)) {
      console.log('Data does not meet criteria')
      //if the date does not match the criteria, but the year does.
    } else if ((tanggal <= 0 || tanggal >= 32) && (tahun <= 2200 || tahun >= 1900)) {
      console.log('Date does not meet criteria')
      //if the date meets the criteria, but the year does not.
    } else if ((tanggal <= 31 || tanggal >= 1) && (tahun < 1900 || tahun > 2200)) {
      console.log('Year does not meet criteria')
      //if the input are in words rather than number.
    } else if (isNaN(tanggal) || isNaN(tahun)) {
      console.log('Please make sure you have entered a number for all input')
    }
    else {
      console.log(tanggal + " " + 'Januari' + ' ' + tahun)
    }
    break;

  case 2:
    if ((tanggal <= 0 || tanggal >= 30) && (tahun < 1900 || tahun > 2200)) {
      console.log('Data does not meet criteria')
    } else if ((tanggal <= 0 || tanggal >= 30) && (tahun <= 2200 || tahun >= 1900)) {
      console.log('Date does not meet criteria')
    } else if ((tanggal <= 29 || tanggal >= 1) && (tahun < 1900 || tahun > 2200)) {
      console.log('Year does not meet criteria')
    } else if (isNaN(tanggal) || isNaN(tahun)) {
      console.log('Please make sure you have entered a number for all input')
    }
    else {
      console.log(tanggal + " " + 'Februari' + ' ' + tahun)
    }
    break;

  case 3:
    if ((tanggal <= 0 || tanggal >= 32) && (tahun < 1900 || tahun > 2200)) {
      console.log('Data does not meet criteria')
    } else if ((tanggal <= 0 || tanggal >= 32) && (tahun <= 2200 || tahun >= 1900)) {
      console.log('Date does not meet criteria')
    } else if ((tanggal <= 31 || tanggal >= 1) && (tahun < 1900 || tahun > 2200)) {
      console.log('Year does not meet criteria')
    } else if (isNaN(tanggal) || isNaN(tahun)) {
      console.log('Please make sure you have entered a number for all input')
    }
    else {
      console.log(tanggal + " " + 'Maret' + ' ' + tahun)
    }
    break;

  case 4:
    if ((tanggal <= 0 || tanggal >= 31) && (tahun < 1900 || tahun > 2200)) {
      console.log('Data does not meet criteria')
    } else if ((tanggal <= 0 || tanggal >= 31) && (tahun <= 2200 || tahun >= 1900)) {
      console.log('Date does not meet criteria')
    } else if ((tanggal <= 30 || tanggal >= 1) && (tahun < 1900 || tahun > 2200)) {
      console.log('Year does not meet criteria')
    } else if (isNaN(tanggal) || isNaN(tahun)) {
      console.log('Please make sure you have entered a number for all input')
    }
    else {
      console.log(tanggal + " " + 'April' + ' ' + tahun)
    }
    break;

  case 5:
    if ((tanggal <= 0 || tanggal >= 32) && (tahun < 1900 || tahun > 2200)) {
      console.log('Data does not meet criteria')
    } else if ((tanggal <= 0 || tanggal >= 32) && (tahun <= 2200 || tahun >= 1900)) {
      console.log('Date does not meet criteria')
    } else if ((tanggal <= 31 || tanggal >= 1) && (tahun < 1900 || tahun > 2200)) {
      console.log('Year does not meet criteria')
    } else if (isNaN(tanggal) || isNaN(tahun)) {
      console.log('Please make sure you have entered a number for all input')
    }
    else {
      console.log(tanggal + " " + 'Mei' + ' ' + tahun)
    }
    break;

  case 6:
    if ((tanggal <= 0 || tanggal >= 31) && (tahun < 1900 || tahun > 2200)) {
      console.log('Data does not meet criteria')
    } else if ((tanggal <= 0 || tanggal >= 31) && (tahun <= 2200 || tahun >= 1900)) {
      console.log('Date does not meet criteria')
    } else if ((tanggal <= 30 || tanggal >= 1) && (tahun < 1900 || tahun > 2200)) {
      console.log('Year does not meet criteria')
    } else if (isNaN(tanggal) || isNaN(tahun)) {
      console.log('Please make sure you have entered a number for all input')
    }
    else {
      console.log(tanggal + " " + 'Juni' + ' ' + tahun)
    }
    break;

  case 7:
    if ((tanggal <= 0 || tanggal >= 32) && (tahun < 1900 || tahun > 2200)) {
      console.log('Data does not meet criteria')
    } else if ((tanggal <= 0 || tanggal >= 32) && (tahun <= 2200 || tahun >= 1900)) {
      console.log('Date does not meet criteria')
    } else if ((tanggal <= 31 || tanggal >= 1) && (tahun < 1900 || tahun > 2200)) {
      console.log('Year does not meet criteria')
    } else if (isNaN(tanggal) || isNaN(tahun)) {
      console.log('Please make sure you have entered a number for all input')
    }
    else {
      console.log(tanggal + " " + 'Juli' + ' ' + tahun)
    }
    break;

  case 8:
    if ((tanggal <= 0 || tanggal >= 32) && (tahun < 1900 || tahun > 2200)) {
      console.log('Data does not meet criteria')
    } else if ((tanggal <= 0 || tanggal >= 32) && (tahun <= 2200 || tahun >= 1900)) {
      console.log('Date does not meet criteria')
    } else if ((tanggal <= 31 || tanggal >= 1) && (tahun < 1900 || tahun > 2200)) {
      console.log('Year does not meet criteria')
    } else if (isNaN(tanggal) || isNaN(tahun)) {
      console.log('Please make sure you have entered a number for all input')
    }
    else {
      console.log(tanggal + " " + 'Agustus' + ' ' + tahun)
    }
    break;

  case 9:
    if ((tanggal <= 0 || tanggal >= 31) && (tahun < 1900 || tahun > 2200)) {
      console.log('Data does not meet criteria')
    } else if ((tanggal <= 0 || tanggal >= 31) && (tahun <= 2200 || tahun >= 1900)) {
      console.log('Date does not meet criteria')
    } else if ((tanggal <= 30 || tanggal >= 1) && (tahun < 1900 || tahun > 2200)) {
      console.log('Year does not meet criteria')
    } else if (isNaN(tanggal) || isNaN(tahun)) {
      console.log('Please make sure you have entered a number for all input')
    }
    else {
      console.log(tanggal + " " + 'September' + ' ' + tahun)
    }
    break;

  case 10:
    if ((tanggal <= 0 || tanggal >= 32) && (tahun < 1900 || tahun > 2200)) {
      console.log('Data does not meet criteria')
    } else if ((tanggal <= 0 || tanggal >= 32) && (tahun <= 2200 || tahun >= 1900)) {
      console.log('Date does not meet criteria')
    } else if ((tanggal <= 31 || tanggal >= 1) && (tahun < 1900 || tahun > 2200)) {
      console.log('Year does not meet criteria')
    } else if (isNaN(tanggal) || isNaN(tahun)) {
      console.log('Please make sure you have entered a number for all input')
    }
    else {
      console.log(tanggal + " " + 'Oktober' + ' ' + tahun)
    }
    break;

  case 11:
    if ((tanggal <= 0 || tanggal >= 31) && (tahun < 1900 || tahun > 2200)) {
      console.log('Data does not meet criteria')
    } else if ((tanggal <= 0 || tanggal >= 31) && (tahun <= 2200 || tahun >= 1900)) {
      console.log('Date does not meet criteria')
    } else if ((tanggal <= 30 || tanggal >= 1) && (tahun < 1900 || tahun > 2200)) {
      console.log('Year does not meet criteria')
    } else if (isNaN(tanggal) || isNaN(tahun)) {
      console.log('Please make sure you have entered a number for all input')
    }
    else {
      console.log(tanggal + " " + 'November' + ' ' + tahun)
    }
    break;

  case 12:
    if ((tanggal <= 0 || tanggal >= 32) && (tahun < 1900 || tahun > 2200)) {
      console.log('Data does not meet criteria')
    } else if ((tanggal <= 0 || tanggal >= 32) && (tahun <= 2200 || tahun >= 1900)) {
      console.log('Date does not meet criteria')
    } else if ((tanggal <= 31 || tanggal >= 1) && (tahun < 1900 || tahun > 2200)) {
      console.log('Year does not meet criteria')
    } else if (isNaN(tanggal) || isNaN(tahun)) {
      console.log('Please make sure you have entered a number for all input')
    }
    else { console.log(tanggal + " " + 'Desember' + ' ' + tahun) }
    break;

  default:
    //if month input is not between 1-12. 
    console.log('Invalid month, please follow the criteria guideline.')
}


