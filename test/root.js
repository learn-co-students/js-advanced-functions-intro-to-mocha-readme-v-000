//require is built intoour test environment(running in Node.js; it will not work in your browser.)
//
global.expect = require('expect');

const jsdom = require('jsdom');
const path = require('path');
//Mocha methods can take optional first arg. This arg is a function, and is usually called 'done' by convention.
//This 'done' function signals to mocha that what we are doing inside of before() -
//- runs asynchronously and tells us to wait until we call 'done' to start running our tests.
//done() gets 'err' and 'window' as its arguments.
before(function(done) {
  //assigning location of code to src vaariable
  const src = path.resolve(__dirname, '..', 'index.js');
  const babelResult = require('babel-core').transformFileSync(src, {
    presets: ['env']
  });
  const html = path.resolve(__dirname, '..', 'index.html');
  //This function can receive four arguments, but typically is only given three.
  //1. HTML string
  //2. An array - paths of source files
  //3. A config object that adjusts how Mocha runs. If this is not included Mocha's defualt behavior is fine.
  //4. A CB--this func receives an error first. Error is most likely null, but if it's defined, we call done(err)
  jsdom.env(html, [], { src: babelResult.code }, (err, window) => {
    if (err) {
      return done(err);
    }
    //We take all of the things on window and add them to global so that we can call them in our tests.
    Object.keys(window).forEach(key => {
      global[key] = window[key];
    });
    //Call done with no arguments to tell Mocha that we are finished with this before().
    return done();
  });
});
