// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Akmal Mods : Copyan Dari Base Hw Mods


const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/LHEV9GKbWiVDMRc8CWR10t'
global.ig = '@HW MODS WA' // ubah aja
global.email = 'denyp857@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'HW MODS WA' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['ISI NO LU'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = 'HW MODS WA' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'HW MODS WA' // ubah aja ini nama sticker
global.author = 'HW MODS WA' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})