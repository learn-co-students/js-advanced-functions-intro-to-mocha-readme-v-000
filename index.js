// returns the boolean true
function theTruth() {
	return true
}

// returns the string 'Hey!'
function sayHey(){
	return "Hey!"
}

// takes one argument (the name of the friend). The function returns 
// the string 'Hey <NAME>!' (e.g., 'Hey, Johnny!')
function sayHeyFriend(name) {
	return `Hey, ${name}!`
}

// returns the string "I love <NAME_OF_ICECREAM>"
function favoriteIceCream() {
	return `I love ${arguments[0]}`;
}

// accepts a string as a parameter and returns the string in all caps
function shouting() {
	return `${arguments[0].toUpperCase()}`;
}


// accepts a number as parameter and returns the number rounded down the closest whole number
function roundDown() {
	return `${Math.floor(arguments[0])}`;
}