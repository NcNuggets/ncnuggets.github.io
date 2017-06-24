function cardGame() {
  var cardData = JSON.parse(cards);
  alert(cardData[0].name);
  alert(cardData[0].label);
  alert(cardData[0].cardNum);
  alert(cardData[0].value);
  alert(cardData[0].suit);
  alert(cardData[0].color);
  // alert(mydata[0].age);
  // alert(mydata[1].name);
  // alert(mydata[1].age);
}
