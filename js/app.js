function populate() {
    if(quiz.isEnded()) {
        showScores();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice"+i);
            element.innerHTML= choices[i];
            guess("btn" + i,choices[i]);
        }

        showProgress();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess); 
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions =[
    new Question("In 2015, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
    new Question("In 2016, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
    new Question("In 2017, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
    new Question("In 2018, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
    new Question("In 2019, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction")
]

var quiz = new Quiz(questions);

populate();