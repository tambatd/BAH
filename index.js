const Discord = require("discord.js");
const config = require("./config.json");
var CronJob = require('cron').CronJob;
const fs = require('fs');
const client = new Discord.Client();


client.on('ready', () => {
  const channel = client.channels.cache.get("734942504927100932");
  channel.join().then(connection => {
    console.log("Successfully connected.");
    connection.play('audio.mp3', { volume: 0.5 });

  }).catch(e => {
    console.error(e);
  });
  });
  
  client.on('message', msg => {
    if (msg.content === "olivia going bah") {
      msg.reply("BAAAAAAAAAAAAAAH ");
      //connection.play('audio.mp3', { volume: 0.5 });

    }
  });
  

console.log("idk if it started lol")
client.login(config.BOT_TOKEN);