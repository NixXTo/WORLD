const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready" , function(){
    bot.user.setGame("WORLD , +help");
    console.log("Le bot à bien été connecté");
});

bot.login("8p6eoS7ilF6sDjx6EhLqRqBsg-wDy5Hf");