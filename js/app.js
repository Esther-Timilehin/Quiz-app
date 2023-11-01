let bibleQuiz = document.getElementById("bible-quiz");
let quizData = [
{
    question: "1. Who is the father of jacob?",
    options: ["Abraham", "John", "Isaac", "Judas"],
    answer: "Isaac",
},
{
    question: "2. Who is the father of cain and abel",
    options: ["Adam", "James", "Jesus", "Judas"],
    answer: "Adam",
    
},
{
    question: "3. What is another name for satan?",
    options: ["paul", "peter", "lucifer", "Esther"],
    answer: "lucifer",
    
},
{
    question: "4. Who created heavens and earth?",
    options: ["God", "John", "Isaiah", "Satan"],
    answer: "God",
},
{
    question: "5. Who is the father of John",
    options: ["Zechariah", "James", "Daniel", "Micah"],
    answer: "Zechariah",
    
},
{
    question: "6. Who among the following are part of the disciples of jesus christ?",
    options: ["paul", "Jesus", "lucifer", "Peter"],
    answer: "Peter",
    
},
{
    question: "7. Who betrayed Jesus Christ?",
    options: ["Abraham", "John", "Isaac", "Judas"],
    answer: "Judas",
},
{
    question: "8. How many children did Isaac have?",
    options: ["15", "5", "2", "9"],
    answer: "2",
    
},
{
    question: "9. How many disciples did Jesus have ?",
    options: ["11", "2", "8", "12"],
    answer: "12",
    
},
{
    question: "10. Who is the father of Benjamin?",
    options: ["Abraham", "John", "Jacob", "Judas"],
    answer: "Jacob",
},
{
    question: "11. Who did God initially create hell for?",
    options: ["Devil", "children of God", "Jesus", "Believers"],
    answer: "Devil",
    
},
{
    question: "12. Who is the father of faith?",
    options: ["Abraham", "peter", "lucifer", "John"],
    answer: "Abraham",
    
},
{
    question: "13. Is God slow to anger?",
    options: ["No", "Never", "Yes", "I dont know"],
    answer: "Yes",
},
{
    question: "14. What day did God rest after he created the world?",
    options: ["7th day", "5th day", "3rd day", "4th day"],
    answer: "7th day",
    
},
{
    question: "15. Who is the wife of Isaac?",
    options: ["Rebecca", "Racheal", "john", "Esther"],
    answer: "Rebecca",
    
},
{
    question: "16. Who is the wife of Abraham?",
    options: ["Sarah", "Joanna", "Noami", "Racheal"],
    answer: "Sarah",
},
{
    question: "17. Who is the mother of John?",
    options: ["Elizabeth", "mary", "Ruth", "Racheal"],
    answer: "Elizabeth",
    
},
{
    question: "18. Who is the mother of Jesus?",
    options: ["mary", "sarah", "Ruth", "Esther"],
    answer: "mary",
    
},
{
    
    question: "19. Who sent the holyspirit to the disciples?",
    options: ["paul", "peter", "God", "Esther"],
    answer: "God",
    
},
{
    
    question: "20. Who is Jesus Christ?",
    options: ["The son of God", "The son of peter", "The son of James", "The son of Jacob"],
    answer: "The son of God",
    
},

]

let questionCount = 0;
let score = 0;
let nextBtn = document.getElementById("nextBtn");
let question = document.getElementById("question");
let answerOptions = document.getElementById("answer-options");
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");

function startQuiz()
{
questionCount = 0;
score = 0;
nextBtn.innerHTML = "Next";
questionFunc();
}

function questionFunc()
{
let firstQuestion = quizData[questionCount];
question.innerHTML = firstQuestion.question;
answerOptions.innerHTML = "";
//options

firstQuestion.options.forEach(Answer => {
    let questionOptions = document.createElement("button");
    questionOptions.innerHTML = Answer;
    questionOptions.classList.add("option");
    answerOptions.appendChild(questionOptions);
    
    //to check correct and wrong answers
    questionOptions.addEventListener("click", () =>   
    {
if (Answer === firstQuestion.answer)
{
    questionOptions.classList.add("correct");
    score++;   
    score1.innerHTML = score
}


else{
    questionOptions.classList.add("wrong");
}

//to prevent users from clicking more than one answers
Array.from(answerOptions.children).forEach(button => {
    if(button === firstQuestion.answer)
    {
button.classList.add("correct");
    }
    button.disabled = true;
});

    })
})
}
questionFunc();

function resetState()
{
    while(answerOptions.firstChild)
    {
        answerOptions.removeChild(answerOptions.firstChild);
    }
}

function handle()
{
    questionCount++;  
    if(questionCount < quizData.length)
    {
        questionFunc();
    }
    else{
        loadScore();
    }
}

function loadScore() {
    resetState();
    question.innerHTML = `You scored ${score} out of ${quizData.length}`;
    nextBtn.innerHTML = "Play again";
}

//Next button
nextBtn.addEventListener("click", () =>
{ 
    if(questionCount < quizData.length)
    {
        handle();
    }
    else{
        //document.getElementById("btn").remove();
        startQuiz();
        totalScore();
    }
})


function totalScore()
{
    questionFunc();
    score1.innerHTML = score;
score2.innerHTML = "/" + quizData.length;
}
totalScore();
startQuiz()

