var shell = require('shelljs')

var path = require('path')

var file = require('./libs').file

var allData = []

var app = {}

module.exports = app

// Search

app.search = function (pathString, callback) {
  if (pathString && file.isFile(pathString)) {
    // Check if the file is zero bytes first

    if (file.isZeroByte(pathString)) { return console.log('\nThe file was zero bytes\n>> %s\n'.red, pathString) }

    pathString = 'standard ' + pathString

    shell.exec(pathString, { silent: true }, onSearchEnd)
  } else {
    shell.exec('standard', { silent: true }, onSearchEnd)
  }

  function onSearchEnd (code, stdout, stderr) {
    try {
      if (!stdout) {
        return callback(null, null)
      }

      var _lines = stdout.toString().split('\n')

      var _line = ''

      for (var i = 0; i < _lines.length; i++) {
        if (!_lines[i]) continue

        var _file
        var _path
        var _desc

        _line = _lines[i].toString().trim()

        _path = _line.match(/(.*\d:\s).*?/g).toString()
        _desc = _line.match(/\s(.*)?$/g).toString()

        _path = _path.replace(': ', '').trim()
        _desc = _desc.trim()
        _file = _path.replace(/:\d+:\d+/g, '')

        allData.push({
          path: path.relative('./', _path),
          desc: _desc,
          file: path.relative('./', _file)
        })
      }
    } catch (err) {
      callback(err, null)
    }

    callback(null, allData)
  }
}
