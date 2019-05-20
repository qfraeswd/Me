const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();
const giphy = require('giphy-api')();
const fs = require("fs");
const prefix = "#";
const devs = ['564414567946387487' , '523865295337553921' , '488574748629139459'];
const adminprefix = "#";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`star Bot- Script By : AboRoh `);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers ' Script By : AboRoh ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`#help-me | </>~M̲e Ȼodes  ©`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
 
});

const developers = ['564414567946387487' , '523865295337553921' , '488574748629139459'];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();  s
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/zero");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`تغيير الاسم إلى ..**${argresult}** `)
} else
  if (message.content.startsWith(adminprefix + 'setprefix')) {
  client.user.setPrefix(argresult).then
      message.channel.send(`تغيير البادئة ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`تغيير الصورة الرمزية إلى :**${argresult}** `);
}
});

client.on('message', rw => {
  if (rw.content.startsWith('#vb')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
let men = rw.mentions.users.first()
let mas = rw.author
if(!men) return rw.channel.send('``');
rw.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
لا يمكنك الانضمام إلى غرفة الصوت
راية : <@${rw.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
محظور
راية : <@${rw.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(10000)})
    }
})
 
client.on('message', rw => {
  if (rw.content.startsWith('#uvb')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
 let men = rw.mentions.users.first()
 let mas = rw.author
 if(!men) return rw.channel.send('`MANTION THE MEMBER `');
 rw.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
مرحبا بعودتك
العودة مع : <@${rw.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
الذهاب للحصول على صوت الآن
مع : <@${rw.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(15000)})
    }
}) 

var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;
 
client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if (command == "autoc") {
      if(!message.channel.guild) return message.reply(`**this ~~command~~ __for servers only__**`);
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry you can't do this");
      if(!args[0] || args[1]) return message.channel.send(`\`\`\`${prefix}autoC <role-name>\`\`\``);
      var role = message.guild.roles.find( role => { return role.name == args[0] });
      if(!role) return message.channel.send(`no role with name ${definedRoleName} found, make sure you entered correct name`);
      if(definedReactionRole != null  || !stopReacord) return message.channel.send("another reaction role request is running");
      message.channel.send(`now go and add reaction in the message you want for role ${role.name}`);
      definedReactionRole = role;
      stopReacord = false;
    }    
})

client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});

client.on('messageReactionAdd', (reaction, user) => {
    if(user.id == client.user.id) return;
    if(!stopReacord) {
      var done = false;
      reactionRoles[reaction.message.id] = { role: definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
      stopReacord =  true;
      definedReactionRole = null;
      reaction.message.react(reaction.emoji.name)
      .catch(err => {done = true; reaction.message.channel.send(`sorry i can't use this emoji but the reaction role done! anyone react will get the role!`)})
      if(done) reaction.remove(user);
    } else {
      var request = reactionRoles[reaction.message.id];
      if(!request) return;
      if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
      reaction.message.guild.members.get(user.id).addRole(request.role);
    }
})

client.on('messageReactionRemove', (reaction, user) => {
  if(user.id == client.user.id) return;
  if(!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if(!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
});
 
   client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":shield: ***⦁⦓ كوادت جافا سكربت متوفر الان ⦔⦁*** :shield:",' ‎ ')
  .addField("✽-  **#help-js-source  -->  『 قسم السورس الأساسي 』**",' ‎ ')
   .addField("✽-  **#help-js-admin   -->  『 قسم الأكواد الإدارية 』**",' ‎ ')
     .addField("✽-  **#help-js-general -->  『 قسم الأكواد العامة 』**",' ‎ ')
	   .addField("✽-  **#help-js-welcome -->  『 قسم أكواد الترحيب 』**",' ‎ ')
	 	   .addField("✽-  **#help-js-help    -->  『 قسم أكواد الهلب 』**",' ‎ ')
            .addField("✽-  **#help-js-bc      -->  『 قسم أكواد البرودكاست 』**",' ‎ ')
                 .addField("✽-  **#help-js-games   -->  『 قسم اكواد الالعاب 』**",' ‎ ')
				 .addField("✽-  **#help-js-all    -->  『 قسم أكواد منوعة 』**",' ‎ ')
				    .addField("✽-  **#help-js-music     -->  『 قسم أكواد الميوزك 』**",' ‎ ')
				    .addField("✽-  **#help-js-islam    -->  『 قسم أكواد الاسلامية 』**",' ‎ ')
				      .addField("✽-  **#help-js-own     -->  『 قسم كواد صحاب بوتات 』**",' ‎ ')
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});
  
     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-source") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":wrench: ***⦁⦓ كوادت السورس متوفر الان ⦔⦁*** :wrench:",' ‎ ')
  .addField("✽- **#help-js-source-1  -->  『 السورس الأساسي 』**",' ‎ ')
   .addField("✽- **#help-js-source-2  -->  『 السورس الأساسي مع الستريمنق ومعلومات البوت 』**",' ‎ ')
     .addField("✽- **#help-js-source-3  -->  『 السورس الأساسي مع الستريمنق ومعلومات البوت 』**",' ‎ ')
	   .addField("✽- **#help-js-source-4  -->  『 السورس الأساسي مع الستريمنق ومعلومات البوت 』**",' ‎ ')
	   .addField("✽- **#help-js-source-5  -->  『 كود السورس الأساسي المطور مع معلومات البوت 』**",' ‎ ')
	     .addField("✽- **#help-js-source-6  -->  『 لكود السورس مع الواتشيتق 』**",' ‎ ')
	 
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});
   
  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود السورس الأساسي**
 https://pastebin.com/xGu8E5jA
`);

    }
});  
  
  client.on("message", message => {

            if (message.content.startsWith(prefix + "bc4")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
   
    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-2") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **السورس الأساسي مع الستريمنق ومعلومات البوت**
 https://pastebin.com/UQUxsqHU
`);

    }
});  
  
      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-3") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **السورس الأساسي مع الواتشينق**
 https://pastebin.com/RSnhYTA7
`);

    }
});  
  
        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-4") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **السورس الاساسي مع البنق**
 https://pastebin.com/dk9h4m8y
`);

    }
});  

        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-5") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ السورس الاساسي مع معلومات البوت المطور و الستريم**
 
https://pastebin.com/3NNnbb2A
`);

    }
});

        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-6") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ السورس الاساسي مع الواتشنق**
 
https://pastebin.com/za7YYbzC
`);

    }
});
   
       client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-admin") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

 .addField(":tools: *** كوادت الادارة متوفر الان *** :tools:",' ‎ ')
 .addField("✽- **#help-js-admin-1 -->  『 كود الباند 』**",' ‎ ')
 .addField("✽- **#help-js-admin-2 -->  『 كود الكيك 』**",' ‎ ')
 .addField("✽- **#help-js-admin-3 -->  『 كود مسح الشات مع عدد وشبيه بالبروبوت 』**",' ‎ ')
 .addField("✽- **#help-js-admin-4 -->  『 كود فتح وتقفيل الشات 』**",' ‎ ')
 .addField("✽- **#help-js-admin-5 -->  『  كود رابط يرسله خاص ل 100شخص لمدة 24 ساعه 』**",' ‎ ')
 .addField("✽- **#help-js-admin-6 -->  『  كود لانشاء شات كتابي 』**",' ‎ ')	  
 .addField("✽- **#help-js-admin-7 -->  『  كود لانشاء روم صوتي 』**",' ‎ ')
 .addField("✽- **#help-js-admin-8 -->  『  invite : كود دعوه البوت مثال 』**",' ‎ ')	  
 .addField("✽- **#help-js-admin-9 -->  『 كود الاوتو رول التفعيل داخل السيرفر 』**",' ‎ ')
 .addField("✽- **#help-js-admin-10 -->  『 كود مانع بوتات النشر 』**",' ‎ ')
 .addField("✽- **#help-js-admin-11 -->  『 كود يمسح الي ينشر في سيرفرك و ياخد ميوت 』**",' ‎ ')
 .addField("✽- **#help-js-admin-12 -->  『  كود يمنع نشر الروابط 』**",' ‎ ')
 .addField("✽- **#help-js-admin-13 -->  『 كود تفعيل برياكشن 』**",' ‎ ')
 .addField("✽- **#help-js-admin-14 -->  『 كود تفعيل بامر 』**",' ‎ ')
 .addField("✽- **#help-js-admin-15 -->  『 كود الوران 』**",' ‎ ')
 .addField("✽- **#help-js-admin-16 -->  『 كود بان صوتي و فكه 』**",' ‎ ')
 .addField("✽- **#help-js-admin-17 -->  『 كود كيك صوتي 』**",' ‎ ')
 .addField("✽- **#help-js-admin-18 -->  『 كود ديفن و ان ديفن 』**",' ‎ ')
 .addField("✽- **#help-js-admin-19 -->  『 كود منع السب 』**",' ‎ ')
 .addField("✽- **#help-js-admin-20 -->  『 كواد رد تلقائى 』**",' ‎ ')  
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});
   
          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الباند**
 https://pastebin.com/YZAXKYUB
`);

    }
});  
  
            client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-2") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الكيك**
 https://pastebin.com/0cNVLm1a
`);

    }
});  
  
              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-3") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود مسح الشات براكشن**
 https://pastebin.com/QERKkTtk
`);

    }
});  
  
                client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-4") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود فتح وتقفيل الشات**
 https://pastebin.com/gb4me9bS
`);

    }
});  

                  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-5") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ ** كود رابط يرسله خاص ل 100شخص لمدة 24 ساعه**
 https://pastebin.com/Xe5kzVUw
`);

    }
});
  
         client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-6") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ ** كود لانشاء شات كتابي**
 https://pastebin.com/ChtbaGu2
`);

    }
});
  
           client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-7") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ ** كود لانشاء روم صوتي**
 https://pastebin.com/Y2SWEE6N
`);

    }
});

          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-8") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **invite : كود دعوه البوت مثال **
 https://pastebin.com/hP9VQpFR
`);

    }
});  

          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-9") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الاوتو رول التفعيل داخل السيرفر **
 https://pastebin.com/7tVEa317
`);

    }
});  

          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-10") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود مانع بوتات النشر**
 
https://pastebin.com/v55PG1ME`);

    }
});

          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-11") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود منع نشر السيرفرات و اخد ميوت في سيرفرك**
 
https://pastebin.com/zb6961gx`);

    }
});

          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-12") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود منع نشر الروابط بكل انواعها **
 
https://pastebin.com/kT7YaR4h`);

    }
});

          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-13") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود تفعيل برياكشن**
 
https://pastebin.com/XjexhdZt`);

    }
});

          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-14") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود تفعيل بامر**
 
https://pastebin.com/dFETbJgd`);

    }
});

          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-15") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود الوران**
 
https://pastebin.com/nX7w8Dat`);

    }
});

          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-16") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود باند صوتي و فكه **
 
https://paste.drhack.net/?c18e8d7c93e5376d#ZRhVGt19jDw1HD+Ut1wpqVCSwc+TYSHjBzHpXfnzL2U=`);

    }
});

          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-17") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود كيك فويس**
 
https://pastebin.com/aHnXjqHZ
`);

    }
});

          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-18") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود ديفن و ان ديفن**
 
https://pastebin.com/LKPre3vR
`);

    }
});

          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-19") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖  منع السب**
https://pastebin.com/msfxU6th
`);

    }
});

          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-20") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖  رد تلقائى **

https://pastebin.com/jws17TS9`);

    }
});

         client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-general") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

 .addField(":busts_in_silhouette: ***⦁⦓ كوادت العامه متوفر الان ⦔⦁*** :busts_in_silhouette:",' ‎ ')
 .addField("**✽- #help-js-general-1   -->  『 كود البنق 』**",' ‎ ')
 .addField("**✽- #help-js-general-2   -->  『 كود لم تمنشن لى البوت يرد عليك بى help 』**",' ‎ ')
 .addField("**✽- #help-js-general-3   -->  『 كود التصويت مثل برو بوت 』**",' ‎ ')	  
 .addField("**✽- #help-js-general-4   -->  『 كود معلومات السيرفر 』**",' ‎ ')
 .addField("**✽- #help-js-general-5   -->  『 كود المعلومات الشخصية 』**",' ‎ ')
 .addField("**✽- #help-js-general-6   -->  『 كودم معلومات البوت مثل اس بوت 』**",' ‎ ')	  
 .addField("**✽- #help-js-general-7   -->  『 كود id 』**",' ‎ ')
 .addField("**✽- #help-js-general-8   -->  『 كود rep 』**",' ‎ ')	  
 .addField("**✽- #help-js-general-9   -->  『 كود عمل روم فويس اونلاين 』**",' ‎ ')	 
 .addField("**✽- #help-js-general-10  -->  『 كود افتار مثل برو بوت 』**",' ‎ ')
 .addField("**✽- #help-js-general-11  -->  『 كودالوان مثل برو بوت 』**",' ‎ ')	
 .addField("**✽- #help-js-general-12  -->  『 كودمسح الشات بعدد وبدون عدد 』**",' ‎ ')
 .addField("**✽- #help-js-general-13  -->  『 كود ايموجي ليست 』**",' ‎ ')
 .addField("**✽- #help-js-general-14  -->  『 كود اخفاء جميع رومات السيرفر 』**",' ‎ ')
 .addField("**✽- #help-js-general-15  -->  『 كود توب مثل برو بوت .. تكست و فويس 』**",' ‎ ')
 .addField("**✽- #help-js-general-16  -->  『 كود ترسل رساله الي خاص الشخص بالمنشن 』**",' ‎ ')
 .addField("**✽- #help-js-general-17  -->  『 كلام فى الحب 』**",' ‎ ')
 .addField("**✽- #help-js-general-18  -->  『 عطاء رتب تلقائى عند دخول سيرفر 』**",' ‎ ') 
 .setFooter('||</>~Toxic Codes ©||')

   message.channel.send({embed});


    }
});
  
                  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود البنق**
 https://pastebin.com/BSqk2X3F
`);

    }
});
 
                        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-2") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود لم تنمشن لى البوت يرد عليك بى help**
 https://pastebin.com/ekhNsxq1
`);

    }
});
 
                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-3") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود التصويتات مثل برو بوت**
https://pastebin.com/6zU9sKNt
`);

    }
});

                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-4") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود معلومات السيرفر**
 https://pastebin.com/Z082PXt3
`);

    }
});

                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-5") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود المعلومات الشخصية**
 https://pastebin.com/ZMhAPtSB
`);

    }
});

                client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-6") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود معلومات البوت**
 https://pastebin.com/W8ENr77E
`);

    }
});
 
                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-7") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **id كود**
 https://pastebin.com/vWi7L4mf
`);

    }
});

                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-8") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود rep **
 https://pastebin.com/RL44Ew2d
`);

    }
});

                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-9") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود عمل روم فويس اونلاين **
https://pastebin.com/wdPLgb8X
`);

    }
});

                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-10") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود افتار مثل برو بوت **
https://pastebin.com/KPPXMc7M
`);

    }
});

                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-11") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الوان مثل برو بوت **
https://pastebin.com/mmaanFNp
`);

    }
});

                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-12") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود مسح بعدد او بدون عدد مثل البروبوت **
https://pastebin.com/x2z7LiCq
`);

    }
});

                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-13") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`❖ كود ايموجي ليست 
 
https://paste.drhack.net/?63cc4d7a6085f97a#joEDyFrGCY5UrLcf9phxGKbmh7nXy6VLl65RMmGrKo8=
`);

    }
});

                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-14") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود اخفاء الرومات  **
 
https://paste.drhack.net/?8f14faa890f8be71#iI/ouDO/r25Bn8jcFeAyPuD7yVRdc7y4VTTJCDjVzlo=`);

    }
});

                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-15") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود توب..**
 
https://pastebin.com/pyhFSyTp
`);

    }
});

                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-16") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود رسالة بالبوت الي الشخص **
 
https://paste.drhack.net/?9b163e0068c7df77#Ta7/gdrknNqIIUMdy1FfMlu5l89O8Hw5DUs+XLvjZao=`);

    }
});

                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-17") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كواد كلام فى الحب**
 
https://pastebin.com/vEHfEspJ`);

    }
});

                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-general-18") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كواد عطاء رتب تلقائى عند دخول سيرفر**
 
https://pastebin.com/DdUZ73Sv`);

    }
});

           client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-welcome") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":wave: ***⦁⦓ كوادت الترحيب متوفر الان ⦔⦁*** :wave:",' ‎ ')
  .addField("**✽- #help-js-welcome-1 -->  『 كود ترحيب مع ذكر رقم العضو 』**",' ‎ ')
   .addField("**✽- #help-js-welcome-2 -->  『 كود الترحيب مع صورة 』**",' ‎ ')
     .addField("**✽- #help-js-welcome-3 -->  『 كود مغادرة العضو 』**",' ‎ ')
	       .addField("**✽- #help-js-welcome-4 -->  『 كود تم دعوته بواسطة 』**",' ‎ ')
		   .addField("**✽- #help-js-welcome-5 -->  『 كود ترحيب بامبد و مغادره كذلك 』**",' ‎ ')
		   .addField("**✽- #help-js-welcome-6 -->  『 كود ترحيب بصوره + invited by 』**",' ‎ ')	
           .addField("**✽- #help-js-welcome-7 -->  『 كود ترحيب معريب 』**",' ‎ ')			   
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});

    }
});
  
                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود ترحيب بصورة**
 https://paste.drhack.net/?ded81e2b02cab246#Oej+XdoRpbGnlTET2iH2zKdVCn+WFNCUatLLtOU1urs=
`);

    }
});

                        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-2") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود الترحيب في الخاص مع رقم العضو**
 https://paste.drhack.net/?854e74d128b66da8#3menzqbk4bSRPItx7czUQhc1iuwjQRZTyaEVF6ZUktE=
`);

    }
});

                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-3") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖**كود مغادرة العضو**
 https://pastebin.com/8Da43txR
`);

    }
});
 
                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-4") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود تم دعوته بواسطة**
 https://pastebin.com/ihCR8nhW
`);

    }
});

                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-5") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود ترحيب بامبد و مغادره كذلك**
 
https://paste.drhack.net/?5a8702a99c8f4bf7#zDpKp0qo1p+vRY7ADqTDMHLv0i1dNZzhSpUJRZtT4f4=`);

    }
});

                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-6") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود ترحيب بصوره + invited by**
 
https://cdn.discordapp.com/attachments/471700655484960779/478716284461252618/wlc_Alpha.js`);

    }
});

                      client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-welcome-7") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود ترحيب معريب **
 
https://pastebin.com/KSj3PnYn`);

    }
});

             client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-help") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":notepad_spiral: ***⦁⦓ كوادت الهلب متوفر الان ⦔⦁*** :notepad_spiral:",' ‎ ')
  .addField("**✽- #help-js-help-1    -->  『 كود هلب مع امبد يرسل بنفس الشات 』**",' ‎ ')
   .addField("**✽- #help-js-help-2    -->  『 كود هلب مزخرف بدون امبد ويرسل عالخاص 』**",' ‎ ')
   .addField("**✽- #help-js-help-3    -->  『 كود بامبد علي الخاص 』**",' ‎ ')
     .addField("**✽- #help-js-help-4    -->  『 كود هلب برياكشن 』**",' ‎ ')
     .addField("**✽- #help-js-help-5    -->  『 كود هلب 3 صفحات برياكشن 』**",' ‎ ')
       .addField("**✽- #help-js-help-6    -->  『 كود هلب متعدد 』**",' ‎ ')
       .addField("**✽- #help-js-help-7    -->  『 كود هلب متعدد اللغات 』**",' ‎ ')		   
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});

    }
});

                        client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-help-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود هلب مع امبد يرسل بالخاص**
 https://pastebin.com/ZC0FHb0c
`);

    }
});

                          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-help-2") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود هلب بدون امبد ويرسل عالخاص**
 https://pastebin.com/MuCMUQYc
`);

    }
});

                          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-help-3") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود بامبد علي الخاص**
 
https://paste.drhack.net/?caea7250bba4d5a7#r1Q/n737pTghoSZW1/wP9vxjHmSxnrJeOxcI+uNmRoQ=`);

    }
});

                          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-help-4") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود هلب برياكشن**
 
https://paste.drhack.net/?31588f34cb2fde64#1G86AJ7k3jPKBqnH+zNTQz6SFxsmbvrYqxUl6wTr9MM=
`);

    }
});

                          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-help-5") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود هلب 3 صفحات برياكشن**
 
https://paste.drhack.net/?b77d446fe4473080#3JbE+IcKaao+ZEjUfQdUllcR7UM2jqta7cxAJqg+vvI=`);

    }
});

                          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-help-6") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود هلب متعدد**
 
https://paste.drhack.net/?77502995aa94f0f9#PSRupXvvGbhD4PA8jfog05OBtAJLGTUHnFWcuXG1Sbk=`);

    }
});

                          client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-help-7") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود هلب متعدد اللغات**
 
https://pastebin.com/epR5iGMr`);

    }
});

 
               client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-bc") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":incoming_envelope: ***⦁⦓ قسم أكواد البرودكاست ⦔⦁*** :incoming_envelope:",' ‎ ')
  .addField("**#help-js-bc-1    -->  『 برودكاست + للكل + مطور 』**",' ‎ ')
  .addField("**#help-js-bc-2    -->  『 برودكاست + للكل + غير مطور 』**",' ‎ ')
  .addField("**#help-js-bc-3    -->  『 برودكاست + للأونلاين + مع منشن + غير مطور 』**",' ‎ ')
  .addField("**#help-js-bc-4    -->  『 برودكاست + للكل + مع منشن + غير مطور 』**",' ‎ ')
  .addField("**#help-js-bc-5    -->  『 برودكاست للاصدقائك 』**",' ‎ ')
  .addField("**#help-js-bc-6    -->  『 برودكاست لجميع سيرفرات البوت 』**",' ‎ ')
  .addField("**#help-js-bc-7    -->  『 برودكاست  لشخص مع المنشن 』**",' ‎ ')
  .addField("**#help-js-bc-8    -->  『 برودكاست  برياكشن اذا بامبد او بدون امبد 』**",' ‎ ')
  .addField("**#help-js-bc-9    -->  『 برودكاست  رساله بدون اسم السيرفر او اسم الشخص رساله بس  』**",' ‎ ')	   
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});

    }
});
  
                              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **برودكاست + للكل **
 https://pastebin.com/n2SyjdwH
`);

    }
});

                            client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-2") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **برودكاست + للكل + غير مطور**
 https://pastebin.com/n2SyjdwH
`);

    }
});

                            client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-3") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ ** برودكاست + للأونلاين + مع منشن + غير مطور**
 https://pastebin.com/n2SyjdwH
`);

    }
});
  
                              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-4") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **برودكاست + للكل + مع منشن + غير مطور**
 https://pastebin.com/n2SyjdwH
`);

    }
});

                              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-5") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ برودكاست  للاصدقائك**
 
https://paste.drhack.net/?360e16099f92d0f0#nM7zJvzWUjotWeTxwD797XOoazOgzGi/JDUaiPfV8Aw=`);

    }
});

                              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-6") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ برودكاست لكل سيرفرات البوت**
 
https://paste.drhack.net/?58ea6ccb780a28f1#VaAod330tirKDFm+vYk7+uH+tZZcBFMFjg6BIsJzfOs=`);

    }
});

                              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-7") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ برودكاست لشخص الي تحدده**
 
https://paste.drhack.net/?1653aec4ea8cde5b#lroUi14udI32AJA2cC8ERw6CAyRVw0nzPCmni8fkmSA=`);

    }
});

                              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-8") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ برودكاست  برياكشن**
 
https://paste.drhack.net/?fa9c880cae949ba5#phhdnd72QMo0QxniSK18FLupmLAPuxmTy9rAD80/fNk=`);

    }
});

                              client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-bc-9") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ برودكاست  كرساله بدون اي شئ ..**
 
https://paste.drhack.net/?b1eeffb0b9da5cf8#zbB6EJ3Rr1P8ZI8XDAjphvkXPHVHN1OkiZY809szGs0=`);

    }
});

client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)

      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())

      msg.channel.send({embed:embed});
    }
  });
	
      client.on('message', message => {
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`D.JPEI`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       
});
		  		  	
   client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help2") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":robot: ***⦁⦓ اوامر بوت عامه ⦔⦁*** :robot:",' ‎ ')
  .addField("**✽- #id   -->  『 اي دي 』**",' ‎ ')
  .addField("**✽- #server   -->  『 معلومات عن السيرفر 』**",' ‎ ')

 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});

var guilds = {};

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "• Me » Members");
   member.addRole (role);
  
})


client.on('message', message => {
  if (message.author.bot) return;
   if (message.content  === prefix + "help-js-games") {
        const embed = new Discord.RichEmbed()


 .setColor('RANDOM')
.setTimestamp()

.addField(":video_game: ***⦁⦓ قسم اكواد الالعاب ⦔⦁*** :video_game:",' ‎ ')
.addField("**✽- #help-js-games-1   -->  『 لعبة اسئلة فورت نايت 』**",' ‎ ')
 .addField("**✽- #help-js-games-2   -->  『 لعبة صراحة 』**",' ‎ ')
     .addField("**✽- #help-js-games-3   -->  『 لعبة كت تويت 』**",' ‎ ')
       .addField("**✽- #help-js-games-4   -->  『 لعبة لو خيروك 』**",' ‎ ')
       .addField("**✽- #help-js-games-5   -->  『 لعبة مريم 』**",' ‎ ')
       .addField("**✽- #help-js-games-6   -->  『 لعبة عقاب 』**",' ‎ ')
       .addField("**✽- #help-js-games-7   -->  『 لعبة فكك تحتاج جيسون 』**",' ‎ ')
       .addField("**✽- #help-js-games-8   -->  『 لعبة قرعة 』**",' ‎ ')
       .addField("**✽- #help-js-games-9   -->  『 لعبة اكس او 』**",' ‎ ')
       .addField("**✽- #help-js-games-10  -->  『 لعبة اسرع كتابة 』**",' ‎ ')
       .addField("**✽- #help-js-games-11  -->  『 كود صراحه 』**",' ‎ ')
        .addField("**✽- #help-js-games-12  -->  『 كود قرعه 』**",' ‎ ')
        .addField("**✽- #help-js-games-13  -->  『 كود كت تويت 』**",' ‎ ')
		  .addField("**✽- #help-js-games-14  -->  『 لعبة عواصم 』**",' ‎ ')
		  .addField("**✽- #help-js-games-15  -->  『 لعبة pupg 』**",' ‎ ')
		    .addField("**✽- #help-js-games-16  -->  『 كود احصائيات فورت نايت 』**",' ‎ ')
			.addField("**✽- #help-js-games-17  -->  『 لعبة انمي 』**",' ‎ ')
			 .addField("**✽- #help-js-games-18  -->  『 لعبة زاحف 』**",' ‎ ') 

   .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});

   client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-games-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 
 ❖ **كود اسئلة لعبة فورت نايت**
 https://pastebin.com/ycDVzyup
`);

    }
});  

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-2") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
❖ **كود لعبة صراحة**
https://pastebin.com/sgtxADHu
`);

  }
}); 

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-3") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
❖ **كود لعبة كت تويت**
https://paste.drhack.net/?ea5251c741026c3d#B/AW3E7mlppg8obzbnEIGgbjSc6PRFHnDqBTeOk+svw=
`);

  }
}); 

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-4") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
❖ **كود لعبة لو خيروك**
https://paste.drhack.net/?eae21f05292515ca#Q0wYzgc1EWSI9aPafHGGTpKqLN9yypU02d/5BSnmp/M=
`);

  }
}); 

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-5") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
❖ **كود لعبة مريم**
https://pastebin.com/ELJPi6Ef
`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-6") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
❖ **كود لعبة مريم **
https://pastebin.com/kuEXN67Z
`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-7") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
❖ **كود لعبة عقاب**
https://pastebin.com/ELJPi6Ef
`);

  }
}); 

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-8") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
❖ **كود لعبة فكك**
https://pastebin.com/7xpL4KB4
`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-9") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
❖ **كود قرعة**
https://pastebin.com/Rh2BLmZC
`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-10") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
❖ **كود لعبة اكس او**
https://pastebin.com/ADDKWuse
`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-11") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
❖ **كود لعبة اسرع كتابة**
https://pastebin.com/PfvYF1ak
`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-12") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
❖ **كود صراحه **
 https://pastebin.com/fak2SQsm
`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-13") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
❖ **كود قرعه **
 https://pastebin.com/eZHv8NPC
`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-14") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
❖ **كود كت تويت  **
 https://pastebin.com/fak2SQsm
`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-15") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
**❖ لعبة عواصم **

https://paste.drhack.net/?dcdfaa38082f7e3a#ddg/xtgrrZVBTNBXe5GwtcN3DmxJsr1opjegUxWcsiw=`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-16") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
**❖ كود PUPG**

https://pastebin.com/C5bn2cLB
`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-17") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
**❖ كود احصائيات فورت نايت**

https://cdn.discordapp.com/attachments/471700655484960779/487694336507641866/DC_Fortnite_Bot-master.zip`);

  }
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help-js-games-18") {
   message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
          

   


message.author.sendMessage(`
**❖ لعبة انمي**

https://paste.drhack.net/?c38afd5d1ca54058#J32LW9oR48aFeD1KewZemrh+MSbsCvqQLq7UhB4MJkk=`);

  }
});

                    client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-games-19") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كواد لعبه الزحف**
 
https://pastebin.com/cvmWr1sk`);

    }
});

     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-all") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":chains: ***⦁⦓ كوادت منوعه متوفر الان ⦔⦁*** :chains:",' ‎ ')
  .addField("✽- **#help-js-all-1  -->  『 كود بروفايل بخلفيات 』**",' ‎ ')
   .addField("✽- **#help-js-all-2  -->  『 كود لفل اب بصوره 』**",' ‎ ')
     .addField("✽- **#help-js-all-3  -->  『 كود اكس بي كتابه 』**",' ‎ ')
	   .addField("✽- **#help-js-all-4  -->  『 كود بروفايل خرافي 』**",' ‎ ')
		    .addField("✽- **#help-js-all-5  -->  『 كود الرسم كانفاس 』**",' ‎ ')
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-all-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`**❖ كود بروفايل بخلفيات**
 
**__الـرابـط__** : https://cdn.discordapp.com/attachments/471700655484960779/487044156787785728/PROFILEALPHA_CODES.zip`);

    }
});  

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-all-2") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`**❖ كود لفل اب بصوره **
 
رابط الكود : https://pastebin.com/RGNMYJUY
رابط الصورة : https://media.discordapp.net/attachments/471700655484960779/489865535257968641/levelup.png?width=501&height=282`);

    }
});  

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-all-3") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`**❖ كود اكس بي كتابه**
 
**__الـرابـط__** : https://pastebin.com/uA70st8p`);

    }
});  

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-all-4") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`**❖ كود بروفايل خرافي **
**
 الـرابـط : https://cdn.discordapp.com/attachments/471700655484960779/489865520645144596/Profile_ALPHACODES.rar
**
 `);

    }
});  

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-all-5") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`**❖ كود الرسم كانفاس **
 
 **__الـرابـط__** : https://pastebin.com/QzY31H51`);

    }
});

     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-music") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":headphones: ***⦁⦓ كوادت اغانى متوفر الان ⦔⦁*** :headphones:",' ‎ ')
  .addField("✽- **#help-js-music-1  -->  『 كود الميوزك بالارقام 』**",' ‎ ')
   .addField("✽- **#help-js-music-2  -->  『 كود ميوزك جافا 』**",' ‎ ')
     .addField("✽- **#help-js-music-3  -->  『 كود الميوزك المتداول في الجيت هب 』**",' ‎ ')
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-music-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود الميوزك بالارقام**
 
http://www.mediafire.com/file/8x1x94kj44jkpdh`);

    }
}); 

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-music-2") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود ميوزك جافا**
 
https://up.top4top.net/downloadf-1136n9e5v1-rar.html`);

    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-music-3") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود ميوزك المتداول في الجت هب **
 
https://pastebin.com/Vq9MgpNV`);

    }
}); 

     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-islam") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":kaaba: ***⦁⦓ كوادت القرن الكريم متوفر الان ⦔⦁*** :kaaba:",' ‎ ')
  .addField("✽- **#help-js-islam-1  -->  『 كود الاستماع للقران 』**",' ‎ ')
   .addField("✽- **#help-js-islam-2  -->  『 كود الاذكار 』**",' ‎ ')
     .addField("✽- **#help-js-islam-3  -->  『 كود صفحات القران 』**",' ‎ ')
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-islam-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود القران الكريم (25 سورة ) ـ**
 
https://pastebin.com/7LeLCVdX
`);

    }
}); 

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-islam-2") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖  كود الاذكار **
 
https://paste.drhack.net/?06433c9a371e2d03#NBfj4zLtZSWYDW5vHJYx1O/vi/ncgVOFWhOQQu9HRZQ=`);

    }
}); 

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-islam-3") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
 **❖ كود صفحات القران الكريم**
 
https://paste.drhack.net/?d9cf349ee7f8139e#NtOlraKgmiOuriWwjXCHCDSWDqSGFD8NCNjFV0iN+kc=`);

    }
}); 

     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-js-own") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":crown:***⦁⦓ كوادت صحاب بوتات متوفر الان ⦔⦁*** :crown:",' ‎ ')
  .addField("✽- **#help-js-own-1  -->  『 كود ست برفكس 』**",' ‎ ')
   .addField("✽- **#help-js-own-2  -->  『 كود اذا جت البوت رسالة بالخاص تنرسل لك 』**",' ‎ ')
     .addField("✽- **#help-js-own-3  -->  『  كود التحكم في حالات البوت 』**",' ‎ ')
	 .addField("✽- **#help-js-own-4  -->  『  كود اذا احد كلمة البوت يرسل لك في الخاص 』**",' ‎ ')
	  .addField("✽- **#help-js-own-5  -->  『  كود يرسل راسل لي صحاب البوت 』**",' ‎ ')
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-own-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(`
**❖ كود ست برفكس  **

https://paste.drhack.net/?ceeee9a1ac9b9dd9#aBlIXXYyKpeOobJpWYPFw+2fYjW5Mc7F4TN1wCM62SY=
 `);

    }
}); 

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-own-2") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖ كود اذا جت البوت رسالة بالخاص تنرسل لك **
 
https://pastebin.com/anQs8Cyp`);

    }
}); 

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-own-3") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
**❖ كود التحكم في حالات البوت الصورة - الاسم - البلاينق**

https://paste.drhack.net/?cbeeea47173a0c8e#P5FD/7emBdu6Ms7rummc2ONTVL81EkeF4bAxTVkEuuo=`);

    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-own-4") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
**❖كود اذا احد كلمة البوت يرسل لك في الخاص **

https://pastebin.com/wTw5JbNG`);

    }
}); 

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-own-5") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
**❖كواد رسال الى صاحب بوت **

https://pastebin.com/e6v3GYys`);

    }
}); 

     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-me") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("***⦁⦓ قـسـم كـوادت </>~~Me Codes ©*** ⦔⦁",' ‎ ')
  .addField("✽- **#help-js  -->  『 قائمة أكواد الجافا سكربت 』**",' ‎ ')
   .addField("✽- **#help-py  -->  『 قائمة أكواد البايثون 』**",' ‎ ')
    .addField("✽- **#help-html  -->  『 قائمه اكواد اتش دى ام ال 』**",' ‎ ')
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});

     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-py") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":space_invader: ***⦁⦓ قسم كوادت بايثون ⦔⦁*** :space_invader:",' ‎ ')
  .addField("✽- **#help-py-source  -->  『 قسم السورس الأساسي 』**",' ‎ ')
   .addField("✽- **#help-py-admin  -->  『  قسم الأكواد الإدارية 』**",' ‎ ')
     .addField("** قـريـب بـاذن الله الـجـديـد",' ‎ ')
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});

     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-py-source") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField("***⦁⦓ قسم كواد الباثيون السورس ⦔⦁***",' ‎ ')
  .addField("✽- **#help-py-source-1  -->  『 السورس الأساسي + البيرفكس 』**",' ‎ ')
   .addField("✽- **#help-py-source-2  -->  『 السورس الاساسي من غير بير فكس 』**",' ‎ ')
     .addField("** قــريــب بـاذن الله **",' ‎ ')
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-py-source-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖ السور الاساسي مع البيرفكس**
 
 https://pastebin.com/3EnXmuik `);

    }
}); 

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-py-source-2") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖ السورس الاساسي من غير بيرفكس**
 
 https://pastebin.com/tG8yr5fL
 `);

    }
}); 

     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-py-admin") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":satellite: ***⦁⦓ قسم كوادت باثيون قسم الادارة ⦔⦁*** :satellite:",'')
  .addField("✽- **#help-py-admin-1  -->  『 كود اذا دخل البوت لسيرفر يعطيك معلومات عنه + امبد للبايثونوبس 』**",' ‎ ')
   .addField("✽- **#help-py-admin-2  -->  『 كود يغيرلك النك نيم حقك فالسيرفر 』**",' ‎ ')
     .addField("✽- **#help-py-admin-3  -->  『 كود يجيبلك الأيموجيز حقت السيرفر 』**",' ‎ ')	 
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-py-admin-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
**❖ كود اذا دخل البوت لسيرفر يعطيك معلومات عنه + امبد للبايثونوبس**

 https://pastebin.com/mPzgeBt6
 `);

    }
}); 

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-py-admin-2") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖ كود يغيرلك النك نيم حقك فالسيرفر**
 https://pastebin.com/Sb67xRLc `);

    }
}); 

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-py-admin-3") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖ كود يجيبلك الأيموجيز حقت السيرفر**
 
 https://pastebin.com/LarMXgLH `);

    }
}); 

     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-html") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":globe_with_meridians: ***⦁⦓ قـسـم كـوادت مواقع ⦔⦁*** :globe_with_meridians:",' ‎ ')
  .addField("✽- **#help-html-source  -->  『 قسم كواد السورس 』**",' ‎ ')
  .addField("✽- **#help-html-games  -->  『 قسم كواد العاب 』**",' ‎ ')
  .addField("✽- **#help-html-general  -->  『 قسم كواد العامه 』**",' ‎ ')
  .addField("✽- **#help-html-admin  -->  『 قسم كواد الادارة 』**",' ‎ ')
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});

     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-html-source") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":tools: ***⦁⦓ قسم كواد السورس ⦔⦁*** :tools:",' ‎ ')
  .addField("✽- **#help-html-source-1  -->  『 كـواد السورس اساسى 』**",' ‎ ')
  .addField("** قـريـب نـشـاء اكـثـر **",' ‎ ')
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-source-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖ كود السورس الاساسي **
 
https://pastebin.com/dJM98Lgt`);

    }
}); 


     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-html-general") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":two_men_holding_hands: ***⦁⦓ قسم الكواد العامه ⦔⦁*** :two_men_holding_hands:",' ‎ ')
  .addField("✽- **#help-html-general-1  -->  『 كود ساعة رقمية 』**",' ‎ ')
  .addField("✽- **#help-html-general-2  -->  『 كود قايس وزن 』**",' ‎ ')
  .addField("✽- **#help-html-general-3  -->  『 الة حاسبة 』**",' ‎ ')
  .addField("✽- **#help-html-general-4  -->  『 معرفة موقعك 』**",' ‎ ')
  .addField("✽- **#help-html-general-5  -->  『 كواد الواقت 』**",' ‎ ')
  .addField("** قــريــب نـشـاءاالله **",' ‎ ')
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-general-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖كود ساعة رقمية **
 
https://pastebin.com/6VDeJnvB`);

    }
});


  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-general-2") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖كود قايس وزن **
 
https://pastebin.com/Wfbd84Jk`);

    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-general-3") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖الة حاسبة  **
 
https://pastebin.com/i9BdMUZA`);

    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-general-4") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖معرفة موقعك  **
 
https://pastebin.com/sH2MgiF6`);

    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-general-5") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖كواد الواقت **
 
https://pastebin.com/FqwW9QWu`);

    }
});

     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-html-games") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":joystick: ***⦁⦓ قسم كواد العاب ⦔⦁*** :joystick:",' ‎ ')
  .addField("✽- **#help-html-games-1  -->  『 كود لعبة tic tac toe 』**",' ‎ ')
  .addField("✽- **#help-html-games-2  -->  『 لعبة ثعبان 』**",' ‎ ')
  .addField("✽- **#help-html-games-3  -->  『 المرابعات المتحركه 』**",' ‎ ')
  .addField("** قـريـب نـشـاء اكـثـر **",' ‎ ')
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-games-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖ كود لعبة tic tac toe **
 
https://pastebin.com/E42M0eFW`);

    }
}); 

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-games-2") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖لعبة ثعبان **
 
https://pastebin.com/cYfsen0e`);

    }
}); 

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-games-3") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖المرابعات المتحركه **
 
https://hasteb.in/usabaxiq.xml`);

    }
}); 

     client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help-html-games") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":gear: ***⦁⦓ قـسـم كـواد الادارة ⦔⦁*** :gear:",' ‎ ')
  .addField("✽- **#help-html-admin-1  -->  『 كود كتابة على مجسم 』**",' ‎ ')
  .addField("✽- **#help-html-admin-2  -->  『 كودادراج فديو لصفحة عرض 』**",' ‎ ')
  .addField("✽- **#help-html-admin-3  -->  『 كود ادراج صوت 』**",' ‎ ')
  .addField("✽- **#help-html-admin-4  -->  『 تحرك ايقونات الموقع 』**:",' ‎ ')
  .addField("✽- **#help-html-admin-5  -->  『 تحرك كلام فى مواقع 』**",' ‎ ')
  .addField("✽- **#help-html-admin-6  -->  『 كود يكتب الكلام حرف حرف』**",' ‎ ')
  .addField("✽- **#help-html-admin-7  -->  『  اضافه ايقونه لموقعك 』**",' ‎ ')
  .addField("✽- **#help-html-admin-8  -->  『  كود انميشن على الكانفاس 』**",' ‎ ')
  .addField("** قـريـب نـشـاالله **",' ‎ ')

  
 .setFooter('||</>~Toxic Codes ©||')


   message.channel.send({embed});


    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-admin-1") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖كتابة على مجسم **
 
https://pastebin.com/ujtnZBbP`);

    }
}); 

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-admin-2") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖كودادراج فديو لصفحة عرض **
 
https://pastebin.com/4mQsRJTz`);

    }
}); 

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-admin-3") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖ادراج صوت **
 
https://pastebin.com/gqFR1bx7`);

    }
}); 

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-admin-4") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖تحرك ايقونات الموقع **
 
https://pastebin.com/dPamL9W7`);

    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-admin-5") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖ كود يخلي ذي تتحرك**
 
رابط كواد : https://pastebin.com/mB7pCAqE
رابط الصور : ||https://cdn.discordapp.com/attachments/576886368165167154/579827093785804824/unknown.png|| `);

    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-admin-6") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖ كود يكتب الكلام حرف حرف**
 
 https://pastebin.com/7ybVRMSZ`);

    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-admin-7") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖اضافه ايقونه لموقعك**
 
https://pastebin.com/niJrmP1e`);

    }
});

  client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-html-admin-8") {
		 message.channel.send('**تـم ارسـال الـكـود فـى الـخـاص | :ok_hand:**');
            
	
		 


 message.author.sendMessage(` 
 **❖كود انميشن على الكانفاس**
 
https://pastebin.com/WMaPg9Fq`);

    }
});



client.on("message",async message => {
if(message.content === 'heroku'){
let staff = message.guild.member(message.author).roles.find('name' ,"• Me » heroku");
      if(!staff) return message.reply(`** | لا يـوجـد مـعـاك رتـب __• Me » heroku__ .. :x:**`)
var shopc = message.guild.channels.find("name","۞-explained-heroku")
  if(!shopc) return message.reply(":x： | **لا يـوجـد شـات نـشـره فـيـدوهـات ..**")
    let heroku = '';
      let fillter = m => m.author.id === message.author.id
      
     

      await message.channel.send(":projector: | رجـاء وضـع رابـط فـيـديـو يـوتـيـوب .. :dvd:").then(e => {
           message.channel.awaitMessages(fillter, { time: 60000, max: 1                                    
})
     .then(co => {
       heroku = co.first().content;
        co.first().delete();
     
let desc = '';
        
e.edit(":scroll: | **اكـتـب وصـف فـيـديـو** .. :crayon:").then(e => {
  message.channel.awaitMessages(fillter, { time: 60000, max: 1 })

     .then(co => {
       desc = co.first().content;
        co.first().delete();
e.edit(" | **تـم نـشـره فـى شـات** .. :ok_hand:").then(e => {
  shopc.send(`${message.guild.name}
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱

:tv: | ** video link ** : ${heroku}

:film_frames: | ** Video Description ** : ${desc}

:printer: | **Rights by ** : ${message.author}
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱
||@everyone | @here||`)
  })
})
  })
})
  })
           
      
  
     
  
      
           
}
});

client.on("message",async message => {
if(message.content === 'kalash'){
let staff = message.guild.member(message.author).roles.find('name' ,"• Me » kalash");
      if(!staff) return message.reply(`** | لا يـوجـد مـعـاك رتـب __• Me » kalash__ .. :x:**`)
var shopc = message.guild.channels.find("name","۞-explained-kalash")
  if(!shopc) return message.reply(":x： | **لا يـوجـد شـات نـشـره فـيـدوهـات ..**")
    let kalash = '';
      let fillter = m => m.author.id === message.author.id
      
     

      await message.channel.send(":projector: | رجـاء وضـع رابـط فـيـديـو يـوتـيـوب .. :dvd:").then(e => {
           message.channel.awaitMessages(fillter, { time: 60000, max: 1                                    
})
     .then(co => {
       kalash = co.first().content;
        co.first().delete();
     
let desc = '';
        
e.edit(":scroll: | **اكـتـب وصـف فـيـديـو** .. :crayon:").then(e => {
  message.channel.awaitMessages(fillter, { time: 60000, max: 1 })

     .then(co => {
       desc = co.first().content;
        co.first().delete();
e.edit(" | **تـم نـشـره فـى شـات** .. :ok_hand:").then(e => {
  shopc.send(`**${message.guild.name}**
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱
:tv: | ** video link ** : ${kalash}

:film_frames: | ** Video Description ** : ${desc}

:printer: | **Rights by ** : ${message.author}
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱
||@everyone | @here||`)
  })
})
  })
})
  })
           
      
  
     
  
      
           
}
});

client.on("message",async message => {
if(message.content === 'HTML'){
let staff = message.guild.member(message.author).roles.find('name' ,"• Me » HTML");
      if(!staff) return message.reply(`** | لا يـوجـد مـعـاك رتـب __• Me » HTML__ .. :x:**`)
var shopc = message.guild.channels.find("name","۞-explained-html")
  if(!shopc) return message.reply(":x： | **لا يـوجـد شـات نـشـره فـيـدوهـات ..**")
    let HTML = '';
      let fillter = m => m.author.id === message.author.id
      
     

      await message.channel.send(":projector: | **رجـاء وضـع رابـط فـيـديـو يـوتـيـوب** .. :dvd:").then(e => {
           message.channel.awaitMessages(fillter, { time: 60000, max: 1                                    
})
     .then(co => {
       HTML = co.first().content;
        co.first().delete();
     
let desc = '';
        
e.edit(":scroll: | **اكـتـب وصـف فـيـديـو** .. :crayon:").then(e => {
  message.channel.awaitMessages(fillter, { time: 60000, max: 1 })

     .then(co => {
       desc = co.first().content;
        co.first().delete();
e.edit("** تـم نـشـره فـى شـات فـيـديـو ** :white_check_mark:").then(e => {
  shopc.send(`***${message.guild.name}***
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱
:tv: | ** video link ** : ${HTML}
:film_frames: | ** Video Description ** : **${desc}**
:printer: | **Rights by ** : ${message.author}
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱
||@everyone | @here||`)
  })
})
  })
})
  })
           
      
  
     
  
      
           
}
});

client.on('message',async message => {
 
  if(message.content.startsWith(prefix + "py")) {

if(!message.channel.guild) return message.reply(' ');

  let rank = message.guild.member(message.author).roles.find('name', '• Me » Py Support');

  if (!rank) return message.channel.send('🛑 **| يجب ان تملك __• Me » Py Support__ الى استخدام هذا امر**');

  let jscodes = message.guild.channels.find(`name`, "۞-discord-py");

  if(!jscodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");

    let filter = m => m.author.id === message.author.id;

    let thisMessage;

    let thisFalse;

    message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {



    message.channel.awaitMessages(filter, {

      max: 1,

      time: 90000,

      errors: ['time']

    })

    .then(collected => {

      collected.first().delete();

      thisMessage = collected.first().content;

      let boi;

      msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {



          message.channel.awaitMessages(filter, {

            max: 1,

            time: 90000,

            errors: ['time']

          })

          .then(collected => {

            collected.first().delete();

            boi = collected.first().content;

            let boi2;

            msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {



              message.channel.awaitMessages(filter, {

                max: 1,

                time: 90000,

                errors: ['time']

              })

              .then(collected => {

                collected.first().delete();

              boi2 = collected.first().content;

      msg.edit('🛡 **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');

 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        if(collected.first().content === 'لا') {

          msg.delete();

          message.delete();

          thisFalse = false;

        }

        if(collected.first().content === 'نعم') {

          if(thisFalse === false) return;

          msg.edit('🕊 **| Done ✅, تم بنجاح نشر كودك في روم الاكواد**');

          collected.first().delete();

          jscodes.send(`||@everyone | @here||
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱
**</>~~__M__e __C__odes ©**
\`\`\`css
${thisMessage}\`\`\`
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱
:bookmark_tabs: | **Describe**     : ${boi}
:wrench: | **Made by **    : ${boi2}
:incoming_envelope: | **Shared By ** : ${message.author}`);

        }

      }

  );

});

    });

  }

    );

  });

}

);

    })}});

client.on('message',async message => {
 
  if(message.content.startsWith(prefix + "css")) {

if(!message.channel.guild) return message.reply(' ');

  let rank = message.guild.member(message.author).roles.find('name', '• Me » CSS Support');

  if (!rank) return message.channel.send('🛑 **| يجب ان تملك رتب __• Me » CSS Support__ الى ستخدام هذا امر.**');

  let jscodes = message.guild.channels.find(`name`, "۞-code-css");

  if(!jscodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");

    let filter = m => m.author.id === message.author.id;

    let thisMessage;

    let thisFalse;

    message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {



    message.channel.awaitMessages(filter, {

      max: 1,

      time: 90000,

      errors: ['time']

    })

    .then(collected => {

      collected.first().delete();

      thisMessage = collected.first().content;

      let boi;

      msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {



          message.channel.awaitMessages(filter, {

            max: 1,

            time: 90000,

            errors: ['time']

          })

          .then(collected => {

            collected.first().delete();

            boi = collected.first().content;

            let boi2;

            msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {



              message.channel.awaitMessages(filter, {

                max: 1,

                time: 90000,

                errors: ['time']

              })

              .then(collected => {

                collected.first().delete();

              boi2 = collected.first().content;

      msg.edit('🛡 **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');

 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        if(collected.first().content === 'لا') {

          msg.delete();

          message.delete();

          thisFalse = false;

        }

        if(collected.first().content === 'نعم') {

          if(thisFalse === false) return;

          msg.edit('🕊 **| Done ✅, تم بنجاح نشر كودك في روم الاكواد**');

          collected.first().delete();

          jscodes.send(`||@everyone | @here||
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱
**</>~~__M__e __C__odes ©**
\`\`\`css
${thisMessage}\`\`\`
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱
:bookmark_tabs: | **Describe**     : ${boi}
:wrench: | **Made by **    : ${boi2}
:incoming_envelope: | **Shared By ** : ${message.author}`);

        }

      }

  );

});

    });

  }

    );

  });

}

);

    })}});
	
client.on('message',async message => {
 
  if(message.content.startsWith(prefix + "js")) {

if(!message.channel.guild) return message.reply(' ');

  let rank = message.guild.member(message.author).roles.find('name', '• Me » Support', '• Me » JS Support');

  if (!rank) return message.channel.send('🛑 **| يجب ان تملك رتب __• Me » JS Support__ الى ستخدام هذا امر.**');

  let jscodes = message.guild.channels.find(`name`, "۞-discord-js");

  if(!jscodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");

    let filter = m => m.author.id === message.author.id;

    let thisMessage;

    let thisFalse;

    message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {



    message.channel.awaitMessages(filter, {

      max: 1,

      time: 90000,

      errors: ['time']

    })

    .then(collected => {

      collected.first().delete();

      thisMessage = collected.first().content;

      let boi;

      msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {



          message.channel.awaitMessages(filter, {

            max: 1,

            time: 90000,

            errors: ['time']

          })

          .then(collected => {

            collected.first().delete();

            boi = collected.first().content;

            let boi2;

            msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {



              message.channel.awaitMessages(filter, {

                max: 1,

                time: 90000,

                errors: ['time']

              })

              .then(collected => {

                collected.first().delete();

              boi2 = collected.first().content;

      msg.edit('🛡 **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');

 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        if(collected.first().content === 'لا') {

          msg.delete();

          message.delete();

          thisFalse = false;

        }

        if(collected.first().content === 'نعم') {

          if(thisFalse === false) return;

          msg.edit('🕊 **| Done ✅, تم بنجاح نشر كودك في روم الاكواد**');

          collected.first().delete();

          jscodes.send(`||@everyone | @here||
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱
**Me Codes© ⬇**
\`\`\`css
${thisMessage}\`\`\`
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱
:bookmark_tabs: | **Describe**     : ${boi}
:wrench: | **Made by **    : ${boi2}
:incoming_envelope: | **Shared By **  : ${message.author}`);

        }

      }

  );

});

    });

  }

    );

  });

}

);

    })}});

client.on('message',async message => {
 
  if(message.content.startsWith(prefix + "html")) {

if(!message.channel.guild) return message.reply(' ');

  let rank = message.guild.member(message.author).roles.find('name', '• Me » Support', '• Me » HTML Support');

  if (!rank) return message.channel.send('🛑 **| يجب ان تملك رتب __• Me » HTML Support__ الى ستخدام هذا امر**');

  let jscodes = message.guild.channels.find(`name`, "۞-discord-html");

  if(!jscodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");

    let filter = m => m.author.id === message.author.id;

    let thisMessage;

    let thisFalse;

    message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {



    message.channel.awaitMessages(filter, {

      max: 1,

      time: 90000,

      errors: ['time']

    })

    .then(collected => {

      collected.first().delete();

      thisMessage = collected.first().content;

      let boi;

      msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {



          message.channel.awaitMessages(filter, {

            max: 1,

            time: 90000,

            errors: ['time']

          })

          .then(collected => {

            collected.first().delete();

            boi = collected.first().content;

            let boi2;

            msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {



              message.channel.awaitMessages(filter, {

                max: 1,

                time: 90000,

                errors: ['time']

              })

              .then(collected => {

                collected.first().delete();

              boi2 = collected.first().content;

      msg.edit('🛡 **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');

 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        if(collected.first().content === 'لا') {

          msg.delete();

          message.delete();

          thisFalse = false;

        }

        if(collected.first().content === 'نعم') {

          if(thisFalse === false) return;

          msg.edit('🕊 **| Done ✅, تم بنجاح نشر كودك في روم الاكواد**');

          collected.first().delete();

          jscodes.send(`||@everyone | @here||
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱
**Me Codes© ⬇**
\`\`\`css
${thisMessage}\`\`\`
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱
:bookmark_tabs: | **Describe**     :  ${boi}
:wrench: | **Made by **    : ${boi2}
:incoming_envelope: | **Shared By **  : ${message.author}`);

        }

      }

  );

});

    });

  }

    );

  });

}

);

    })}});

client.on('message',async message => {
 
  if(message.content.startsWith(prefix + "php")) {

if(!message.channel.guild) return message.reply(' ');

  let rank = message.guild.member(message.author).roles.find('name', '• Me » PhP Support');

  if (!rank) return message.channel.send('🛑 **| يجب ان تملك رتب __• Me » PhP Support__ الاستخدام هذا امر.**');

  let jscodes = message.guild.channels.find(`name`, "۞-code-php");

  if(!jscodes) return message.channel.send("❌لم اجد الروم الخاص بنشر الاكواد");

    let filter = m => m.author.id === message.author.id;

    let thisMessage;

    let thisFalse;

    message.channel.send('📝 **| من فضلك اكتب الكود الأن... ✏ **').then(msg => {



    message.channel.awaitMessages(filter, {

      max: 1,

      time: 90000,

      errors: ['time']

    })

    .then(collected => {

      collected.first().delete();

      thisMessage = collected.first().content;

      let boi;

      msg.edit('📜 **| من فضلك اكتب وصف الكود الأن... ✏ **').then(msg => {



          message.channel.awaitMessages(filter, {

            max: 1,

            time: 90000,

            errors: ['time']

          })

          .then(collected => {

            collected.first().delete();

            boi = collected.first().content;

            let boi2;

            msg.edit('🤵 **| من فضلك اكتب من صنع هذا الكود الأن... ✏ **').then(msg => {



              message.channel.awaitMessages(filter, {

                max: 1,

                time: 90000,

                errors: ['time']

              })

              .then(collected => {

                collected.first().delete();

              boi2 = collected.first().content;

      msg.edit('🛡 **| [ هل انت متأكد من نشر الكود؟ | [ نعم ] او [ لا**');

 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

        max: 1,

        time: 90000,

        errors: ['time']

      })

      .then(collected => {

        if(collected.first().content === 'لا') {

          msg.delete();

          message.delete();

          thisFalse = false;

        }

        if(collected.first().content === 'نعم') {

          if(thisFalse === false) return;

          msg.edit('🕊 **| Done ✅, تم بنجاح نشر كودك في روم الاكواد**');

          collected.first().delete();

          jscodes.send(`||@everyone | @here||
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱
</>~~__M__e __C__odes ©
\`\`\`css
${thisMessage}\`\`\`
⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱⧰⧱
:bookmark_tabs: | **Describe**     : ${boi}
:wrench: | **Made by **    : ${boi2}
:incoming_envelope: | **Shared By ** : ${message.author}`);

        }

      }

  );

});

    });

  }

    );

  });

}

);

    })}});

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الـنـا***" ,member.user.username )
    .setDescription('**# ``-`` __W__elcome __T__ø  __M__e __C__odes :champagne_glass:**')
    .setColor('RANDOM')
    .setImage('https://2.top4top.net/p_1225y7yza1.gif')
var channel =member.guild.channels.find('name', '✽-welcome')
if (!channel) return;
channel.send({embed : embed});
});

    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
        .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`نــتــمــنــآ لــكــم آســتــمـــتــآع`, 'https://6.top4top.net/p_12250i82f1.jpg')
   
    var channel =member.guild.channels.find('name', '✽-welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })

client.on("message", message => {
 if (message.content === `${prefix}`) {
  const embed = new Discord.RichEmbed()
      .setColor("#66ff66")
      .setDescription(`***▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
${prefix}js     = #۞-discord-js
${prefix}py     = #۞-discord-py
${prefix}html   = #۞-discord-html
${prefix}css    = #۞-code-css
${prefix}php    = #۞-code-php
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 اوامـر بـدون { # }
▬▬▬▬▬▬▬▬▬▬▬
heroku = # ۞-explained-heroku
kalash = # ۞-explained-kalash
HTML   = #۞-explained-html
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬***

||**__</>~Me Codes ©__**||`)
   message.channel.sendEmbed(embed)
    
   }
   });

 client.on("message", message => {
 if (message.content === `${prefix}Me`) {
  const embed = new Discord.RichEmbed()
      .setColor("#ff3300")
      .setDescription(`***▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
كـواد تـغـيـر حالات بـوت
▬▬▬▬▬▬▬▬▬▬▬▬▬
${prefix}setavatar = تغير صور
${prefix}setname   = تغير الاسم
${prefix}setprefix = تغير البادئه
${prefix}sets      = تغير حاله 
${prefix}setl      = تغير حاله
${prefix}setw      = تغير حاله
${prefix}leave     = تغير حاله
${prefix}setg      = تغير حاله
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
مسوالين بوت
▬▬▬▬▬▬▬▬▬▬▬▬
1-• Me » ➹⎛ トゥルキパシャ ⎞♔❥
2-• Me » Reem .🍷
3-• Me » D̷o̷̶Ḿa̶ |̷ B̷O̷Y̷
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

||**__</>~Me Codes ©__**||`)
   message.channel.sendEmbed(embed)
    
   }
   });

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**# ``-`` __W__elcome __T__ø  __M__e __C__odes :champagne_glass:**
**__اســم عــضـو__** :bust_in_silhouette:: ${member}  
**__انــت عــضــو رقــم__** :medal:: ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on("message", (message) => {
                        if (message.channel.type === "dm") {
                    if (message.author.id === client.user.id) return;
                    let yumz = new Discord.RichEmbed()
                                .setTimestamp()
                                .setTitle("***⦁⦓ رسال جديد فى خاص بوت ⦔⦁*** :mailbox_with_mail:")
                                .addField(`:bust_in_silhouette: | **تم رسال بواسطه** :`, `<@${message.author.id}>`)
                                .setColor("RANDOM")
                                .setThumbnail(message.author.displayAvatarURL)
                                .addField(`:incoming_envelope: | ** رسـالـة ** : `, `\n\n\`\`\`${message.content}\`\`\``)
                                .setFooter(`** تم تفعل خصائص رسائل الك ** </>~M̲e Ȼodes  ©`)
                            client.users.get("564414567946387487").send(yumz)
                        }
            });
			
client.on("message", (message) => {
                        if (message.channel.type === "dm") {
                    if (message.author.id === client.user.id) return;
                    let yumz = new Discord.RichEmbed()
                                .setTimestamp()
                                .setTitle("***⦁⦓ رسال جديد فى خاص بوت ⦔⦁*** :mailbox_with_mail:")
                                .addField(`:bust_in_silhouette: | **تم رسال بواسطه** : `, `<@${message.author.id}>`)
                                .setColor("RANDOM")
                                .setThumbnail(message.author.displayAvatarURL)
                                .addField(`:incoming_envelope: | ** رسـالـة ** : `, `\n\n\`\`\`${message.content}\`\`\``)
                                .setFooter(`** تم تفعل خصائص رسائل الك ** </>~M̲e Ȼodes  ©`)
                            client.users.get("488574748629139459").send(yumz)
                        }
            });

client.login(process.env.BOT_TOKEN);
