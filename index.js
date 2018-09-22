// Write a function called theTruth, which returns the boolean true.
function theTruth() {
  return true;
}
// Write a function called sayHey, which returns the string 'Hey!'.
function sayHey() {
  return 'Hey!';
}
// Write a function called sayHeyFriend, that takes one argument (the name of
// the friend). The function returns the string 'Hey <NAME>!' (e.g., 'Hey,
// Johnny!').
function sayHeyFriend(name) {
  return `Hey, ${name}!`;
}
// Write a function called favoriteIceCream, which accepts a parameter and
// returns the string "I love <NAME_OF_ICECREAM>".
function favoriteIceCream(ice_cream) {
  return `I love ${ice_cream}`;
}
// Write a function called shouting, which accepts a string as a parameter and
// returns the string in all caps.
function shouting(string) {
  return string.toUpperCase();
}
// Write a function called roundDown, which accepts a number as parameter and
// returns the number rounded down the closest whole number.
function roundDown(number) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
  return Math.floor(number);
}
