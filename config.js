const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_41_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA4LFxuICAgICAgICA0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAzNixcbiAgICAgICAgMTE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM0LFxuICAgICAgICA0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMixcbiAgICAgICAgODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1LFxuICAgICAgICAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgODksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY1LFxuICAgICAgICA2MixcbiAgICAgICAgMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgODcsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzLFxuICAgICAgICA0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJkZDY1WXdoMG1sOFpEWHc1bW8zdDRvQUREWmc3RG1NYjY1dVZHN0VLSmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllDOXVoMFdKUXFpZ3VpWDFmNTJoQmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjliNWE2MDAtMDFlMy00ZDljLWFjMGYtNDI4YjA3YzY5MzNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgNzksXG4gICAgICAxMTYsXG4gICAgICAxMzMsXG4gICAgICA4OCxcbiAgICAgIDE2MixcbiAgICAgIDM2LFxuICAgICAgMTU0LFxuICAgICAgNTUsXG4gICAgICAxNDYsXG4gICAgICAxMzIsXG4gICAgICAxMzcsXG4gICAgICAyMTAsXG4gICAgICA4MixcbiAgICAgIDMsXG4gICAgICAxMzgsXG4gICAgICAzNCxcbiAgICAgIDIzOCxcbiAgICAgIDEzOSxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDMyLFxuICAgICAgMjU1LFxuICAgICAgMjEsXG4gICAgICAzNSxcbiAgICAgIDIyMixcbiAgICAgIDEyNCxcbiAgICAgIDEwMSxcbiAgICAgIDIyNixcbiAgICAgIDM3LFxuICAgICAgOTQsXG4gICAgICAxNDgsXG4gICAgICAxMDQsXG4gICAgICA4NyxcbiAgICAgIDIxOCxcbiAgICAgIDE4MyxcbiAgICAgIDEyOSxcbiAgICAgIDIyMCxcbiAgICAgIDE0NCxcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXUzlIMlJWS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MDMwOTAyNDA6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJYLk4uTy5SXCIsXG4gICAgXCJsaWRcIjogXCIyMTM1MTYxNDU0MTQxNTQ6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVQ3dU1JSEVPZnFncmdHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRMkRzMldVS2N1RDlzTVdVeVJBU3hSTUI1SlNLZW4xZXh1RXN1dEVyOUFzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInRKWFJ0SGNza2ZyODNta2ovUkh4eFBXQVM4NTlXU21VaDBYcHVmR1dNOCthc2h3azJZazlmbFVFaWc2VC9BQkM3SmdxaGRkS1h5YTgyV0U2VC9vL0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm45NTBPM2xQbzY4UkpCYUdwU3ZVbm9QalZFUy9ZK0V2WENibCtEQnlkcDlJcC9VMTZPQlpGeEFOSXBpMXN3ekdBak11Zk1uemNjS0xwMW9WcEVQYmhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzAzMDkwMjQwOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MDk5NjkyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
