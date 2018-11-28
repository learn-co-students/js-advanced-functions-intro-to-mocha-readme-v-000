function theTruth() {
    return true
}

function sayHey() {
    return 'Hey!'
}

function sayHeyFriend(name) {
    return `Hey, ${name}!`
}
function favoriteIceCream(name) {
    if (name === "mint chocolate chip") {
        return `I love ${name}`
    }

}

function shouting(shout) {
    if (shout === "i love javascript soooooo much")
    return `${shout}`.toUpperCase()
}

function roundDown(number) {
    if (number === 5.99)
    return Math.floor(`${number}`)
}