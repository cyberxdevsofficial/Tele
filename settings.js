//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: @DGXeon
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//telegram channel: https://t.me/+WEsVdEN2B9w4ZjA9

const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "8466342941:AAG9UX743FH8EsucR0odhQLZ06qWGItnvz8" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "𝗔𝗡𝗨𝗪𝗛 𝗠𝗗 𝗕𝗨𝗚 𝗕𝗢𝗧" //your bot name
global.OWNER_NAME = "@ANUWH4YOU" //your name with sign @
global.OWNER = ["https://t.me/ANUWH4YOU", "https://youtube.com/@anuga_official"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["6706839017"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://postimg.cc/nX6ZH38b' //your bot pp
global.pp2 = 'https://postimg.cc/nX6ZH38b' //your bot pp


//approval
global.GROUP_ID = -1002509209004; // Replace with your group ID
global.CHANNEL_ID = -1002570784338; // Replace with your channel ID
global.CHANNEL_ID_2 = -1002292164599; //Replace with your channel ID2
global.GROUP_LINK = "https://t.me/rishiheartmaker1"; // Replace with your group link
global.CHANNEL_INVITE_LINK = "https://t.me/TEAM56RJ"; // Replace with your private channel invite link
global.CHANNEL_INVITE_LINK_2 = "https://t.me/Team56Tricks"; // Replace with your backup channel invite link
global.WHATSAPP_LINK = "https://whatsapp.com/channel/0029Vb69q4Y8fewk9hwUdq28"; // Replace with your group link
global.YOUTUBE_LINK = "https://youtube.com/@team56official?si=Em6hvTXUAT4THM21"; // Replace with your youtube link
global.INSTAGRAM_LINK = "https://www.instagram.com/unicorn_xeon13"; // Replace with your ig link
global.idch = "120363399531796033@newsletter"
global.idch2 = '120363399531796033@newsletter'
global.idch3 = '120363399531796033@newsletter'


global.owner = global.owner = ['94710695082'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})