// register babel to transpile before our test run
require('babel-register')();

// disable webpack features that mocha doesn't understand
require.extensions['.css'] = function() {};