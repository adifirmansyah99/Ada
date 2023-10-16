const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6281916851052@s.whatsapp.net"]
global.nomerOwner = "6281916851052"
global.nomorOwner = ['6281916851052']
global.namaDeveloper = "Kona-MD"
global.namaBot = "Kona Push"
global.packname = ""
global.author = "Sticker By KonaOffc"
global.thumb = fs.readFileSync("./thumb.jpg")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})