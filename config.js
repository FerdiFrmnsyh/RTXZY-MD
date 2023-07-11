global.owner = ['62823504965328']  
global.mods = ['62823504965328'] 
global.prems = ['62823504965328']
global.nameowner = 'Ferdi'
global.numberowner = '62823504965328' 
global.mail = 'ferrjb@gmail.com' 
global.gc = 'https://chat.whatsapp.com/DpdTsFNBpV1B8zGQqxAu4N'
global.instagram = 'https://instagram.com/'
global.wm = '© Bot-Wa'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'

//INI WAJIB DI ISI!//
global.btc = 'dypxSTBO' 
//Daftar terlebih dahulu https://api.botcahx.live

global.lann = 'I4fynlPv'
//Daftar terlebih dahulu https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'dypxSTBO' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
