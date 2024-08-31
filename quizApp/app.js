const questions = [
    {
        question: 'Which of the following is the largest desert in the world by area?',
        answers: [
            { text: 'Gobi Desert', correct: false}, 
            { text: 'Sahara Desert', correct: false}, 
            { text: 'Arabian Desert', correct: false}, 
            { text: 'Antarctic Desert', correct: true} 
        ]
    },
    {
        question: 'Which country is home to the worlds tallest waterfall, Angel Falls?',
        answers: [
            { text: 'Brazil', correct: false}, 
            { text: 'Venezuela', correct: true}, 
            { text: 'Peru', correct: false}, 
            { text: 'Colombia', correct: false} 
        ]
    },
    {
        question: 'Which of these cities is NOT located on the Mediterranean Sea?',
        answers: [
            { text: 'Barcelona', correct: false}, 
            { text: 'Lisbon', correct: true}, 
            { text: 'Naples', correct: false}, 
            { text: 'Alexandria', correct: false} 
        ]
    }   
];

const questionElement = document.querySelector('#question');
const answerBtn = document.querySelector('#answer-buttons')
const nextBtn = document.querySelector('#next-btn')


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innterText = 'Next';
    showQuestion()
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = `${questionNo}. ${currentQuestion.question}`

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtn.append(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('clikc', selectAnswer);
    })
}


function resetState(){
    nextBtn.style.display = 'none';
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
    }else{
        selectedBtn.classList.add('incorrect');
    }
}

startQuiz();

