/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOElJKzNmZ0wxeHc3TVczT0ZtTjhSdXl3cmp6RWcvVlhBOWVndGdLb2ZHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFRYazFxdDFKRmVQMFI5SUpIOEVOZ1RSNjdValYzNERqNS9VRlFKbzBrbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRlExelBUYTVzYmdTSElFYUx0bDVsdkplNGFSRCtTR2NlOVpLdlhqQ1hrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRNDFDMGhuTmRlZ2xCQ3dyemhVcmk0TFZtMWk0dkpuY3o3WGZmTTdTZVNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNObDRFeXN1MTJRVmJaY2prSnFJVk9GRU1LU0JSNUFYYjQ3WXV3NUx3SHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5EL3NDWENjWnQ1T0Rncit5STNYcnlCbmJKRGplQk83VEpPVGpqWFhrREU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0ZBWnJkSlN4b0htYWRlaWlCUGFEY0NpajFPVGFVWDBIRWp2Q1dNVnlFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1hEM2o3Y1NHb2d6cHZSQlhaTGFNSmY3a1hFK2tibytsd3FTVlFIZUdHND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjM4UVhOMVZiY3JnNEluSiswV09xNmpMQk1LRjVFRUFNSW1YUlp0SkxFTTZtaVI1NmlPTENYcVdBTDlFWjF5TlB2eEEvb25ocXBvTG5DZWVJdDQ3VkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiJabkdjcktpbEU1SXV2ZFVkQXBnT0JVcnlpTHRXT0JlODlCZklPNFBtcUpnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxNzczOTAzMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGNTY2NkNBNTVGODFDRTdGRTM4OTAxRDgxQTU2NkM2NiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUxNDUwMDQwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MTc3MzkwMzFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjBCMDRFMEUxQzEzNTEyOTUwRjdEQUYzRTRFNjk2NjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MTQ1MDA1N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiNjY4WVdMNFgiLCJtZSI6eyJpZCI6IjI1NDcxNzczOTAzMToyOUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExMjc0NzUyMjA3Njc3OToyOUBsaWQiLCJuYW1lIjoi4pyoTWlzcyBMZWUg4pyoIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLZTQwTFFFRUtXRGxNTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1dHQvZkdBQ05MU3F3L1ljU0VieldjQWYyYVRsMWZMOUhTMUdXRVdXN0E4PSIsImFjY291bnRTaWduYXR1cmUiOiJjcDYrR1dkUEtEZUR6VXJ3Z2NLUjRsNHBLOVY0Q2JMd3ozTGNJMUdnME9mL1p1TnJVdkVlSk5sWTZVMEpoVS81ckN5QTcyRmRWdUMwajFkOVZuY3JBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiejJtcnN4YkJlODZLZ2oyTUxFS0pSOVIzMnorQmpmSFQyQVhZV3pHc0pyOE1yMDZjN3RrUTdoanI4N2oxNSt2NHE3T2VOUUJEUURLZHVhL3RHcHBaQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MTc3MzkwMzE6MjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWJiZjN4Z0FqUzBxc1AySEVoRzgxbkFIOW1rNWRYeS9SMHRSbGhGbHV3UCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxNDUwMDM1LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVNcyJ9';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗥𝗔𝗩𝗘𝗡';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254114660061';
const owner = dev.split(",");
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/duv8ac.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 8080;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, owner, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
