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


client.login(process.env.BOT_TOKEN);
