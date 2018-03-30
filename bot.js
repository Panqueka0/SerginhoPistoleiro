const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    message.channel.send('Ei seus bunda mole');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
