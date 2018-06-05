function theTruth(){
  return true
}

function sayHey(){
  return 'Hey!'
}

function sayHeyFriend(name){
  return `Hey, ${name}!`
}

function favoriteIceCream(flavor){
  return `I love ${flavor}`
}

function shouting(string){
  return string.split("").map(function(letter){return letter.toUpperCase()}).join("")
}

function roundDown(num){
  return Math.floor(num)

}
