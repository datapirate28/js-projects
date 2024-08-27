const questions = [
    {
        question: 'Which of the following is the largest desert in the world by area?',
        answer: [
            { text: 'Gobi Desert', correct: false}, 
            { text: 'Sahara Desert', correct: false}, 
            { text: 'Arabian Desert', correct: false}, 
            { text: 'Antarctic Desert', correct: true} 
        ]
    },
    {
        question: 'Which country is home to the worlds tallest waterfall, Angel Falls?',
        answer: [
            { text: 'Brazil', correct: false}, 
            { text: 'Venezuela', correct: true}, 
            { text: 'Peru', correct: false}, 
            { text: 'Colombia', correct: false} 
        ]
    },
    {
        question: 'Which of these cities is NOT located on the Mediterranean Sea?',
        answer: [
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
