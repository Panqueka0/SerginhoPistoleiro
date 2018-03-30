const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    //console.log(`(${message.server.name} / ${message.channel.name}) ${message.author.name}: ${message.content}`);
    setTimeout(msg.reply('o que carregas neste caixão?'),60000);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
