// chai provides api's such as expect, should, assert.

const { assert, expect } = require('chai');
const should = require('chai').should(); 

const scores = [10, 20, 30, 50];
const exampleText = 'Random Text';

// what feature / unit you are testing
// describe and it are from mocha
// so, after adding descibe and it block here, 
// try the command 'npm run test' in the root level of the pjt
// group of related test cases
describe('scores', () => {

  // test case
  it('is an array', () => {
    assert.isArray(scores, 'Score is not an Array');
  });

  it('includes 50', () => {
    assert.include(scores, 50, 'Scores array does not have 50');
  });

  it('is an array with 10 in it', () => {
    expect(scores).to.be.an('array').that.includes(10);
  });

});

describe('exampleText', () => {

  it('is a string and includes Random', () => {
    exampleText.should.be.a('string').that.includes('Random');
  });
});


