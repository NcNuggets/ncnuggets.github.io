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
  ['- Nick', 'Hey Babe, Happy Anniversary!'],
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
  ['I am grateful for...', 'Amanda, when I\'m feeling gloomy.'],
  ['I am grateful for...', 'Amanda, for giving me spontaneous smiles each day, giving me emotional security and a foundation.'],
  ['I am grateful for...', 'Amanda, for understanding the simplicity of love, and for recognizing what\'s truly important in life, and not getting caught on the minor things.'],
  ['I am grateful for...', 'Amanda, each morning she reminds me why it\'s so important to have a partner in crime along the way.'],
  ['I am grateful for...', 'Amanda, every day.'],
  ['I am grateful for...', 'Amanda\'s cheesy gifts, because they make me smile and start my days off right.'],
  ['I am grateful for...', 'Amanda, for being amazing and supportive and on my side and for holding my arms when we\'re sleeping.'],
  ['I am grateful for...', 'Having the opportunity to care for Amanda.'],
  ['I am grateful for...', 'Amanda, and all that she does.'],
  ['I am grateful for...', 'The experience of the bruins game yesterday with Amanda, it gave me a fantastic reprieve from recent stress and brought us a little closer.  Plus, we got to see the Bruins crush Arizona, 4 to 1, and even sent an Arizona player out in a stretcher.  True gladiators of our time.'],
  ['I am grateful for...', 'Amanda, for not taking it personally when I want to spend a day or a weekend working on a project instead of be with her.'],
  ['I am grateful for...', 'Amanda, for helping me with my jaw pain several nights ago, it has been substantially better since she massaged it.'],
  ['I am grateful for...', 'Amanda\'s thoughtfulness, she\'s making me dinner to show she appreciates me tomorrow night.'],
  ['I am grateful for...', 'Amanda, for staying calm and collected when we need to discuss tough topics, and for being insistent that we approach the topic as a team.'],
  ['I am grateful for...', 'Amanda, for making me feel like I\'m doing things right in our relationship, even when I feel like I\'m falling behind.'],
  ['I am grateful for...', 'Amanda, for handling my not being at work anymore well.'],
  ['I am grateful for...', 'Amanda, for being strong enough and mature enough to have a rational conversation when she\'s unhappy about how our relationship is going.'],
  ['I am grateful for...', 'Amanda, for matching with my personality so well and for keeping my less-than-desirable personality traits in check.'],
  ['I am grateful for...', 'Amanda, for being a strong, independent (she\'d say she\'s a child), determined woman, who\'s not afraid to talk about her feelings when she\'s upset about something or upset about us.'],
  ['I am grateful for...', 'Amanda, for the cute little things she does with her feet.'],
  ['I am grateful for...', 'Amanda, for reminding me of what matters.'],
  ['I am grateful for...', 'Amanda, for reminding me that I always have a place to retreat to when I\'m feeling defeated.'],
  ['I am grateful for...', 'Amanda, because while things may be rocky or crazy in my life, she remains consistent.'],
  ['I am grateful for...', 'Amanda\'s little squeaks when I squeeze her tight or make funny noises in her ear. Especially in the morning.'],
  ['I am grateful for...', 'Amanda and how beautiful she can be in the morning.'],
  ['I am grateful for...', 'Amanda and her colorful bullet journaling.'],
  ['I am grateful for...', 'Amanda, for being right and sticking to it when she is.'],
  ['I am grateful for...', 'Conversations with Amanda.  Although I think she\'s not a huge fan of talking on the phone, I love her voice over the phone, it reminds me of her sleepy morning voice.'],
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
