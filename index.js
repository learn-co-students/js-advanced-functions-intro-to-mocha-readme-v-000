function theTruth(){
  return true;
}

function sayHey(){
  return 'Hey!';
}

function sayHeyFriend(name){
  return `Hey, ${name}!`;
}

function favoriteIceCream(flavor){
  return `I love ${flavor}`;
}

function shouting(sentence){
  return sentence.split(" ").map(function(val){
    return val.toUpperCase();
}).join(' ');
}

function roundDown(number){
  return Math.floor(number);
}
