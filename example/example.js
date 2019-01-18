var sublimer = require('../bin/app') // switch to require('sublimer')

var results = (err, results) => {
  console.log('errors: %s', err)

  for (var i = 0; i < results.length; i++) {
    console.log(results[i])
  }
}

sublimer.search('./misc/sample.dat', results)
