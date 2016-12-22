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

function calculatePhoneCost() {
  const TAX_RATE = 0.06
  const PRICE_PHONE = 99.99
  const PRICE_ACCESSORY = 9.99
  var bankBalance = prompt("Please enter a sample bank account balance");
  var spendingThreshold = prompt ("Please enter a spending threshold for your purchases");
}
