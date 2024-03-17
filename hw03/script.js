const templateQuestion = document.getElementById("template-question");
const templateAnswer = document.getElementById("template-answer");
const templateScore = document.getElementById("template-score");

const quizContent = document.getElementById("quiz-content");

const startButton = document.getElementById("quiz-start");

let token;
let error;
let loading = false;
let questions = [];
let answers = [];

startButton.addEventListener("click", async () => {
    await nextQuestion();
    startButton.style.display = "none";
});

async function evaluateResponse(code, recallFunc) {
    switch (code) {
        case 0:
            return true;
        case 1:
        case 2:
            throw Error("Invalid params");
        case 3:
        case 4:
            await getToken();
            break;
        case 5:
            await new Promise((r) => setTimeout(r, 5000));
            await recallFunc();
            break;
        default:
            throw Error("Unexpected code: " + code);
    }
}

function getToken() {
    loading = true;
    return fetch("https://opentdb.com/api_token.php?command=request")
        .then((res) => {
            if (res.status >= 200) return res.json();
            throw Error("Fetch error");
        })
        .then(async (jsonResponse) => {
            const responseStatus = await evaluateResponse(
                jsonResponse.response_code,
                getToken
            );
            if (responseStatus) {
                token = jsonResponse.token;
                loading = false;
            }
        })
        .catch((err) => {
            loading = false;
            error = err;
        });
}

async function getQuestion(category = "", difficulty = "", type = "") {
    loading = true;
    let questionObject;
    if (token === undefined) await getToken();
    await fetch(
        `https://opentdb.com/api.php?amount=1&token=${token}${
            category ? "&category=" + category : ""
        }${difficulty ? "&difficulty=" + difficulty : ""}${
            type ? "&type=" + type : ""
        }`
    )
        .then((res) => {
            if (res.status >= 200) return res.json();
            throw Error("Fetch error");
        })
        .then(async (jsonResponse) => {
            const responseStatus = await evaluateResponse(
                jsonResponse.response_code,
                getQuestion.bind(this, category, difficulty, type)
            );
            if (responseStatus) {
                questionObject = jsonResponse.results;
                loading = false;
            }
        })
        .catch((err) => {
            loading = false;
            error = err;
        });

    return questionObject[0];
}

function displayQuestion(question) {
    quizContent.innerHTML = "";
    const questionElement = templateQuestion.content.cloneNode(true);

    const questionText = questionElement.getElementById(
        "template-question-text"
    );
    const answerContainer = questionElement.getElementById(
        "template-answer-container"
    );
    const nextButton = questionElement.getElementById("template-next");

    questionText.id = `question-text-${question.order}`;
    answerContainer.id = `answer-container-${question.order}`;
    nextButton.id = `next-${question.order}`;

    questionText.innerHTML = `${question.order + 1}. ${question.question}`;

    nextButton.addEventListener("click", nextQuestion);

    const offeredAnswers = [
        question.correct_answer,
        ...question.incorrect_answers,
    ].sort();
    for (let i = 0; i < offeredAnswers.length; i++) {
        const answer = offeredAnswers[i];

        const answerElement = templateAnswer.content.cloneNode(true);

        const answerButton = answerElement.getElementById(
            "template-answer-button"
        );
        const answerLetter = answerElement.getElementById(
            "template-answer-letter"
        );
        const answerText = answerElement.getElementById("template-answer-text");

        answerButton.id = `answer-button-${question.order}-${i}`;
        answerLetter.id = `answer-letter-${question.order}-${i}`;
        answerText.id = `answer-text-${question.order}-${i}`;

        answerLetter.innerHTML =
            String.fromCharCode(65 + i).toLowerCase() + ")";
        answerText.innerHTML = answer;

        answerButton.addEventListener("click", () => {
            if (answers[question.order] === answer)
                answers[question.order] = undefined;
            else answers[question.order] = answer;
        });

        answerContainer.appendChild(answerElement);
    }

    quizContent.appendChild(questionElement);
}

function displayScore() {
    quizContent.innerHTML = "";
    const scoreElement = templateScore.content.cloneNode(true);

    const totalLabel = scoreElement.getElementById("template-total");
    const correctLabel = scoreElement.getElementById("template-correct");
    const questionList = scoreElement.getElementById("template-question-list");
    const homeButton = scoreElement.getElementById("template-home");

    totalLabel.id = `total-label`;
    correctLabel.id = `correct-label`;
    questionList.id = `question-list`;

    homeButton.addEventListener("click", () => {
        error = undefined;
        loading = false;
        questions = [];
        answers = [];
        startButton.style.display = "";
        quizContent.innerHTML = "";
    })

    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    for (let i = 0; i < questions.length; i++) {
        if (answers[i] == undefined) unanswered++;
        else if (answers[i] === questions[i].correct_answer) correct++;
        else incorrect++;

        const questionRow = document.createElement("div");
        const questionOrderItem = document.createElement("span");
        const questionAnsweredItem = document.createElement("span");
        const questionCorrectItem = document.createElement("span");

        questionOrderItem.innerHTML = `${questions[i].order + 1}. / `;
        questionAnsweredItem.innerHTML = (answers[i] ? answers[i] : "-") + " / ";
        questionCorrectItem.innerHTML = questions[i].correct_answer;

        questionRow.appendChild(questionOrderItem);
        questionRow.appendChild(questionAnsweredItem);
        questionRow.appendChild(questionCorrectItem);

        questionList.appendChild(questionRow);
    }

    correctLabel.innerHTML = `${correct}`;
    totalLabel.innerHTML = `${questions.length}`;

    quizContent.appendChild(scoreElement);
}

async function nextQuestion() {
    if (questions.length >= 2) {
        displayScore();
        return;
    }

    const question = await getQuestion();
    question.order = questions.length;
    questions.push(question);
    displayQuestion(question);
}
