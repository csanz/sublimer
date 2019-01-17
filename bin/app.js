var fs = require('fs');

var colors = require('colors')

var shell = require('shelljs')

var path = require('path')

var allData = []

var app = {}

module.exports = app

// Search 

app.search = function (callback) {

  shell.exec('standard',{silent:true}, onSearchEnd);

  // ----------------------//
  // format resuls
  // ----------------------//

  function onSearchEnd(code, stdout, stderr){

    process.stdin.resume() // Resume
    
    if(!stdout) return console.log(colors.yellow("the output was empty"))

    var _lines = stdout.toString().split("\n")

    var _line = ""

    for (var i = 0; i < _lines.length; i++) {

      if(!_lines[i]) continue 

      var _file
      var _path
      var _desc

      _line = _lines[i].toString().trim()

      _path = _line.match(/(.*\d\:\s).*?/g).toString()
      _desc = _line.match(/\s(.*)?$/g).toString()

      _path = _path.replace(": ", "").trim()
      _desc = _desc.trim()
      _file = _path.replace(/\:\d+\:\d+/g, "")

      allData.push({
        path: path.relative('./',_path),
        desc: _desc,
        file: path.relative('./', _file)
      })
    }

    callback(allData)
  }
}

