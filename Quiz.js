var readlineSync = require("readline-sync");

console.log("this is the one \nlets go red devil")

var userName = readlineSync.question("What is your name? ")
console.log("------------------------")
console.log("Welcome " + userName)
console.log("\n" )

var score = 0

var questions = [
  {
    subQuestion:"Which player is affectionately known as 'The King' to Manchester United fans?",
    answer:"Eric Catona",
    option:" Cristiano Ronaldo\n Eric Catona\n Roy Keane"
  },
  {
    subQuestion:"Which player holds the record for most Man Utd goals?",
    answer:"Wayne Rooney",
    option:" Cristiano Ronaldo\n Eric Catona\n Wayne Rooney"

  },
  {
    subQuestion:"With a reign of 26 years, 194 days, who is the longest-serving Manchester United manager?",
    answer:"Sir Alex Ferguson",
    option:" Sir Bobby Charlton\n Sir Alex Ferguson\n Sir Matt Busby Way"
  }

]

function checkAnswer(questions,answer,option){
  console.log(questions )
  console.log(option )
  console.log("\n" )

  var userAnswer = readlineSync.question("Ans ")

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log('yes');
    score = score + 1;
}

else console.log("no")
 console.log("------------------------")
}


for(var i = 0; i < questions.length; i++) {
  var subQuestion = questions[i].subQuestion;
  var subAnswer = questions[i].answer;
  var subOption = questions[i].option;
  checkAnswer(subQuestion,subAnswer,subOption)


}
console.log(score)
