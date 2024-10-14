let timeout = 30;
let question = 0;
let score = 0;
var timer;
function updateClock() {
    timeout = timeout - 1;
    document.getElementById('timer').innerText = timeout;
}

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

function createQuestion(index) {
    let output = document.createElement('div');
    let q = document.createElement('h2');
    q.innerHTML = questions[index].question;
    output.append(q);
    for(letter in questions[index].answers) {
        let e = document.createElement('button',);
        e.innerText = questions[index].answers[letter];
        e.setAttribute('value', letter);
        e.addEventListener('click', checkInput);
        output.append(e);
    }

    // Return output object to retain event listener
    return output;
}

function showQuestion(index) {
    timeout = 30;
    clearInterval(timer);
    timer = setInterval(updateClock, 1000);
    let newQuestion = createQuestion(index);
    document.getElementById('quiz').replaceChildren(newQuestion);
    document.getElementById('timer').innerText = timeout;
    document.getElementById('score').innerText = score;
}

function submitButton() {
    checkInput();
}

function nextQuestion() {
    question = question + 1;
    if (question >= questions.length) {
        let quiz = document.getElementById("quiz");
        quiz.innerHTML = `Ditt resultat är ${score}`;
        let e = document.createElement('button');
        e.innerText = 'Börja om';
        e.addEventListener('click', function() { location.reload(); });
        quiz.parentNode.append(e);
        document.getElementById("timer").parentElement.style.display = 'none';
        document.getElementById('score').parentElement.style.display = 'none';
        clearInterval(timer);
        return;
    }

    showQuestion(question);
}

function revealClue() {
}

function checkInput() {
    if (this.value === questions[question].correctAnswer) {
        score += timeout;
        nextQuestion();
    } else {
        score -= 20;
        this.disabled = true;
        revealClue();
    }
    document.getElementById('score').innerText = score;
}

showQuestion(0);
