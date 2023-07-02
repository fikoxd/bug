const fs = require('fs')
const chalk = require('chalk')

// ganti aja gpp
global.ownerName = "FIKOXD"
global.ownerNumber = "6283110933360"
global.botName = "BOT"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})