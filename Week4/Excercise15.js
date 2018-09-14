function changeVocals(str) {
  var kamusKecil = ['aeiou', 'bfjpv']
  var kamusBesar = ['AEIOU', 'BFJPV']
  var output = ''

  // to check for each letter of input
  for (var i = 0; i < str.length; i++) {
    var isVocal = false

    //if the letter being checked is lowercase and not space . . .
    if (str[i] === str[i].toLowerCase() && str[i] !== ' ') {
      //to check the letter with each data in 'kamusKecil'
      for (var kamusI = 0; kamusI < kamusKecil[0].length; kamusI++) {
        //if the letter matches with one of the data in 'kamusKecil', the add the swapped letter to 'output'
        if (str[i] === kamusKecil[0][kamusI]) {
          output = output + kamusKecil[1][kamusI]
          //we set 'isVocal' to true so that it doesn't print the output again *see line 22
          isVocal = true
        }
      }
      // after going through each data in 'kamusKecil', if there is no vocal (AKA no match found), then 'isVocal' will still be false and we put 'str[i]' into 'output'
      if (isVocal === false) {
        output = output + str[i]
      }
    }
    //if the letter being checked is uppercase and not space . . .
    if (str[i] === str[i].toUpperCase() && str[i] !== ' ') {
      //to check the letter with each data in 'kamusBecil'
      for (var kamusI = 0; kamusI < kamusBesar[0].length; kamusI++) {

        //if the letter matches with one of the data in 'kamusBecil', the add the swapped letter to 'output'
        if (str[i] === kamusBesar[0][kamusI]) {
          output = output + kamusBesar[1][kamusI]
          //we set 'isVocal' to true so that it doesn't print the output again *see line 39
          isVocal = true
        }
      }
      // after going through each data in 'kamusBecil', if there is no vocal (AKA no match found), then 'isVocal' will still be false and we put 'str[i]' into 'output'
      if (isVocal === false) {
        output = output + str[i]
      }
    }
    //if the letter being checked is a space, put it into 'output'
    if (str[i] === ' ') {
      output = output + str[i]
    }
  }
  return output
}

function reverseWord(str) {
  var output = ''
  //for each instance of index 'i' is less than the input's length
  for (var i = 0; i < str.length; i++) {
    //put the letter in the front
    output = str[i] + output
  }
  return output
}

function setLowerUpperCase(str) {
  var output = ''
  //for each instance of index 'i' is less than the input's length
  for (var i = 0; i < str.length; i++) {
    //if the letter is lower case, you add the upper case to 'output'
    if (str[i] == str[i].toLowerCase()) {
      output = output + str[i].toUpperCase()
    }
    //if the letter is upper case, you add the lower case to 'output'
    if (str[i] == str[i].toUpperCase()) {
      output = output + str[i].toLowerCase()
    }
  }
  return output
}

function removeSpaces(str) {
  var output = ''
  //for each instance of index 'i' is less than the input's length
  for (var i = 0; i < str.length; i++) {
    //if the letter is a space, add nothing
    if (str[i] === ' ') {
      output = output + ''
      //else, add the letter to 'output'
    } else {
      output = output + str[i]
    }
  }
  return output
}

function passwordGenerator(name) {
  var vocalChange = changeVocals(name)
  var reversedWord = reverseWord(vocalChange)
  var switchCase = setLowerUpperCase(reversedWord)
  var remove_Spaces = removeSpaces(switchCase)

  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  return remove_Spaces
}


console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'