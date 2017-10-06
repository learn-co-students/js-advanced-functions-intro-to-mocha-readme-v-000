function theTruth(){
  return true
}

function sayHey(){
  return "Hey!"
}

function sayHeyFriend(name){
  return `Hey, ${name}!`
}

function favoriteIceCream(flavor = 0){
  if (flavor){
    return `I love ${flavor}`
  }
}

function shouting(string){
  return string.toUpperCase()
}

function roundDown(number){
  return Math.floor(number)
}
