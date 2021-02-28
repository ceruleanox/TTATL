
function populate() {

    for(var i = 0; i < 4; i++) {
        document.getElementById("btn"+i).style.visibility = 'visible';
    }

    //var round = 0;
    //alert(round);

    if(quiz.isEnded()) {
        showScores();
    } else if (round % 2 == 0) {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            guess("btn"+i, choices[i]);
        }
        round += 1;
        showProgress();
    } else {
        // show investment "page"
        // show stock options
        var element = document.getElementById("question");
        element.innerHTML = '<ul><li>Disney</li><li>Apple</li></ul>';

        var ichoices;
        // if first time, show only buy and hold
        if (round == 1) {
            ichoices = ['Buy', 'Hold']
        // else, show buy, sell, and hold
        } else {
            ichoices = ['Buy', 'Sell', 'Hold']
        }

        // show buttons
        for(var i = 0; i < 4; i++) {
            if (i > ichoices.length-1) {
                // hide remaining buttons
                document.getElementById("btn"+i).style.visibility = 'hidden';
            }
            var element = document.getElementById("choice"+i);
            element.innerHTML = ichoices[i];
            guess("btn"+i, ichoices[i]);
        }
        
        round += 1;
        showInvest();
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

function showInvest() {
    var investHtml = "<h1>Invest</h1>";
    investHtml += '<h2>2010</h2>';
    var element = document.getElementById('invest');
    element.innerHTML = investHtml;
}

var questions =[
    new Question("In 2015, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
    new Question("In 2016, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
    new Question("In 2017, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
    new Question("In 2018, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
    new Question("In 2019, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction")
]

var index = 0;
var round = 0;
var quiz = new Quiz(questions);

populate();