let timeout = 30;
function updateClock(timer) {
    timeout = timeout - 1;
    document.getElementById('timer').innerText = timeout;
}
document.getElementById('timer').innerText = timeout;
setInterval(updateClock, 1000);

var questions = [
    {
        question: "Vilka färger har Indiens flagga?",
        answers: {
            a: "Vit, röd, blå, torange",
            b: "Orange, blå, grön, vit",
            c: "grön, lila,",
            d: "Apelsin"
        },
        correctAnswer: 'a'
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
            d: "Lotusblomman"
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
        correctAnswer: 'b'
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
                + '<input type="radio" name="question>'+index+'" value="'+letter+'">'
                + letter + ': '
                + questions[index].answers[letter]
            + '</label>'
        );
    }

    output.push(
        '<div class="question">' + questions[index].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
    );

    console.log(questions.length);
    return output.join('');
}

function showQuestion(index) {
    let html = createQuestion(index);
    quizContainer.innerHTML = html;
}

function submitButton() {
    question = question + 1;
    if (question > questions.length) {
        question = 0;
        // TODO: show result
    }
    showQuestion(question);
}

showQuestion(0);
