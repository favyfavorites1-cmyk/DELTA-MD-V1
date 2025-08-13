
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "deltacore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUlDWUhyUGgwc1ZTd2Z6V0twcksyTDRkTERMdEVDbWtkQU02RjhMUFBscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVp3RXZmd2JvSzNrUk5lcHArNWxKQ3luS3d6MnEwNFBLYUF6UE42N2VRZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QkYzQ2lyNXUwdDhHMHllcnNyeEl2RWJhSm45N3JGU3ZEVlNuL3JHLzNZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJja3RERlZ1cEd4VjBNNHh0a1NvUzViakFYNFRIZmJRYk1ZbDlEWFgwaFNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdJRklERWltZ1l4MlZ5QVpOUnM3ZnBBSE4rN0FmR2gxbUoyb280Tm5YbVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1scy84YmRxUm9MUmxqTkRpdk1pcDFaVHRrNDRPSGxVRXJETXEwa3hXMmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUR4Vlg3Wk5DZ1cveS9RaEc0L3lPa25TaE9abkhlRzFzM2ZQRkJUN2pHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemVKRWJmWFBkeW1BYW9xZlFtZzJyRllaRStPSHdBUVZDQkJXSUdRUmp3MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhBODAya1dSMFVuL2RITFNiVFh1cllmZDlDbmRuK0Qyc3htd3EzRDRPbm5FR1drWnRwaTVIc3QzelJMbkg1dzhFVlFWL1c2VVNiZnludXRrcXFxOGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI5LCJhZHZTZWNyZXRLZXkiOiJ0OTBFc081L29xQk1aREpIUzJzTk83VmgyUUc4N2EzWHhhK0w3OUtjQ1FnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJaMVhHRzY3UiIsIm1lIjp7ImlkIjoiMjM0OTE2MTA4ODA4Nzo4NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLJjDBiMW4iLCJsaWQiOiIxNTMwNDI5Mzg3ODE3MTQ6ODRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPYjU3bFlRdS9YeXhBWVlIU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTdXp2Y3p0cmZkUDR0UklETkU0MVNmT25NdzJDSUdPVDIzMlhNSTFJK0MwPSIsImFjY291bnRTaWduYXR1cmUiOiJZMWtTR3ExaGJmcU9maEZLVUNaa3kxZVNqQ0JEQjliRzloM0xFcEc5NU5lV2E1cndUZEtWd3FLM1FkdXJ2Ni81OTFJb24zZWo2dDZOeHYzM21qZWVDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaFJpWEl6T2x1ejFNVXpXeG52TWJqYUxKOFY0K28zR25OaG1wNnRQVUFiQ3N4Tm5QdXQxcnNiR2ZUckpVOGZMNnZwa1ZLa21Pb24xNml3UmV0U2JBaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTYxMDg4MDg3Ojg0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVyczczTTdhMzNUK0xVU0F6Uk9OVW56cHpNTmdpQmprOXQ5bHpDTlNQZ3QifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTEwMTg5NywibGFzdFByb3BIYXNoIjoibm0zQmIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUs3TSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY DELTA-MD-V1*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "DELTA-MD-V1",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Robin-md",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2349161088087",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ROBIN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ delta ᴛᴇᴄʜ  ",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/493ur5.jpg",
// add img for alive msg
MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/0go0uy.jpg",
// menu image 
WELCOME_ENABLED: process.env.WELCOME_ENABLED || "true",
    // welcome group members 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "263788521064",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
