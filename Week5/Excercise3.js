//Logic Challenge: Highest Score

function highestScore (students) {
    //to loop each object within the array
    var output = {}
    
    //to loop for each object data
    for (var i=0; i<students.length;i++){
        //to assign the keys name based on the class of the object data
        output[students[i].class] = {
            //to assign the keys within each class of fox type
            name:'',
            score:''
        }
    // console.log(students[i])
    }

    //to loop for each object data
    for(var j=0; j<students.length;j++){
       //console.log('student class are: ' +students[j].class)
       
       //to check for each fox class type in the output
       for (var k=0;k<Object.keys(output).length;k++){
        //console.log('       object keys are: '+Object.keys(output)[k])

        //if the class in the input matches with the class from the output . . .
        if(students[j].class===Object.keys(output)[k]){
            //console.log('             they are the same')
            
            //to insert score if the score from the input is larger than the score from the output
            if(students[j].score>output[students[j].class].score){
            output[students[j].class].score=students[j].score
            //console.log(output[students[j].class].score)
            
            //if the score from the input is larger than the score from the output,, they alos insert the name of that person
            output[students[j].class].name=students[j].name
            //console.log(output[students[j].class].name)
            }         
        }
       }
       //console.log('<--------------->')
    }
    return output
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}