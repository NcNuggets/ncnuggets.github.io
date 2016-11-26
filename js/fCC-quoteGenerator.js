/* 1. need a JSON object which contains quotes
 * 2. need to add an onclick action to the button
 * 3. the onclick should randomly serve a quote from the json object
 * 5. need to tap the twitter api
 * 6. need to prepare a tweet for sending onclick of twitter btn */

function main () {
  // variables
  var quoteNumber = 0;
  var newQuote = "test quote";
  var newAuthor = "test author";

  // object constructor to build quotes called "Quotes"
  function Quotes (quote, author) {
    this.quote = quote;
    this.author = author;
  }

  // function to randomize a number between 0 - X, where X is the size of object Quotes, and assigns that number to quoteNumber

  // function that chooses a quote from quotes and assigns it to array newQuote

  // function that changes the html id's for quoteText and quoteAuthor to the proper indeces from newQuote
  function setQuote (newQuote, newAuthor) {
    document.getElementsById('quoteText').innerHTML = newQuote;
    document.getElementsById('quoteAuthor').innerHTML = newAuthor;
  }
}
