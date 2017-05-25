/* 1. need a JSON object which contains quotes
 * 2. need to add an onclick action to the button
 * 3. the onclick should randomly serve a quote from the json object
 * 5. need to tap the twitter api
 * 6. need to prepare a tweet for sending onclick of twitter btn */

// variables
var newQuote = "";
var newAuthor = "";
var quotes = [];
var quoteNum = 0;
var tweets = [];

// array of quotes
quotes = [
  ['I am grateful for...', 'Amanda\'s logical reasoning and appreciation instead of flipping her shit for no reason.'],
  ['I am grateful for...', 'An opportunity to relax with Amanda\'s family.'],
  ['I am grateful for...', 'Waking up next to an amazing woman (Amanda).'],
  ['I am grateful for...', 'Amanda\'s boundless patience.'],
  ['I am grateful for...', 'Doing nothing but laying in bed all day yesterday with Amanda. Quality time to the max.'],
  ['I am grateful for...', 'Amanda\'s Christmas card to me, it helps me when I\'m down.'],
  ['I am grateful for...', 'Amanda, who reminds me to live in the moment and forget about the future, the past, the goals, the challenges, if only for a moment, a morning or a day.'],
  ['I am grateful for...', 'Amanda, for centering me.'],
  ['I am grateful for...', 'Amanda, for putting up with my introverted tendencies.'],
  ['I am grateful for...', 'Amanda having her own interests, like football, which allows us to have separate lives and value our shared time together a little more.'],
];

// assigning the quote and author variables with the html ids
newQuote = document.getElementById('quoteText');
newAuthor = document.getElementById('quoteAuthor');

// create a random integer for quoteNum
function randInt() {
  min = Math.ceil(0);
  max = Math.floor(quotes.length);
  return Math.floor(Math.random() * (max - min)) + min;
}

// loading the default quote in the array
newQuote.innerHTML = quotes[quoteNum][1];
newAuthor.innerHTML = quotes[quoteNum][0];

// function to randomize a number between 0 - X, where X is the size of quotes, and assigns that number to randNum
function nextQuote() {
  randInt();
  quoteNum = randInt();
  newQuote.innerHTML = quotes[quoteNum][1];
  newAuthor.innerHTML = quotes[quoteNum][0];
}
