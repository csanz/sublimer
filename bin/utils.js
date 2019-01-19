var colors = require('colors')

var utils = exports = module.exports = {}

// Show banner

utils.showBanner = function (numberOfLines) {
  console.log()
  console.log(colors.gray(' ||'), colors.gray.italic(' ', '░░░ ░  ░ ░░░░ ░    ░ ░     ░ ░░░░ ░░░░'))
  console.log(colors.gray(' ||'), colors.gray.italic(' ', '░   ░  ░ ░  ░ ░    ░ ░ ░ ░ ░ ░    ░  ░'))
  console.log(colors.gray(' ||'), colors.gray.italic(' ', ' ░  ░  ░ ░ ░  ░    ░ ░  ░  ░ ░░   ░░░░'))
  console.log(colors.gray(' ||'), colors.gray.italic(' ', '  ░ ░  ░ ░  ░ ░    ░ ░     ░ ░    ░ ░'))
  console.log(colors.gray(' ||'), colors.gray.italic(' ', '░░░ ░░░░ ░░░░ ░░░░ ░ ░     ░ ░░░░ ░  ░'))
  console.log(colors.gray(' ||'))
  console.log(colors.gray(' ||'), ' ', colors.gray('Make sure you run `standard --fix` to automatically fix some problems.'))
  console.log(colors.gray(' ||'))
  console.log(colors.gray(' ||'), ' ', colors.gray('Number of lines: ' + numberOfLines))
}

// Show next edit

utils.showNextEdit = function (allData) {
  // If data is empty then show warning

  if (allData !== null && allData.path === null && allData.desc === null) return this.showWarning()

  // If not empty then show next edit

  console.log(colors.gray(' ||'))
  console.log(colors.gray(' ||'), ' ', colors.bold('Next edit:'))
  console.log(colors.gray(' ||'), ' ', colors.gray('  \\__'), colors.gray(allData.path))
  console.log(colors.gray(' ||'), ' ', colors.gray('  \\__'), colors.yellow(allData.desc))
  console.log(colors.gray(' ||'))
  console.log(colors.gray(' ||'))
  console.log(colors.gray(' ||'), ' ', colors.white('Press [enter] to open sublime'))
  console.log(colors.gray(' ||'))
}

// show end

utils.showEnd = function (numberLeft) {
  console.log(colors.gray(' ||'))
  console.log(colors.gray(' ||'))

  // If the number of tasks still higher than zero

  if (numberLeft > 0) {
    // Recommend to run the tool again
    console.log(colors.gray(' ||'), ' ', colors.gray('You have reached the end!'))
    console.log(colors.gray(' ||'), ' ', colors.red('You still have ' + numberLeft + ' left, run `sublimer` again to clean up'))
  } else {
    // You are done!

    console.log(colors.gray(' ||'), ' ', colors.gray('You have reached the end, no more issues'), colors.green.bold('congrats!'))
  }
  console.log(colors.gray(' ||'))
  console.log(colors.gray(' ||'))
}

// click to show next

utils.showClickNext = function () {
  console.log()
  console.log(' ', colors.cyan('Press [enter] to show next'))
  console.log()
}

// Validate

utils.isValid = function (data) {
  if (!data) return false

  if (data.path === null && data.desc === null) return false

  return true
}

// Show warning

utils.showWarning = function (text) {
  console.log(colors.gray(' ||'))
  console.log(colors.gray(' ||'), ' ', colors.yellow(text))
  console.log(colors.gray(' ||'))
}

// Show error

utils.showError = function (err) {
  console.log(colors.gray(' ||'))
  console.log(colors.gray(' ||'), ' ', colors.red(err))
  console.log(colors.gray(' ||'))
}

// Show help

utils.showHelp = function () {
  console.log('\nsublimer <PATH>\n'.cyan)
  console.log('\tExamples:'.white.bold)
  console.log('\t\tsublimer ./test/test.js'.cyan)
  console.log('\t\tntodo -p ./test/test.js'.cyan)
  console.log('\n')
}
