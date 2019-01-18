#!/usr/bin/env node

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
  program
    .version('0.1.0')
    .option('-f, --file [filePath]', 'format single file')
    .parse(process.argv)

  // File path

  if (program.file) {
    if (program.file === true) return utils.showWarning('missing file path')

    return search(program.file)
  }

  // Run search empty by default

  search()

  function search (pathString) {
    sublimer.search(pathString, onSearchEnd)
  }
}

// On search end

function onSearchEnd (err, results) {
  process.stdin.resume() // Resume

  if (err) return utils.showError(err)

  if (results === null) {
    utils.showEnd()

    process.exit()
  }

  allData = results

  index = allData.length // go backwards, so as you edit the files you don't loose the location

  init()
}

// init

function init () {
  index--

  readline.emitKeypressEvents(process.stdin)
  process.stdin.on('keypress', onKeyPress)

  if (allData && !utils.isValid(allData[index])) return utils.showWarning()

  utils.showBanner(index)

  utils.showNextEdit(allData[index])
}

// on key press

function onKeyPress (str, key) {
  if (_flip === 0) {
    _flip++
    return run()
  } else {
    _flip--
    utils.showNextEdit(allData[index])
  }
}

// run the app

function run () {
  shell.exec('sublime ' + allData[index].path)

  index--

  utils.showClickNext()
}
