
var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it

var assert = require('assert')
describe('var sublimer = require("../bin/app");', function () {
  describe('sublimer.search("./test/sample.dat", callback)', function () {
    it('it should return 6 issues', function (done) {
      var sublimer = require('../bin/app')
      var results = (err, results) => {
        console.log()
        console.log('\tresults: %s', results)
        console.log('\terrors: %s', err)

        assert.strictEqual(results.length, 6)

        done()
      }
      sublimer.search('./misc/sample.dat', results)
    })
  })
})
