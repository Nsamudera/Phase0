function graduates(students) {
  var output = {}

  //to loop for each object data
  for (var i = 0; i < students.length; i++) {
    //to assign the keys name based on the class of the object data
    output[students[i].class] = []
  }

  //to loop for each object data
  for (var j = 0; j < students.length; j++) {
    //console.log(students[j])
    //to create variable 'content' to store the content and will be pushed to the output's class 
    var content = {
      name: '',
      score: 0
    }

    //to check for each fox class type in the output
    for (var k = 0; k < Object.keys(output).length; k++) {
      //if the class in the input matches with the class from the output . . .
      if (students[j].class === Object.keys(output)[k]) {

        //if the score in the input is greater than 75 . . .
        if (students[j].score > 75) {
          //make the score in 'content' the same as the score in the input
          content.score = students[j].score
          //make the name in 'content' the same as the name in the input
          content.name = students[j].name
          //push content to output's class
          output[students[j].class].push(content)
        }
      }
    }
  }
  return output
}