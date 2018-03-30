const Discord = require('discord.js');
const serginho = new Discord.Client();

serginho.on('guildMemberAdd', member => {
   //serginho.users.get("name", member.user.username).id;
   member.guild.channels.get('400751507152175107').send(member.user.toString()+' Ei seu bunda mole');
   
});

serginho.on('message', message => {
    if (message.content === 'falou comigo?' || message.content === 'falou comigo ?') {
        message.reply('sim gracinha, quer entrar na minha gangue? (oSim/oNão)');
    }
    else if(message.content === 'oSim'){
        message.reply('otimo, cagão.');
        message.member.addRole('429160036846272527');
    }
    else if(message.content === 'oNão'){
        message.reply('um momento amigo, acabei de me aborrecer. (oSim quando quiser entrar na gangue)');
    }
});

// THIS  MUST  BE  THIS  WAY
serginho.login(process.env.BOT_TOKEN);
