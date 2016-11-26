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

// assigning the quote and author variables with the html ids
newQuote = document.getElementById('quoteText');
newAuthor = document.getElementById('quoteAuthor');

// create a random integer for quoteNum
function randInt() {
  min = Math.ceil(0);
  max = Math.floor(quotes.length);
  return Math.floor(Math.random() * (max - min)) + min;
}

quoteNum = randInt();

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

// array of tweets
tweets = [
  'https://twitter.com/intent/tweet?text="The phoenix must burn to emerge." Janet Fitch',
  'https://twitter.com/intent/tweet?text="The only real mistake is the one from which we learn nothing." Henry Ford',
  'https://twitter.com/intent/tweet?text="I have not failed. I\'ve just found 10,000 ways that won\'t work." Thomas A. Edison',
  'https://twitter.com/intent/tweet?text="Success is stumbling from failure to failure with no loss of enthusiasm." Winston Churchill',
  'https://twitter.com/intent/tweet?text=https://twitter.com/intent/tweet?text="What is the point of being alive if you don\'t at least try to do something remarkable?" John Green',
  'https://twitter.com/intent/tweet?text="Reading, after a certain age, diverts the mind too much from its creative pursuits. Any man who reads too much and uses his own brain too little falls into lazy habits of thinking." Albert Einstein',
  'https://twitter.com/intent/tweet?text="We are stubborn on vision, but flexible on the details.." Jeff Bezos',
  'https://twitter.com/intent/tweet?text="I am not a self-made man." Arnold Schwarzenegger',
  'https://twitter.com/intent/tweet?text="The reasonable man adapts himself to the conditions that surround him... The unreasonable man adapts surrounding conditions to himself... All progress depends on the unreasonable man." George Bernard Shaw'
];

// function to set the tweet
function tweetText() {
  var tweet = document.getElementById('twitterShare');
  tweet.href = tweets[quoteNum];
}
