// describe('sayHey()', function () {
//   it('should return the string "Hey!"', function () {
//     expect(sayHey()).toEqual('Hey!');
//   });
// });
//
// function sayHey(){
//   return "Hey!"
// }
// describe('theTruth()', function () {
//   it('should return true', function () {
//     expect(theTruth()).toEqual(true);
//   });
// });

const theTruth = () => {
  return true
}

const sayHey = () =>{
  return "Hey!";

}
//
// describe('sayHeyFriend(name)', function () {
//   it("should return a greeting with the given name", function () {
//     expect(sayHeyFriend('Kristin')).toBe('Hey, Kristin!');
//   });
// });

const sayHeyFriend = (name) => {
  return `Hey, ${name}!`
}
//
// describe('favoriteIceCream()', function () {
//   it('should return the correct sentence when passed an icecream flavor', function () {
//     expect(favoriteIceCream('mint chocolate chip')).toEqual('I love mint chocolate chip');
//   });
// });

const favoriteIceCream = (flavor) => {
  return `I love ${flavor}`
}
//
// describe('shouting()', function () {
//   it('should return a string in all caps', function () {
//     expect(shouting('i love javascript soooooo much')).toEqual('I LOVE JAVASCRIPT SOOOOOO MUCH');
//   });
// });

const shouting = (str) => {
  return str.toUpperCase()
}

// describe('roundDown()', function () {
//   it('should correctly floor the number', function () {
//     expect(roundDown(5.99)).toEqual(5);
//   });

const roundDown = (num) => {
    return Math.floor(num)
}
