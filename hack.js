var program = require('commander')

program
  .version('0.1.0')
  .option('-f, --file [filePath]', 'format single file')
  .parse(process.argv)

if (program.file === true) console.log(' filePath: %j', program.file)
