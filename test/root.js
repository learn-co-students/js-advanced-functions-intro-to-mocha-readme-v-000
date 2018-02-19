// require is built into our test environment in Node.js (doesn't work in browser)
global.expect = require('expect');

// jsdom mocks out browsers and objects
const jsdom = require('jsdom');

const path = require('path');

// optional first argument of a funcion called done by convention
// tells Mocha that what we're doing runs asynchronously and not to run tests until we call done()
before(function(done) {
  // src = location of code we want to test
  // path.resolve() is part of Node.js library that determines the path of something
  const src = path.resolve(__dirname, '..', 'index.js');
  const babelResult = require('babel-core').transformFileSync(src, {
    presets: ['es2015']
  });
  const html = path.resolve(__dirname, '..', 'index.html');

  // jsdom.env() gets 4 args:
    // 1) HTML string (sets up DOM)
    // 2) array of paths to source files
    // 3) callback that receives err and window
      // if err != null then we want Mocha to stop and tell us what's wrong done(err)
      // if everything goes well we take everything defined on window and add to global so that it can be called in tests
    // 4) call done() with no args to tell Mocha we're done and to start running tests
  jsdom.env(html, [], { src: babelResult.code }, (err, window) => {
    if (err) {
      return done(err);
    }

    Object.keys(window).forEach(key => {
      global[key] = window[key];
    });

    // done() is called inside of callback that gets err & window as args
    return done();
  });
});
