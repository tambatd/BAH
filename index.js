const Discord = require("discord.js");
require('dotenv').config()
//const config = require("./config.json");
var CronJob = require('cron').CronJob;
const fs = require('fs');
const client = new Discord.Client();

/*
client.on('ready', () => {
  const channel = client.channels.cache.get("734942504927100932");
  channel.join().then(connection => {
    console.log("Successfully connected.");
    client.on('message', msg => {
      if (msg.content === "Olivia going bah") {
        msg.reply("BAAAAAAAAAAAAAAH");
        connection.play('olivia_bah.mp3', { volume: 0.5 });
      }
      else if (msg.content === "Mike going nonono") {
        msg.reply("NONONONONONOOOOO");
        connection.play('mike_no.mp3', { volume: 0.5 });
      }
      else if (msg.content === "BAH BOT stop;") {
        msg.reply("Service Stop");

        connection.destroy()
        //client.destroy();
      } 
    });
  }).catch(e => {
    console.error(e);
  });
  });
  */

  client.on('message', msg => {
    if (msg.content === "BAH BOT start;") {
      const channel = client.channels.cache.get("734942504927100932");
      channel.join().then(connection => {
        console.log("Successfully connected.");
        client.on('message', msg => {
          if (msg.content === "Olivia going bah") {
            msg.reply("BAAAAAAAAAAAAAAH");
            connection.play('olivia_bah.mp3', { volume: 0.5 });
          }
          else if (msg.content === "Mike going nonono") {
            msg.reply("NONONONONONOOOOO");
            connection.play('mike_no.mp3', { volume: 0.5 });
          }
          else if (msg.content === "Evelyn going wah") {
            msg.reply("WAH");
            connection.play('evelyn_wah.mp3', { volume: 0.5 });
          } 
          else if (msg.content === "BAH BOT stop;") {
            msg.reply("Service Stop");
            channel.leave();
          } 
          //evelyn_wah
        });
      }).catch(e => {
        console.error(e);
      });
      msg.reply("connected to vc");
    } 
  });
 

client.login(process.env.TOKEN);
console.log("idk if it started lol")
