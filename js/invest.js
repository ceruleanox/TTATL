function Invest(stocks, options, bankValue, questionValue, stockValue) {
    this.stocks = stocks;
    this.options = options;
    this.score = score;
    this.bankValue = bankValue;
    this.questionValue = questionValue;
    this.stockValue = stockValue;
}

// function showInvestScreen() {
//     // Get the DOM reference
//     var x = document.getElementById("content");
//     // Toggle 
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

Invest.prototype.getInvestChoice = function(choice) {
    return choice;
}
//     // if buying, subtract from bank
//     if (choice == 'buy') {
//         bankValue -= questionValue;
//     // if selling, add stock value ???
//     } else if (choice == 'sell') {
//         bankValue += stockValue;
//     }
//  }

// Invest.prototype.makeChoice = function(choice) {

// }