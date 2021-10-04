/**
 * A ping pong bot, whenever you send "ping", it replies "pong"
 */

// Import the discord.js module
const Discord = require('discord.js');
const config = require('./config.json');
const prefix = config.prefix

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => 
{
  var b = 100; //its already a variable and it changes each time you send command to the bot
  var embed = new Discord.RichEmbed()
  
  .setAuthor("Dim Tree")
  .setColor(0xFA09B4)
  .setTitle("Current HP")
  
  .setDescription(`[${b}%]`)
  .setImage("https://bdocodex.com/items/ui_artwork/ic_04022.png")
  
  
  
  if (message.content.startsWith(`${prefix} dim`)) //its better to use .startsWith cuz the bot will send both replies in discord
  {
    message.channel.send({embed});
    console.log(b);
  }

  if (message.content.startsWith(`${prefix} dim hp`)) //condition is working
  {
    
    b = message.content.slice(prefix.length+7);
    message.channel.send({embed});
    console.log(b);
  }

 
  

});
