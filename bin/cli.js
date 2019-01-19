#!/usr/bin/env node

var pkg = require('../package.json')

var readline = require('readline')

var program = require('commander')

var shell = require('shelljs')

var sublimer = require('./app')

var utils = require('./utils')

var index = 0 // number of edits tracker

var allData = [] // all files that need to be edited

var _flip = 0 // use for flipping between showing and loading

start() // start the program

function start () {
  // Setup initial parameters

  program
    .version(pkg.version)
    .option('-f, --file [filePath]', 'format single file')
    .parse(process.argv)

  // Detect file path param

  if (program.file) {
    if (program.file === true) return utils.showWarning('missing file path')

    return search(program.file)
  }

  // Run search empty by default

  search('')
}

// Do the search

function search (pathString) {
  // TODO: Setup options

  sublimer.search(pathString, onSearchEnd)
}

// Once search ends, call on search end

function onSearchEnd (err, results) {
  // This is imnportant to keep here, we have to resume the terminal

  process.stdin.resume()

  // If the search returned with errors let's show them to the user

  if (err) return utils.showError(err)

  // If the results were empty, you are complete, let's close the session

  if (results === null) {
    // Show end

    utils.showEnd(0)

    // Exit proces

    process.exit()
  }

  allData = results

  /*
    Flip the looping backwards

    This will help keep the right line numbers while editing the files
  */

  index = allData.length

  init()
}

// init

function init () {
  index--

  // Active keypress event emitter

  // FIXME: I need to change this to a user module

  readline.emitKeypressEvents(process.stdin)
  process.stdin.on('keypress', onKeyPress)

  if (allData && !utils.isValid(allData[index])) return utils.showWarning()

  // Show the sublimer banner

  utils.showBanner(index)

  // Show the next item to edit

  utils.showNextEdit(allData[index])
}

// on key press

function onKeyPress (str, key) {
  // If you are active then force user to click enter again

  if (_flip === 0) {
    _flip++

    return run()
  } else {
    // Show next edit

    _flip--
    utils.showNextEdit(allData[index])
  }
}

// run the app

function run () {
  var _execPath = 'sublime ' + allData[index].path

  // Time to load up sublime (Or another IDE)

  // TODO: Need to add support for other IDS by calling EDITOR or VISUAL env variables.

  shell.exec(_execPath)

  // You reached the end...

  if (index === 0) {
    /*

       Do one last check, in case user skip a change

       or crated more issues while fixing.

    */

    sublimer.search('', function (err, results) {
      // Show error

      if (err) {
        utils.showError(err)
      }

      // Show the end

      if (!err && results) {
        utils.showEnd(
          (results && results.length)
            ? results.length : 0)
      }

      // Exit proces

      process.exit()
    })
  }
  index--

  utils.showClickNext()
}
