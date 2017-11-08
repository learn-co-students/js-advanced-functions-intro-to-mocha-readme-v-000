function theTruth() {
    return true;
}
function sayHey() {
    return "Hey!"
}
function sayHeyFriend(name) {
    return sayHey().slice(0,-1) + `, ${name}!`
}

function favoriteIceCream(flavor) {
    return `I love ${flavor}`
}

function shouting(str) {
    return str.toUpperCase();    
}
function roundDown(num) {
    return Math.floor(num);
}
