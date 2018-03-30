const Discord = require('discord.js');
const serginho = new Discord.Client();

serginho.on('guildMemberAdd', member => {
   member.send('Ei seu bunda mole!');
});

serginho.on('message', message => {
    if (message.content === 'falou comigo?' || message.content === 'falou comigo ?') {
        message.reply('sim gracinha, quer entrar na minha gangue? (oSim/oNão)');
    }
    else if(message.content === 'oSim'){
        message.reply('otimo, cagão.');
        const usuario = message.member;
        usuario.addRole('Hired Gun');
    }
    else if(message.content === 'oNão'){
        message.reply('um momento amigo. se quiser entrar depois escreva oIn');
    }
});

// THIS  MUST  BE  THIS  WAY
serginho.login(process.env.BOT_TOKEN);
