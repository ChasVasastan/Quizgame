let timeout = 30;
let question = 0;
let score = 0;
var timer;
let timerElement = document.getElementById('timer')

function updateClock() {
    timeout = timeout - 1;
    showHints(timeout, question)
    timerElement.innerText = timeout;

    if (timeout <= 6) {
        timerElement.style.color='red';
    }

    if (timeout < 0) nextQuestion()
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
        correctAnswer: 'b',
        hints: {
            a: "Orange",
            b: "Blå",
            c: "Grön"
        }
    },
    {
        question: "Vad heter Indiens nationalfrukt?",
        answers: {
            a: "Mango",
            b: "Vindruvor",
            c: "Banan",
            d: "Apelsin"
        },
        correctAnswer: 'a',
        hints: {
            a: "!= orange",
            b: "Gul",
            c: "!= avlång"
        }
    },
    {
        question: "Vad heter Indiens nationaldjur?",
        answers: {
            a: "Elefant",
            b: "Indisk vildhund",
            c: "Tiger",
            d: "Leopard"
        },
        correctAnswer: 'c',
        hints: {
            a: "!= vänlig",
            b: "!= flockdjur",
            c: "Randig"
        }
    },
    {
        question: "Vad heter Indiens största religion?",
        answers: {
            a: "Kristendomen",
            b: "Islam",
            c: "Hinduism",
            d: "Buddism"
        },
        correctAnswer: 'c',
        hints: {
            a: "!= †",
            b: "Cyklisk tidsuppfattning",
            c: "Brahma, Vishnu, Shiva"
        }
    },
    {
        question: "Vad heter Indiens nationalrätt?",
        answers: {
            a: "Roti",
            b: "Chicken Tikka Masala",
            c: "Chicken tandoori",
            d: "Ingen bestämd"
        },
        correctAnswer: 'd',
        hints: {
            a: "!= ingefära",
            b: "!= bröd",
            c: "!= kyckling"
        }
    },
    {
        question: "Vad heter Indiens nationalblomma?",
        answers: {
            a: "Hibiscus",
            b: "Roser",
            c: "Nalini",
            d: "Lotus"
        },
        correctAnswer: 'd',
        hints: {
            a: "Rimmar != loser",
            b: "Symboliserar visom och utveckling",
            c: "Har inte 'I' i namnet"
        }
    },
    {
        question: "Vilket är det officiella språket i Indien?",
        answers: {
            a: "Punjabi",
            b: "Sindhi",
            c: "Hindi",
            d: "Engelska"
        },
        correctAnswer: 'c',
        hints: {
            a: "Slutar på 'I'",
            b: "Har != 'a' i namnet",
            c: "Rimmar på bindi"
        }
    },
    {
        question: "Vem är rikast i Indien?",
        answers: {
            a: "Azim Premji",
            b: "Ramesh Chandra",
            c: "Lakshmi Mittal",
            d: "Mukesh Ambani"
        },
        correctAnswer: 'd',
        hints: {
            a: "Han är god för 106 miljarder dollar",
            b: "Född i Yemen",
            c: "Hans förnamn slutar på 'esh'"
        }
    },
    {
        question: "Vad heter Indiens rymdprogram?",
        answers: {
            a: "RSA",
            b: "ISRA",
            c: "ISRO",
            d: "INSA"
        },
        correctAnswer: 'c',
        hints: {
            a: "Börjar på 'I'",
            b: "Slutar != på 'A'",
            c: "Indian Space Research Organisation"
        }
    },
    {
        question: "Vad heter Indiens premiärminister?",
        answers: {
            a: "Jawaharlal Nehru",
            b: "Narendra Modi",
            c: "Droupadi Murmu",
            d: "Heeraben Modi"
        },
        correctAnswer: 'b',
        hints: {
            a: "2014",
            b: "Modi",
            c: "N"
        }
    }

]

function createQuestion(index) {
    let q = document.createElement('h2');
    let output = document.createElement('div');
    output.className = 'question-container'
    q.innerHTML = questions[index].question;
    output.append(q);
    for (letter in questions[index].answers) {
        let e = document.createElement('button');
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
    timerElement.style.color='black';

    question = question + 1;
    if (question >= questions.length) {
        clearHints()
        let quiz = document.getElementById("quiz");
        quiz.innerHTML = `Ditt resultat är ${score}`;
        let e = document.createElement('button');
        e.innerText = 'Börja om';
        e.addEventListener('click', function () { location.reload(); });
        quiz.parentNode.append(e);
        document.getElementById("timer").parentElement.style.display = 'none';
        document.getElementById('score').parentElement.style.display = 'none';
        clearInterval(timer);
        return;
    }

    clearHints()
    showQuestion(question);
}

function showHints(seconds, index) {
    if (seconds === 20) {
        document.getElementById('hint1').innerText = questions[index].hints.a;
    } else if (seconds === 15) {
        document.getElementById('hint2').innerText = questions[index].hints.b;
    } else if (seconds === 10) {
        document.getElementById('hint3').innerText = questions[index].hints.c;
    }
}

function clearHints() {
    document.getElementById('hint1').innerHTML = ''
    document.getElementById('hint2').innerHTML = ''
    document.getElementById('hint3').innerHTML = ''
}

function checkInput() {
    let scoreElement = document.getElementById('score')
    
    if (this.value === questions[question].correctAnswer) {
        score += timeout;

        scoreElement.style.color = 'green'
        setTimeout(() => {
           scoreElement.style.color = '' 
        }, 2000);

        nextQuestion();
    } else {
        scoreElement.style.color = 'red'
        setTimeout(() => {
           scoreElement.style.color = '' 
        }, 2000);

        score -= 20;
        this.disabled = true;
    }
   scoreElement.innerText = score;

   // Nedan är test för "score"-funktion

   scoreElement.classList.add('animate-score');
    
    setTimeout(() => {
        scoreElement.classList.remove('animate-score');
    }, 300);
}

showQuestion(0);
