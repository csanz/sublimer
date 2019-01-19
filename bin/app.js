var shell = require('shelljs')

var path = require('path')

var file = require('./libs').file

var allData = []

var app = {}

module.exports = app

// Search

app.search = function (pathString, callback) {
  // Set default exec path

  var _execString = 'standard'

  /*

    Standard does not take path parameters unless you are a file,

    so it's ok to push whatever the user passed into here

    ./, ., ../ they will all return false and will default to _execString

  */

  if (pathString && file.isFile(pathString)) {
    // Check if the file is zero bytes first

    if (file.isZeroByte(pathString)) {
      return console.log('\nThe file was zero bytes\n>> %s\n'.red, pathString)
    }

    _execString = (pathString !== null) ? 'standard ' + pathString : 'standard'

    // Execute with path parameters

    shell.exec(_execString, { silent: true }, onSearchEnd)
  } else {
    // Execute without parameters

    shell.exec(_execString, { silent: true }, onSearchEnd)
  }

  // On search end

  function onSearchEnd (code, stdout, stderr) {
    try {
      if (!stdout) {
        return callback(null, null)
      }

      // Turn to string and create lines array and clean

      var _lines = stdout.toString().split('\n')

      var _line = null

      // Loop all lines

      for (var i = 0; i < _lines.length; i++) {
        // If line is empty continue

        if (!_lines[i]) continue

        // Set initial variables

        var _file
        var _path
        var _desc
        var _numb

        _line = _lines[i].toString().trim()

        // Regex the path, description and line/row numbers

        _path = _line.match(/(.*\d:\s).*?/g).toString()
        _desc = _line.match(/\s(.*)?$/g).toString()
        _numb = _line.match(/(\d+:\d+).*?/g).toString()

        // Clean up the data

        _path = _path.replace(': ', '').trim()
        _desc = _desc.trim()
        _file = _path.replace(/:\d+:\d+/g, '')
        _numb = _numb.split(':')

        // Add all data to an array

        allData.push({
          path: path.relative('./', _path),
          desc: _desc,
          file: path.relative('./', _file),
          lineNumber: _numb[0],
          rowNumber: _numb[1]
        })
      }
    } catch (err) {
      // If error happens

      return callback(err, null)
    }

    // All good, we are done

    callback(null, allData)
  }
}
