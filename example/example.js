var sublimer = require('../bin/app')

var results = (err, results) => {
  console.log('results: %s', results)
  console.log('errors: %s', err)
}

sublimer.search('./misc/sample.dat', results)
