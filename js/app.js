
// function populate() {

//     for(var i = 0; i < 4; i++) {
//         document.getElementById("btn"+i).style.visibility = 'visible';
//     }

//     // index += 1;
//     // alert(index)

//     if(quiz.isEnded()) {
//         showScores();
//     } else {
//         // ask question
//         // show question
//         var element = document.getElementById("question");
//         element.innerHTML = quiz.getQuestionIndex().text;

//         // alert(quiz.getQuestionIndex().text)

//         //show choices
//         var choices = quiz.getQuestionIndex().choices;
        
//         for(var i = 0; i < choices.length; i++) {
//             var element = document.getElementById("choice"+i);
//             element.innerHTML = choices[i];
//             guess("btn"+i, choices[i]);
//         }
        
//         round += 1;
//         showProgress();
//     } 
//     year += 1;
// }


// function selectStock(stock) {
//     if (stock == 'apple') {

//     } else if (stock == 'disney') {
//         // alert(year)
//         if (year == 2015) {
//             var price = prices[prices.length-1]
//             // alert(price)
//             console.log('In ' + year + ' the price of Disney stock was ' + price)
//         } 
//     }
// }

// function guess(id, guess) {
//     var button = document.getElementById(id);
//     button.onclick = function() {

//         // show investment "page"
//         // show stock options
//         var element = document.getElementById("question");
//         element.innerHTML = "<button onclick=selectStock('disney')>Disney</button><button onclick=selectStock('apple')>Apple</button>"
        
//         //element.innerHTML = '<ul><li>Disney</li><li>Apple</li></ul>';
        
//         var ichoices;
//         // if first time, show only buy and hold
//         if (round == 1) {
//             ichoices = ['Buy', 'Hold']
//         // else, show buy, sell, and hold
//         } else {
//             ichoices = ['Buy', 'Sell', 'Hold']
//         }

//         // show buttons
//         for(var i = 0; i < 4; i++) {
//             if (i > ichoices.length-1) {
//                 // hide remaining buttons
//                 document.getElementById("btn"+i).style.visibility = 'hidden';
//             }
//             var element = document.getElementById("choice"+i);
//             element.innerHTML = ichoices[i];
//             iguess("btn"+i, ichoices[i]);
//         }

//         quiz.guess(guess); 
//         populate();
//     }
// }

// function iguess(id, guess) {
//     var button = document.getElementById(id);
//     button.onclick = function() {
//         quiz.guess(guess); 
//         //populate();
//     }
// }

// function showProgress() {
//     var currentQuestionNumber = quiz.questionIndex + 1;
//     var element = document.getElementById("progress");
//     element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
// }

// function showScores() {
//     var gameOverHtml = "<h1>Result</h1>";
//     gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
//     var element = document.getElementById("quiz");
//     element.innerHTML = gameOverHtml;
// }

// function showInvest() {
//     var investHtml = "<h1>Invest</h1>";
//     investHtml += '<h2>2010</h2>';
//     var element = document.getElementById('invest');
//     element.innerHTML = investHtml;
// }

// var questions =[
//     new Question("In 2015, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
//     new Question("In 2016, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
//     new Question("In 2017, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
//     new Question("In 2018, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
//     new Question("In 2019, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction")
// ]

// var prices = [182.2550, 145.2900, 108.1000, 108.9500, 105.3000, 103.1200, 94.9100]

// var year = 2014;
// var index = 0;
// var round = 0;
// var quiz = new Quiz(questions);

// populate();

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
    var currentQuestionNumber = Math.floor((quiz.questionIndex + 1)/2) + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length/2;
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
    new Question("In 2015, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
    new Question("In 2016, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
    new Question("In 2016, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
    new Question("In 2017, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
    new Question("In 2017, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
    new Question("In 2018, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
    new Question("In 2018, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
    new Question("In 2019, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction"),
    new Question("In 2019, this company's shares continuously shot up due to this event and strong (and neverending!) user base.", ["new product introduction", "US presdiential elections", "appointment of new CEO", "war was declared"],"new product introduction")
]

var index = 0;
var round = 0;
var quiz = new Quiz(questions);

populate();