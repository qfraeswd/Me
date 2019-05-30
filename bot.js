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

const adminprefix = "#";
const devs = ['564414567946387487','488574748629139459','523865295337553921']
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**__${argresult}__تـم تـغـيـر بـلانـيـق الـى:large_blue_circle:**`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**__${argresult}__تـم تـغـيـر اســم الـى**:pencil:`)
return message.reply("**لايـمـكـن تـغـيـر اسـم الان نـتـظـار سـاعـتـان**:stopwatch: ");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**__${argresult}__تــم تــغـيــر صــور الـى :camera_with_flash:**`);
      } else    
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**__${argresult}__ تــم تـغــيــر حــالـه الــى :red_circle:**`)
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
  shopc.send(`***${message.guild.name}***
✦▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✦▬▬▬▬▬▬▬▬▬▬✦

:tv: | ** video link ** : ${heroku}

:film_frames: | ** Video Description ** : ${desc}

:printer: | **Rights by ** : ${message.author}

✦▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✦▬▬▬▬▬▬▬▬▬▬✦
@everyone | @here`)
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
  shopc.send(`***${message.guild.name}***
✦▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✦▬▬▬▬▬▬▬▬▬▬✦

:tv: | ** video link ** : ${kalash}

:film_frames: | ** Video Description ** : ${desc}

:printer: | **Rights by ** : ${message.author}

✦▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✦▬▬▬▬▬▬▬▬▬▬✦
@everyone | @here`)
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
✦▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✦▬▬▬▬▬▬▬▬▬▬✦

:tv: | ** video link ** : ${HTML}

:film_frames: | ** Video Description ** : **${desc}**

:printer: | **Rights by ** : ${message.author}

✦▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✦▬▬▬▬▬▬▬▬▬▬✦
@everyone | @here`)
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
**</>~~__M__e __C__odes ©**

✦▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✦▬▬▬▬▬▬▬▬▬▬✦

\`\`\`css
${thisMessage}\`\`\`

✦▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✦▬▬▬▬▬▬▬▬▬▬✦

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
**</>~~__M__e __C__odes ©**

✦▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✦▬▬▬▬▬▬▬▬▬▬✦

\`\`\`css
${thisMessage}\`\`\`

✦▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✦▬▬▬▬▬▬▬▬▬▬✦

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
**Me Codes© ⬇**

✦▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✦▬▬▬▬▬▬▬▬▬▬✦

\`\`\`css
${thisMessage}\`\`\`

✦▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✦▬▬▬▬▬▬▬▬▬▬✦

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
**Me Codes© ⬇**

✦▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✦▬▬▬▬▬▬▬▬▬▬✦

\`\`\`css
${thisMessage}\`\`\`

✦▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✦▬▬▬▬▬▬▬▬▬▬✦

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
**</>~~__M__e __C__odes ©**

✦▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✦▬▬▬▬▬▬▬▬▬▬✦

\`\`\`css
${thisMessage}\`\`\`

✦▬▬▬▬▬▬▬▬▬▬✦ஜ۩۞۩ஜ✦▬▬▬▬▬▬▬▬▬▬✦

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
    .setImage('https://2.top4top.net/p_1225y7yza1.gif' , 'https://tenor.com/view/welcome-cat-gif-5320723')
var channel =member.guild.channels.find('name', '۞-welcome')
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
   
    var channel =member.guild.channels.find('name', '۞-welcome')
    if (!channel) return;
    channel.send({embed : embed});
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

    client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  if(message.content.startsWith("!قبول")) {
    let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
    if(!acRoom) return message.reply("$!setac من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
    if(acRoom) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');
 
    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
}
});

client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith("!رفض")) {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
  if(!acRoom) return message.reply("!!setac من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");
 
  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});

          client.on('message', message=>{
            if(message.content.startsWith("!room2")) {
         if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("القبول-الرفض", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("**✅ تم انشاء روم القبول والرفض بنجاح**")
            }
})

client.login(process.env.BOT_TOKEN);
