const theTruth  = () => { return true }

const sayHey  = () => { return 'Hey!' }

const sayHeyFriend  = name => { return `Hey, ${name}!` }



const shouting  = string => { return string.toUpperCase(); }

const roundDown  = number => { 
    const result = number - .5;
    return Math.round(result); 
}

function favoriteIceCream(flavor) {
    return `I love ${flavor}`;
}