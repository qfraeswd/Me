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

const adminprefix = "%";
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

client.login(process.env.BOT_TOKEN);
