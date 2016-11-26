/* 1. need a JSON object which contains quotes
 * 2. need to add an onclick action to the button
 * 3. the onclick should randomly serve a quote from the json object
 * 5. need to tap the twitter api
 * 6. need to prepare a tweet for sending onclick of twitter btn */

// variables
var oldQuote = "";
var oldAuthor = "";
var newQuote = "";
var newAuthor = "";
var quotes = [];
var quoteNum = 0;

// array of quotes
quotes = [
  ['- Janet Fitch', 'The phoenix must burn to emerge.'],
  ['- Henry Ford', 'The only real mistake is the one from which we learn nothing.'],
  ['- Thomas A. Edison', 'I have not failed. I\'ve just found 10,000 ways that won\'t work.'],
  ['- Winston Churchill', 'Success is stumbling from failure to failure with no loss of enthusiasm.'],
  ['- John Green', 'What is the point of being alive if you don\'t at least try to do something remarkable?'],
  ['- Albert Einstein', 'Reading, after a certain age, diverts the mind too much from its creative pursuits. Any man who reads too much and uses his own brain too little falls into lazy habits of thinking.'],
  ['- Jeff Bezos', 'We are stubborn on vision, but flexible on the details..'],
  ['- Arnold Schwarzenegger', 'I am not a self-made man.'],
  ['- George Bernard Shaw', 'The reasonable man adapts himself to the conditions that surround him... The unreasonable man adapts surrounding conditions to himself... All progress depends on the unreasonable man.']
];

// assigning the old quotes with the html ids
oldQuote = document.getElementById('quoteText');
oldAuthor = document.getElementById('quoteAuthor');

// create a random integer for quoteNum
function randInt() {
  min = Math.ceil(0);
  max = Math.floor(quotes.length);
  return Math.floor(Math.random() * (max - min)) + min;
}

quoteNum = randInt();

// loading the default quote in the array
oldQuote.innerHTML = quotes[quoteNum][1];
oldAuthor.innerHTML = quotes[quoteNum][0];

// function to randomize a number between 0 - X, where X is the size of quotes, and assigns that number to randNum
function nextQuote() {
  randInt();
  quoteNum = randInt();
  oldQuote.innerHTML = quotes[quoteNum][1];
  oldAuthor.innerHTML = quotes[quoteNum][0];
}
