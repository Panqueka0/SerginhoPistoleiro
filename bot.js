const Discord = require('discord.js');
const serginho = new Discord.Client();

serginho.on('guildMemberAdd', member => {
   //member.guild.channels.get('414151682264662016').send(member.user.toString()+' Ei seu bunda mole');
   member.guild.channels.get('414151682264662016').send(`${member} Ei seu bunda mole`);
});

serginho.on('message', message => {
   if (message.author.bot)return;
   /*if (message.isMentioned(serginho.user)){
      
   }*/ 
   if (message.content === 'falou comigo?' || message.content === 'falou comigo ?') {
      message.reply('sim gracinha, quer entrar na minha gangue? (oSim/oNão)');
   }
   else if(message.content === 'oSim'){
      if(message.member.roles.has('429157255720730624')|| 
         message.member.roles.has('429163812512333826')|| 
         message.member.roles.has('429159637556920320')){

         message.reply('um momento amigo, o que levas neste casaco? um distintivo?');
      }
      else{
         message.reply('otimo, cagão.');
         message.member.addRole('429160036846272527');
         message.member.addRole('429156624645750784');
      }      
   }
   else if(message.content === 'oNão'){
      message.reply('acabei de me aborrecer. (oSim quando quiser entrar na gangue)');
   }
   else{
      message.reply('um momento amigo, quer entrar na minha gangue? (oSim/oNão)');
   }
});

serginho.login(process.env.BOT_TOKEN);
