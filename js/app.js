function populate() {
    //showProgress();

    for(var i = 0; i < 4; i++) {
        document.getElementById("btn"+i).style.visibility = 'visible';
    }

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
        element.innerHTML = 
            '<h2>$' + quiz.score + '</h2>' +
            '<p>Select a stock you would like to buy.</p>' +
            '<label>' +
                '<input type="radio" name="stock" id="disney" value="disney"/>' + 
                '<div class="front-end box">' +
                    '<span>Disney</span>' +
                '</div>' +
            '</label>' +
            '<label>' +
                '<input type="radio" name="stock" id="apple" value="apple"/>' + 
                '<div class="front-end box">' +
                    '<span>Apple</span>' +
                '</div>' +
            '</label>' +
            '<label>' +
                '<input type="radio" name="stock" id="stock3" value="stock3"/>' + 
                '<div class="front-end box">' +
                    '<span>stock3</span>' +
                '</div>' +
            '</label>' +
            '<label>' +
                '<input type="radio" name="stock" id="stock4" value="stock4"/>' + 
                '<div class="front-end box">' +
                    '<span>stock4</span>' +
                '</div>' +
            '</label>' +
            '<p>Then, choose to either buy stocks or hold your money for the next round.</p>';

        var ichoices;
        // if first time, show only buy and hold
        if (round == 1) {
            ichoices = ['Buy', 'Hold']
        // else, show buy, hold, and sell
        } else {
            ichoices = ['Buy', 'Hold', 'Sell']
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
        showProgress();
    }
}

function getSelectedStock() { 
    var ele = document.getElementsByName('stock'); 
      
    for (i = 0; i < ele.length; i++) { 
        if (ele[i].checked) {
            document.getElementById("result").innerHTML = "Stock: "+ele[i].value; 
        }
    } 
} 

function selectStock(stock) {
    if (stock == 'apple') {

    } else if (stock == 'disney') {
        if (year == 2015) {
            var price = prices[prices.length-1]
            console.log('In ' + year + ' the price of Disney stock was ' + price)
        } 
    } else if (stock == 'stock3') {

    } else if (stock == 'stock4') {

    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess); 
        if (id == 'btn0') { // buy
            choice = 'buy'
        } else if (id == 'btn1') { // hold
            choice = 'hold'
        } else if (id == 'btn2') { // sell
            choice = 'sell'
        }
        //('You chose ' + choice);
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = Math.floor((quiz.questionIndex + 1)/2) + 1;
    var element = document.getElementById("progress");
    element.innerHTML = 
        "Question " + currentQuestionNumber + " of " + quiz.questions.length/2 + 
        '<br>' +
        '$'+ quiz.score;
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

var dict = {
    "disney": "Baydan",
    "apple": "Ali",
    "stock3": 1,
    "stock4": "Baydan",
};

var prices = [182.2550, 145.2900, 108.1000, 108.9500, 105.3000, 103.1200, 94.9100]
var year = 2014;
var round = 0;
var quiz = new Quiz(questions);

populate();