function theTruth() {
  return true;
}

function sayHey() {
  return "Hey!";
}

function sayHeyFriend(friend) {
  return `Hey, ${friend}!`;
}

function favoriteIceCream(flavor) {
  return `I love ${flavor}`;
}

function shouting(sentence) {
  let newSentence = sentence.toUpperCase();
  return `${newSentence}`;
}

function roundDown(number_one){
  // let num2 = number_one.floor();
  return convertNum(number_one);
}

function convertNum(number_one) {
  return Math.floor(number_one);
}
