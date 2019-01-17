#!/usr/bin/env node

var readline = require('readline')

var colors = require('colors')

var shell = require('shelljs')

var sublimer = require('./app')

var utils = require('./utils')

var index = 0 // number of edits tracker

var allData = [] // all files that need to be edited

var _flip = 0 // use for flipping between showing and loading

sublimer.search(onSearchEnd)

// On search end

function onSearchEnd(results){

  allData = results 

  index = allData.length // go backwards, so as you edit the files you don't loose the location

  init()

}

// init 

function init(){

  index--

  readline.emitKeypressEvents(process.stdin)
  process.stdin.on('keypress', onKeyPress)

  if(allData && !utils.isValid(allData[index])) return utils.showWarning()

  utils.showBanner(index)
  
  utils.showNextEdit(allData[index])

}

// on key press

function onKeyPress(str, key){

  if(_flip===0){ 

    _flip++
    return run() 

  }else{

    _flip--
    utils.showNextEdit(allData[index])

  }
}

// run the app

function run(){

  shell.exec('sublime '+ allData[index].path)

  index--

  utils.showClickNext()

}
