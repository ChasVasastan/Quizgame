let timeout = 30;
let question = 0;
let timerInterval;
let score = 0;
function updateClock() {
    timeout = timeout - 1;
    if (timeout === 0) {
        timeout = 31;
        nextQuestion();
    }
    document.getElementById('timer').innerText = timeout;
}
document.getElementById('timer').innerText = timeout;
setInterval(updateClock, 1000);

var questions = [
    {
        question: "Vilka färger har Indiens flagga?",
        answers: {
            a: "Vit, röd, blå, orange",
            b: "Orange, blå, grön, vit",
            c: "Grön, lila, blå, vit",
            d: "Grön, Orange, lila, blå"
        },
        correctAnswer: 'b'
    },
    {
        question: "Vad heter Indiens nationalfrukt?",
        answers: {
            a: "Mango",
            b: "Vindruvor",
            c: "Banan",
            d: "Apelsin"
        },
        correctAnswer: 'a'
    },
    {
        question: "Vad heter Indiens nationaldjur?",
        answers: {
            a: "Elefant",
            b: "Indisk vildhund",
            c: "Tiger",
            d: "Leopard"
        },
        correctAnswer: 'c'
    },
    {
        question: "Vad heter Indiens största religion?",
        answers: {
            a: "Kristendomen",
            b: "Islam",
            c: "Hinduism",
            d: "Buddism"
        },
        correctAnswer: 'c'
    },
    {
        question: "Vad heter Indiens nationalrätt?",
        answers: {
            a: "Roti",
            b: "Chicken Tikka Masala",
            c: "Chicken tandoori",
            d: "Ingen bestämd"
        },
        correctAnswer: 'd'
    },
    {
        question: "Vad heter Indiens nationalblomma?",
        answers: {
            a: "Hibiscus",
            b: "Roser",
            c: "Nalini",
            d: "Lotus"
        },
        correctAnswer: 'd'
    },
    {
        question: "Vilket är det officiella språket i Indien?",
        answers: {
            a: "Punjabi",
            b: "Sindhi",
            c: "Hindi",
            d: "Engelska"
        },
        correctAnswer: 'c'
    },
    {
        question: "Vem är rikast i Indien?",
        answers: {
            a: "Azim Premji",
            b: "Ramesh Chandra",
            c: "Lakshmi Mittal",
            d: "Mukesh Ambani"
        },
        correctAnswer: 'd'
    },
    {
        question: "Vad heter Indiens rymdprogram?",
        answers: {
            a: "RSA",
            b: "ISRA",
            c: "ISRO",
            d: "INSA"
        },
        correctAnswer: 'c'
    },
    {
        question: "Vad heter Indiens premiärminister?",
        answers: {
            a: "Jawaharlal Nehru",
            b: "Narendra Modi",
            c: "Droupadi Murmu",
            d: "Heeraben Modi"
        },
        correctAnswer: 'b'
    }

]

var quizContainer = document.getElementById('quiz');

function createQuestion(index) {
    var output = [];
    var answers = [];


    for(letter in questions[index].answers) {
        answers.push(
            '<label>'
                + '<input type="radio" name="question'+index+'" value="'+letter+'">'
                + letter + ': '
                + questions[index].answers[letter]
            + '</label>'
        );
    }

    output.push(
        '<div class="question">' + questions[index].question + '</div>'
        + '<div id="answers">' + answers.join('') + '</div>'
    );

    return output.join('');
}

function showQuestion(index) {
    let html = createQuestion(index);
    quizContainer.innerHTML = html;
}

function submitButton() {
    checkInput();
}

showQuestion(0);

function nextQuestion() {
    question = question + 1;
    timeout = 31;
    updateClock();

    if (question >= questions.length) {
        document.getElementById("quiz").innerHTML = "";
        document.getElementById('results').innerHTML = `Ditt resultat är ${score} updatera sidan för att börja om`;
        document.getElementById("timer").style.display = 'none';
        document.getElementById('score').style.display = 'none';
        document.getElementById('submit').style.display = 'none';
        return;
    }
    showQuestion(question);
}

function checkInput() {
    let selectedOption = document.querySelector('input[name="question' + question + '"]:checked');
    
    if (selectedOption) {
        let userAnswer = selectedOption.value;
        console.log(userAnswer);

        if (userAnswer === questions[question].correctAnswer) {
            score += timeout;
            nextQuestion();
        } else {
            score -= timeout;
            // revealClue();
        }
        updateScore(score);
    } else {
        alert("Vänligen välj ett alternativ innan du går vidare!")
    }
}

function updateScore(score) { 
    document.getElementById('score').innerText = `Score: ${score}`;
}