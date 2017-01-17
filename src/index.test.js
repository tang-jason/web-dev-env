import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('our first test', () => {
   it('should pass', () => {
      expect(true).to.equal(true);
   });
});

describe('index.html', () => {
   it('should say Hello World!', (done) => {
      // holding the index.html content in memory 
      const index = fs.readFileSync('./src/index.html', "utf-8");
      // create a window virtual
      jsdom.env(index, function(err, window) {
         // h1 variable
         const h1 = window.document.getElementsByTagName("h1")[0];
         // writing our expect testing
         expect(h1.innerHTML).to.equal("Hello World!");
         // tell mocha that we're done
         done();
         // free up the memories when finished testing
         window.close();
      });
   });
});