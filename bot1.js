/**
 * A ping pong bot, whenever you send "ping", it replies "pong"
 */

// Import the discord.js module

export const TextInput = styled.input`
  ${({ theme }) => theme.typography.p.m}
  size: "20";
  display: flex;
  flex: 1;
  width: 100%;
  display: flex;
  flex: 1;
  margin-right: 20px;
  background: rgba(255, 255, 255, 0.7);
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  &:focus {
    background: white;
    outline: none;
  }
  border: none;
  padding: 0px 16px;
`;

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

  else if (message.content.startsWith(`${prefix} dim hp`)) //condition is working
  {
    
    b = message.content.slice(prefix.length+7);
    message.channel.send({embed});
    console.log(b);
  }
  
  else if (message.content.startsWith(`${prefix} dim mp`)) //condition is working
  {
    
    b = message.content.slice(prefix.length+7);
    message.channel.send({embed});
    console.log(b);
  }
 
  

});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(config.token);
