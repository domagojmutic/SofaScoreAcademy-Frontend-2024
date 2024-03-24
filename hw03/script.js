const templatePlayingCard = document.getElementById("template-playing-card");
const templateQuestion = document.getElementById("template-question");
const templateAnswer = document.getElementById("template-answer");
const templateScore = document.getElementById("template-score");

const quizContent = document.getElementById("quiz-content");

const startButton = document.getElementById("quiz-start");

const loadingDialog = document.getElementById("loading-dialog");

const quizConfig = document.getElementById("quiz-config");
const noQuestionsRange = document.getElementById("config-questions-range");
const noQuestions = document.getElementById("config-questions");
const configCategory = document.getElementById("config-category");
const configDifficulty = document.getElementById("config-difficulty");
const configType = document.getElementById("config-type");

let token;
let error;
let loading = new Proxy(
    { data: false },
    {
        set(obj, prop, value) {
            if (value === true) loadingDialog.showModal();
            if (value === false) loadingDialog.close();

            obj.data = value;
            return true;
        },
    }
);
let questions = [];
let cardElements = [];
let cardScoreElements;
let answers = [];
let displayedQuestion;
let maxQuestions = 15;

startButton.addEventListener("click", async () => {
    quizContent.innerHTML = "";
    displayedQuestion = 0;
    await nextQuestion();
    quizConfig.style.display = "none";
    quizContent.style.display = "";
});

noQuestionsRange.addEventListener("input", () => {
    maxQuestions = +noQuestionsRange.value;
    noQuestions.value = noQuestionsRange.value;
});

noQuestions.addEventListener("input", () => {
    maxQuestions = +noQuestions.value;
    noQuestionsRange.value = noQuestions.value;
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

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
            await sleep(5000);
            await recallFunc();
            break;
        default:
            throw Error("Unexpected code: " + code);
    }
}

function getToken() {
    loading.data = true;
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
                loading.data = false;
            }
        })
        .catch((err) => {
            loading.data = false;
            error = err;
        });
}

async function getQuestion(
    amount = 1,
    category = configCategory.value,
    difficulty = configDifficulty.value,
    type = configType.value
) {
    let questionObject;
    if (token === undefined) await getToken();
    await fetch(
        `https://opentdb.com/api.php?amount=${amount}&token=${token}${
            category ? "&category=" + category : ""
        }${difficulty ? "&difficulty=" + difficulty : ""}${
            type ? "&type=" + type : ""
        }`
    )
        .then(async (res) => {
            if (res.status >= 200 && res.status <= 299) return res.json();
            if (res.status == 429) {
                loading.data = true;
                await sleep(5000);
                questionObject = await getQuestion(
                    amount,
                    category,
                    difficulty,
                    type
                );
            }
            throw Error("Fetch error");
        })
        .then(async (jsonResponse) => {
            const responseStatus = await evaluateResponse(
                jsonResponse.response_code,
                getQuestion.bind(this, amount, category, difficulty, type)
            );
            if (responseStatus) {
                questionObject = jsonResponse.results;
                loading.data = false;
            }
        })
        .catch((err) => {
            loading.data = false;
            error = err;
        });

    return questionObject;
}

function generateQuestionElement(question) {
    const playingCardContainer = templatePlayingCard.content.cloneNode(true);
    const playingCard = playingCardContainer.getElementById(
        "template-playing-card"
    );

    const questionElement = templateQuestion.content.cloneNode(true);

    const questionText = questionElement.getElementById(
        "template-question-text"
    );
    const answerContainer = questionElement.getElementById(
        "template-answer-container"
    );
    const nextButton = questionElement.getElementById("template-next");
    const prevButton = questionElement.getElementById("template-prev");
    const lockTimer = questionElement.getElementById("template-lock-timer");

    questionText.id = `question-text-${question.order}`;
    answerContainer.id = `answer-container-${question.order}`;
    nextButton.id = `next-${question.order}`;
    playingCard.id = `playing-card-${question.order}`;

    questionText.innerHTML = `${question.order + 1}. ${question.question}`;

    nextButton.addEventListener("click", () => {
        displayedQuestion++;
        nextQuestion();
    });

    if (question.order === 0) {
        prevButton.classList.add("opacity-20");
        prevButton.disabled = true;
    }

    prevButton.addEventListener("click", () => {
        cardElements.forEach((e) => (e.style.zIndex = 0));
        cardElements[displayedQuestion].style.zIndex = 10;
        displayedQuestion--;
        hideQuestion(question.order);
    });

    const answerButtons = [];
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
            if (answers[question.order] === answer) {
                answers[question.order] = undefined;
                answerButton.classList.remove(
                    "bg-green-500",
                    "text-white",
                    "hover:bg-green-600"
                );
                answerButton.classList.add("hover:bg-gray-50");
            } else {
                answers[question.order] = answer;
                answerButton.classList.add(
                    "bg-green-500",
                    "text-white",
                    "hover:bg-green-600"
                );
                answerButton.classList.remove("hover:bg-gray-50");
                answerButtons.forEach((ab) => {
                    if (ab !== answerButton) {
                        ab.classList.remove(
                            "bg-green-500",
                            "text-white",
                            "hover:bg-green-600"
                        );
                        ab.classList.add("hover:bg-gray-50");
                    }
                });
            }
        });

        answerButtons.push(answerButton);
        answerContainer.appendChild(answerElement);
    }

    playingCard.appendChild(questionElement);
    quizContent.appendChild(playingCardContainer);
    playingCard.style.top = `${+question.order * 2}px`;
    playingCard.style.setProperty(
        "--start-rotation",
        `${Math.random() * 4 - 2}deg`
    );
    playingCard.style.setProperty(
        "--end-rotation",
        `${Math.random() * 4 - 2}deg`
    );

    cardElements[question.order] = playingCard;

    // Api can be contacted again after 5 secondes
    setTimeout(updateTimer, 1000);

    function updateTimer() {
        let t = +lockTimer.innerHTML;
        if (t === 1) {
            nextButton.disabled = false;
            nextButton.classList.remove("opacity-20");
            lockTimer.style.display = "none";
        } else {
            lockTimer.innerHTML = t - 1;
            setTimeout(updateTimer, 1000);
        }
    }
}

function displayQuestion(n) {
    cardElements[n].classList.add("show");
    if (cardElements[n].classList.contains("hide"))
        cardElements[n].classList.remove("hide");
}

function hideQuestion(n) {
    cardElements[n].classList.remove("show");
    cardElements[n].classList.add("hide");
}

function generateScoreElement() {
    const playingCardContainer = templatePlayingCard.content.cloneNode(true);
    const playingCard = playingCardContainer.getElementById(
        "template-playing-card"
    );

    const scoreElement = templateScore.content.cloneNode(true);

    const totalLabel = scoreElement.getElementById("template-total");
    const correctLabel = scoreElement.getElementById("template-correct");
    const questionList = scoreElement.getElementById("template-question-list");
    const homeButton = scoreElement.getElementById("template-home");

    totalLabel.id = `total-label`;
    correctLabel.id = `correct-label`;
    questionList.id = `question-list`;
    playingCard.id = `playing-card-score`;

    homeButton.addEventListener("click", () => {
        error = undefined;
        loading.data = false;
        questions = [];
        cardElements = [];
        answers = [];
        cardScoreElements = undefined;
        quizConfig.style.display = "";
        quizContent.innerHTML = "";
        quizContent.style.display = "none";
    });

    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    for (let i = 0; i < questions.length; i++) {
        if (answers[i] == undefined) unanswered++;
        else if (answers[i] === questions[i].correct_answer) correct++;
        else incorrect++;

        const questionRow = document.createElement("tr");
        const questionOrderItem = document.createElement("td");
        const questionAnsweredItem = document.createElement("td");
        const questionCorrectItem = document.createElement("td");

        questionOrderItem.innerHTML = `${questions[i].order + 1}.`;
        questionAnsweredItem.innerHTML = answers[i] ? answers[i] : "-";
        questionCorrectItem.innerHTML = questions[i].correct_answer;

        if (answers[i] == undefined)
            questionOrderItem.classList.add("text-yellow-600");
        else if (answers[i] === questions[i].correct_answer)
            questionOrderItem.classList.add("text-green-600");
        else questionOrderItem.classList.add("text-red-600");

        questionRow.appendChild(questionOrderItem);
        questionRow.appendChild(questionAnsweredItem);
        questionRow.appendChild(questionCorrectItem);

        questionRow.classList.add(
            "border-b",
            "border-gray-200",
            "hover:bg-gray-50"
        );
        questionList.appendChild(questionRow);
    }

    correctLabel.innerHTML = `${correct}`;
    totalLabel.innerHTML = `${questions.length}`;

    if (cardScoreElements !== undefined) cardScoreElements.remove();

    cardScoreElements = playingCard;

    playingCard.appendChild(scoreElement);
    quizContent.appendChild(playingCardContainer);

    playingCard.style.top = `${+questions.length * 2}px`;

    console.log(cardScoreElements);
}

function displayScore() {
    generateScoreElement();
    cardScoreElements.classList.add("show");
}

async function nextQuestion() {
    if (displayedQuestion + 1 > maxQuestions) {
        cardElements.forEach((e) => (e.style.zIndex = 0));
        displayScore();
        return;
    }
    if (displayedQuestion + 1 === maxQuestions) generateScoreElement();
    if (displayedQuestion === 0 && questions[displayedQuestion] === undefined) {
        const rawQuestions = await getQuestion(2);
        rawQuestions.forEach((question, i) => {
            question.order = i;
            questions[i] = question;
            generateQuestionElement(question);
        });
        displayQuestion(displayedQuestion);
        cardElements.forEach((e) => (e.style.zIndex = 0));
        cardElements[displayedQuestion].style.zIndex = 10;
    } else {
        if (questions[displayedQuestion] === undefined) {
            const question = (await getQuestion())[0];
            question.order = displayedQuestion;
            questions[displayedQuestion] = question;
            generateQuestionElement(question);
            displayQuestion(displayedQuestion);
            cardElements.forEach((e) => (e.style.zIndex = 0));
            cardElements[displayedQuestion].style.zIndex = 10;
        } else {
            displayQuestion(displayedQuestion);
            cardElements.forEach((e) => (e.style.zIndex = 0));
            cardElements[displayedQuestion].style.zIndex = 10;
        }
        if (
            displayedQuestion + 1 < maxQuestions &&
            questions[displayedQuestion + 1] === undefined
        ) {
            const question = (await getQuestion())[0];
            question.order = displayedQuestion + 1;
            questions[displayedQuestion + 1] = question;
            generateQuestionElement(question);
        }
    }
}
