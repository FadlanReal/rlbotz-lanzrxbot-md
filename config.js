let fs = require('fs')
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?
global.thumbt = global.img
global.fsx = 999999999999
global.namebot = 'LanzrxBot-MD' //ubah nama botnya
global.kontak = [
['6288242168278', 'Fadlan', true], 
['6281779115749', 'Lanzrx-MD', false] 
]
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.neoxr.eu.org': 'yntkts',
  'https://api.xteam.xyz': 'Apikeys',
  'https://melcanz.com': 'Apikeys',
  'https://api.lolhuman.xyz': 'Apikeys',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

global.linkyt = 'https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw'
global.WM = 'LanzrxBot-MD'
global.linkgc = 'https://chat.whatsapp.com/HSwWWKubOaC4cddROkBVtC'
global.linkig = 'https://www.instagram.com/'
global.deslink = ''
global.logo = 'https://telegra.ph/file/1665521d176fbf172d735.jpg'
global.titlink = 'Subscribe Me'
global.bodlink = 'https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw'

global.wait = '_*π¬ππππ§π  ππ’ π©π«π¨π¬ππ¬ ...*_'
global.eror = '_*ΠΌΞ±Ξ±Ζ ΡΡΡΞ½ΡΡ ΡΞΉβΞ±ΠΊ ΡΡΞ±Π²ΞΉβ..*_'

//========Url Template Buttons==========//
global.dtu = 'π GROUP OFFICIAL'
global.urlnya = global.linkgc

//============= callButtons ============//
global.dtc = 'ππππ πππππ'
global.phn = '+62 882 4216 8278'

//========== Tampilan Bot =============//
global.sa = 'β­β'
global.gx = 'ββ'
global.gy = 'ββ’'
global.gz = 'β'
global.sb = 'β°ββββΰΏ'
global.kki = 'γ'
global.kka = 'γ'
global.zt = '*'
global.zc = ''

global.thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
]

//============= Games ================//
global.benar = '_*Benarβ*_'
global.salah = '_*Salahβ*_'
global.dikit = "dikit lagi, semangat ya :')"

global.multiplier = 100 // The higher, The harder levelup

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'π§¬',
      limit: 'π',
      healt: 'β€οΈ',
      exp: 'βοΈ',
      money: 'π΅',
      potion: 'π₯€',
      diamond: 'π',
      common: 'π¦',
      uncommon: 'π',
      mythic: 'π³οΈ',
      legendary: 'ποΈ',
      pet: 'π',
      sampah: 'π',
      armor: 'π₯Ό',
      fishingrod: 'π£',
      pickaxe: 'βοΈ',
      sword: 'βοΈ',
      kayu: 'πͺ΅',
      batu: 'πͺ¨',
      iron: 'βοΈ',
      string: 'πΈοΈ',
      kuda: 'π',
      kucing: 'π' ,
      anjing: 'π',
      makananpet: 'π',
      gold: 'π',
      emerald: 'π'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
