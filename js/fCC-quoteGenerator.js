/* 1. need a JSON object which contains quotes
 * 2. need to add an onclick action to the button
 * 3. the onclick should randomly serve a quote from the json object
 * 5. need to tap the twitter api
 * 6. need to prepare a tweet for sending onclick of twitter btn */

// variables
var newQuote = "test quote 3";
var newAuthor = "test author 3";
var randNum = 0;

var oldQuote = document.getElementById('quoteText');
var oldAuthor = document.getElementById('quoteAuthor');

oldQuote.innerHTML = newQuote;
oldAuthor.innerHTML = newAuthor;

// object constructor to build quotes called "Quotes"
function Quotes (quote, author) {
  this.quote = quote;
  this.author = author;
}

// function to randomize a number between 0 - X, where X is the size of object Quotes, and assigns that number to quoteNumber

// function that chooses a quote from quotes and assigns it to array newQuote
