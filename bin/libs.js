var fs = require('fs-extra')

var libs = exports = module.exports = {}

// File system

libs.file = (function () {
  return {

    // Check if this is a file

    isFile: function (pathString) {
      // If is not directory return true

      return !fs.lstatSync(pathString).isDirectory()
    },

    // Check if file has zero byte

    isZeroByte: function (pathString) {
      // If zero bytes return true

      return !fs.lstatSync(pathString).size
    },

    // Replace string

    replaceString: function (pathString, from, to) {
      // var fs = require('fs')
      // fs.readFile(someFile, 'utf8', function (err, data) {
      //   if (err) {
      //     return console.log(err)
      //   }
      //   var result = data.replace(/string to be replaced/g, 'replacement')

      //   fs.writeFile(someFile, result, 'utf8', function (err) {
      //     if (err) return console.log(err)
      //   })
      // })
    }
  }
}())
