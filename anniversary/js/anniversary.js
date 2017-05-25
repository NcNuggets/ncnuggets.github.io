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
  ['- Nick', 'Hey Babe, Happy Anniversary!  I thought I\'d put together 100 Moments I\'ve recorded in my journal and put them here for you to see when you\'re feeling down.'],
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
  ['Today would be great if...', 'Amanda loving her pasta maker and mermaid blanket.'],
  ['Today would be great if...', 'Recharging with Amanda.'],
  ['Today would be great if...', 'Deep breathing exercises while with Amanda.'],
  ['Today would be great if...', 'Hugs from Amanda.'],
  ['Today would be great if...', 'Spending a quiet evening with Amanda, maybe cooking some dinner.'],
  ['Today would be great if...', 'Blending time with Amanda\'s family with learning.'],
  ['Today would be great if...', 'Helping alleviate some of Amanda\'s struggles.'],
  ['Today would be great if...', 'Seeing a big smile on Amanda\'s face.'],
  ['Today would be great if...', 'Watching the superbowl with Amanda (and enjoying the tension!).'],
  ['Today would be great if...', 'Making Amanda smile.'],
  ['Today would be great if...', 'Relaxing and enjoying the bruins game with Amanda later.'],
  ['Today would be great if...', 'Relaxing tonight with Amanda for the Path.'],
  ['Amazing things that happened today...', 'Quality time with Amanda.'],
  ['Amazing things that happened today...', 'Got a nice card for Amanda and wrote something nice for her (I\'m hoping she smiles from it).'],
  ['Amazing things that happened today...', 'Recharged with Amanda, watching movies and rick and morty.'],
  ['Amazing things that happened today...', 'Got a massage with Amanda.'],
  ['Amazing things that happened today...', 'Got to spending time with Amanda watching the Path.'],
  ['Amazing things that happened today...', 'Amanda\'s Mom gave me a picture of Amanda and I from a trip on the boat.'],
  ['Amazing things that happened today...', 'Managed to make Amanda smile after having such a frustrating day it brought her to tears.'],
  ['Amazing things that happened today...', 'Got to kiss Amanda a bunch.'],
  ['Amazing things that happened today...', 'Dinner and movie with Amanda, fantastic ribs and chicken.'],
  ['Amazing things that happened today...', 'Relaxed on the couch with Amanda.'],
  ['Amazing things that happened today...', 'Made incredible tacos with Amanda!'],
  ['Amazing things that happened today...', 'An incredible morning with Amanda, watching the snow fall.'],
  ['Amazing things that happened today...', 'Dinner at Earl\'s with Amanda, my sister Eva and her boyfriend Jared, ribs, Cajun chicken and potato salad, with a bread and spinach artichoke spread for appetizer.'],
  ['Amazing things that happened today...', 'Recharged with Amanda watching some goliath.'],
  ['Amazing things that happened today...', 'Spontaneous drinks with Amanda at a new restaurant, where we grew a bit closer.'],
  ['Amazing things that happened today...', 'Amanda looked especially happy today, and she\'s a boon on my own mood, which has been depressed and somber to say the least after all this political windfall and watching La La Land last night (two very unrelated events).'],
  ['Amazing things that happened today...', 'Got to wake up next to Amanda, which is always my favorite part of any day.'],
  ['Amazing things that happened today...', 'Got to kiss Amanda a bunch.'],
  ['Amazing things that happened today...', 'I\'m going to a bruins game with Amanda.'],
  ['Amazing things that happened today...', 'Cooked dinner with Amanda and it was fantastic.'],
  ['Amazing things that happened today...', 'Relaxed with Amanda and watched one of our favorite shows.'],
  ['Amazing things that happened today...', 'Brainstormed a bunch of ways to make Amanda smile for her birthday after hearing how I upset her.'],
  ['Amazing things that happened today...', 'I spent the night with Amanda cooking dinner and watching Mr. Robot.'],
  ['Amazing things that happened today...', 'Amanda\'s birthday party was excellent!'],
  ['Amazing things that happened today...', 'Shared a fucking incredible dinner with Amanda (Spicy Turkey and Peppers, Taco seasoning style, all inside half a spaghetti squash).'],
  ['Amazing things that happened today...', 'Relaxed with Amanda to a movie and had some excellent sex.'],
  ['Amazing things that happened today...', 'Woke up next to Amanda.'],
  ['Amazing things that happened today...', 'Drinks with Amanda.'],
  ['Amazing things that happened today...', 'Woke up next to Amanda, which is the best way to start any day.'],
  ['Amazing things that happened today...', 'Woke up next to Amanda.'],
  ['Amazing things that happened today...', 'Woke up next to Amanda.'],
  ['Amazing things that happened today...', 'Chatted with Amanda on the phone, I love hearing her voice instead of texting I think.'],
  ['How could today have been better?', 'I could have snagged a few more hugs from Amanda.'],
  ['How could today have been better?', 'Spent time with Amanda.'],
  ['How could today have been better?', 'Quality time with Amanda ;), instead I got a bit too drunk.'],
  ['How could today have been better?', 'I could have made Amanda smile MORE.'],
  ['How could today have been better?', 'I could have kissed Amanda one more time before I left this morning.'],
  ['How could today have been better?', 'More Amanda.'],
  ['How could today have been better?', 'Saw Amanda a bit more before she goes off to Texas, it was such a quick goodbye.'],
  ['How could today have been better?', 'Hugs with Amanda.'],
  ['How could today have been better?', 'Not enough Amanda in my life today.'],
  ['How could today have been better?', 'Quality time with Amanda, she fell asleep instead :|'],
  ['How could today have been better?', 'Paid a bit more attention to Amanda while we were together.'],
  ['How could today have been better?', 'Invited Amanda over to spend the night.'],
  ['How could today have been better?', 'Appreciated Amanda more.'],
  ['How could today have been better?', 'Not disrespected Amanda with my inconsiderate, impulsive banter.'],
  ['How could today have been better?', 'Could have paid more mind to Amanda.'],
  ['How could today have been better?', 'Going to sleep next to Amanda.'],
  ['How could today have been better?', 'Should have gone to Amanda\'s instead of going out.'],
  ['How could today have been better?', 'Reached out to Amanda more.'],
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
