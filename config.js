//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +919366316018
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

//contact details
global.ownernomer = "923252132556"
global.dev = ["923108218439","923403260410"]
global.ownername = "🧪尺丨丂卄丨ヅ"
global.ytname = "YT: team-56-official"
global.socialm = "GitHub: Rishi1Heart1Maker"
global.location = "Pakistan, Sindh, Daharki"

global.ownernumber = '923252132556'  //creator number
global.ownername = '🧪尺丨丂卄丨ヅ' //owner name
global.botname = 'ＲＩＳＨＩ ＢＵＧ Ｖ１9' //name of the bot

//sticker details
global.packname = '\n\n\n\n\n\n\nSticker By'
global.author = '🧪尺丨丂卄丨ヅ\n\nContact: +923252132556'

//console view/theme
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaijE4GIyPtVx0sf083E'
global.idch = '120363313264102208@newsletter'
global.idch2 = '120363402987215358@newsletter'
global.idch3 = '120363401681021280@newsletter'


global.baileysDB = 'baileysDB.json'
global.botDb = 'database.json'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Vip User ! \n\nWant Vip Or Owner? Chat Developer.\nYouTube: @team-56-official\nTelegram: t.me/RISHIHEARTMAKER\nWhatsApp: +923252132556`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Only Be Used By Owner ! \n\nWant Vip Or Owner? Chat Developer.\nYouTube: @team-56-official\nTelegram: t.me/RISHIHEARTMAKER\nWhatsApp: +923252132556`,
}

global.banner = ["447893985392@s.whatsapp.net","995544996873@s.whatsapp.net","916909137213","919366316018@s.whatsapp.net","919485490229@s.whatsapp.net","919402104403@s.whatsapp.net"]

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})