/*
Calculate total cost of purchasing phones.
Keep purchasing phones until you run out of money in your bank account.
Buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
Add in the tax.
Print out the calculated purchase amount, properly formatted.
Check the amount against your bank account balance to see if you can afford it or not.

You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance."

You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.

Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!
*/

function buyPhones() {
  // Define initial values for variables
  var bankBalance = Number(prompt("Fake Bank Account Balance?"));
  var purchaseAmount = Number(0);

  const TAX_RATE = Number(0.06);
  const PRICE_PHONE = Number(99.99);
  const PRICE_ACCESSORY = Number(9.99);
  const SPEND_THRESHOLD = Number(prompt("Spend Threshold?"));

  // Define functions for later calculations of sub-total pre-tax purchase amount and total post-tax purchase amount
  function subTotal() {
    purchaseAmount += PRICE_PHONE + PRICE_ACCESSORY;
  }

  function total() {
    purchaseAmount *= (1 + TAX_RATE);
  }

  function newBalance() {
    bankBalance -= purchaseAmount;
  }

  // Purchase the phones
  while (bankBalance > 0 && purchaseAmount < SPEND_THRESHOLD) {
    subTotal();
    console.log("subTotal: " + "$" + purchaseAmount.toFixed(2));
  }

  // Calculate the total after taxes
  total();
  console.log("total: " + "$" + purchaseAmount.toFixed(2));

  // If you can afford the current total balance after tax, purchase the phones and remove the total from your bank account
  if (purchaseAmount < bankBalance) {
    newBalance();
    console.log("I'll buy!");
    console.log("newBalance: " + "$" + bankBalance.toFixed(2));
  } else {
    console.log("Sorry, I can't afford that.");
  }
}
