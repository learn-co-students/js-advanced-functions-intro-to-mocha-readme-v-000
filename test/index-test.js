describe('Intro to Mocha', function () {
  describe('theTruth()', function () {
    it('should return true', function () {
      expect(theTruth()).toEqual(true);
    });
  });

  describe('sayHey()', function () {
    it('should return the string "Hey!"', function () {
      expect(sayHey()).toEqual('Hey!');
    });
  });

  describe('sayHeyFriend(name)', function () {
    it("should return a greeting with the given name", function () {
      expect(sayHeyFriend('Kristin')).toBe('Hey, Kristin!');
    });
  });

});
