const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Online Spam");


client.on("ready", () => {
let channel =     client.channels.get("510536562153488394")
setInterval(function() {
channel.send(` Venom 5k Members  :heart: .
 Rezfix 500 Members :heart:
 Rezfix 500 Members :heart:
 Rezfix 500 Members :heart:
 Rezfix 500 Members :heart:
 Rezfix 500 Members :heart:
 Rezfix 500 Members :heart:
 Rezfix 500 Members :heart:
 Rezfix 500 Members :heart:
 Rezfix 500 Members :heart:
 Rezfix 500 Members :heart:
 Rezfix 500 Members :heart:
 Rezfix 500 Members :heart:.`);
}, 25)
})
 
 
client.login(process.env.BOT_TOKEN);
