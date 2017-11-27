global.expect = require('expect');

const jsdom = require('jsdom');
const path = require('path');

before(function(done) {
  const src = path.resolve(__dirname, '..', 'index.js');
  const babelResult = require('babel-core').transformFileSync(src, {
    presets: ['es2015']
  });
  const html = path.resolve(__dirname, '..', 'index.html');

  jsdom.env(html, [], { src: babelResult.code }, (err, window) => {
    if (err) {
      return done(err);
    }

    Object.keys(window).forEach(key => {
      global[key] = window[key];
    });

    return done();
  });
});

describe('favoriteIceCream', () => {
  it('should return the correct sentence when passed an icecream flavor', () => {
    const result = favoriteIceCream('mint chocolate chip');
    const expectedResult = 'I love mint chocolate chip';
    expect(result).toBe(expectedResult);
  });
});
