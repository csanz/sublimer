var readline = require('readline')

var colors = require('colors')

var utils = exports = module.exports = {}

// Show banner

utils.showBanner = function (numberOfLines) {
  console.log()
  console.log(colors.gray(" ||"),colors.gray.italic(" ", "░░░ ░  ░ ░░░░ ░    ░ ░     ░ ░░░░ ░░░░"))
  console.log(colors.gray(" ||"),colors.gray.italic(" ", "░   ░  ░ ░  ░ ░    ░ ░ ░ ░ ░ ░    ░  ░"))
  console.log(colors.gray(" ||"),colors.gray.italic(" ", " ░  ░  ░ ░ ░  ░    ░ ░  ░  ░ ░░   ░░░░"))
  console.log(colors.gray(" ||"),colors.gray.italic(" ", "  ░ ░  ░ ░  ░ ░    ░ ░     ░ ░    ░ ░"))
  console.log(colors.gray(" ||"),colors.gray.italic(" ", "░░░ ░░░░ ░░░░ ░░░░ ░ ░     ░ ░░░░ ░  ░"))
  console.log(colors.gray(" ||"))
  console.log(colors.gray(" ||")," ", colors.gray("Make sure you run `standard --fix` to automatically fix some problems."))
  console.log(colors.gray(" ||"))
  console.log(colors.gray(" ||")," ", colors.gray("Number of lines: "+numberOfLines))
}

// Show next edit

utils.showNextEdit = function(allData){
  console.log(colors.gray(" ||"))
  console.log(colors.gray(" ||")," ", colors.bold("Next edit:"))
  console.log(colors.gray(" ||")," ", colors.gray("  \\__"),colors.gray(allData.path))
  console.log(colors.gray(" ||")," ", colors.gray("  \\__"), colors.yellow(allData.desc))
  console.log(colors.gray(" ||"))
  console.log(colors.gray(" ||"))
  console.log(colors.gray(" ||")," ", colors.white("Press [enter] to open sublime"))
  console.log(colors.gray(" ||"))
}

// show warning

utils.showWarning = function(){
  console.log()
  console.log(colors.green("  Either there are no more changes left or this was an empty item..."))
  console.log()
}

// click to show next

utils.showClickNext = function(){
  console.log()
  console.log(" ", colors.cyan("Press [enter] to show next"))
  console.log() 
}

// Validate

utils.isValid = function(data) {

  if (!data) return false

  if (data.path === null && data.desc === null) return false

  return true
}
