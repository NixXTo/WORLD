const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready" , function(){
    bot.user.setGame("WORLD , +help");
    console.log("Le bot à bien été connecté");
});

bot.login(process.env.TOKEN);
