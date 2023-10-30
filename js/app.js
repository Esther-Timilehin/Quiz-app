
let bibleQuiz = document.getElementById("bible-quiz");
let quizData = [
{
    id: "Question1",
    question: "Who is the father of jacob?",
    question1: "1.",
    optionA: "Abraham",
    optionB: "John",
    optionC: "Isaac",
    optionD: "Judas",
    correctAnswer: "Isaac",
    answer: "question 1",
},
{
    id: "Question2",
    question: "Who is the father of cain and abel",
    question1: "2.",
    optionA: "Adam",
    optionB: "James",
    optionC: "Jesus",
    optionD: "Judas",
    correctAnswer: "Adam",
    answer: "question 2",
},
{
    id: "Question3",
    question: "What is another name for satan?",
    question1: "3.",
    optionA: "paul",
    optionB: "peter",
    optionC: "lucifer",
    optionD: "Esther",
    correctAnswer: "lucifer",
    answer: "question 3",
},
]


function generateBibleQuiz()
{
    return (bibleQuiz.innerHTML = quizData.map((x) => 
    {
        return `
        <div class="row d-flex justify-content-center">
        <div class="col-sm-12 col-md-6 col-lg-6 shadow sec-bg-col mb-5">
            <h5 class="mt-3 question">${x.question1} ${x.question}</h5>
        
        <div>
            <div class="option mt-5 mx-3 rounded-2 question-options">
    <p class="my-2 mx-3">${x.optionA}</p>
    </div>
    <div class="option mt-2 mx-3 rounded-2 question-options">
    <p class="my-2 mx-3">${x.optionB}</p>
    </div>
    <div class="option mt-2 mx-3 rounded-2 question-options">
    <p class="my-2 mx-3">${x.optionC}</p>
    </div>
    <div class="option mt-2 mb-5 mx-3 rounded-2 question-options">
    <p class="my-2 mx-3">${x.optionD}</p>
    </div>
    </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 shadow sec-bg-col second-col">
            <h3 class="text-center fw-2 mt-4">Answer to ${x.answer}</h3>
            <h5 class="mt-5 mb-3 fs-4">Selected answer:</h5>
            <h5 class="mb-3 fs-4">Correct answer:</h5>
            <h5 class="mb-3 fs-4">status:</h5>
       </div>
    </div>
        `
    }).join(""));

}
generateBibleQuiz();

/**let nextButton = document.getElementById("next-btn");
let currentQuestion = 0;
bibleQuiz.innerHTML = JSON.stringify(quizData[currentQuestion]);

/**nextButton.addEventListener("click", () => 
{
    quizData[currentQuestion];
    bibleQuiz.innerHTML = quizData;
    console.log("stated");
})**/



