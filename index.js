const Discord = require("discord.js");
const client = new Discord.Client();

const{ prefix, token } = require("./config.json") 

client.login(token);

client.on("ready", () => {
    console.log("Ready");
});
 
client.on("message",message => {
    if (message.author.bot) return;
    
    const args =message.content.split(/ +/);
    const commandName = args.shift().toLowerCase()

    switch(commandName) {
        case prefix + "ping" :
            message.channel.send("Pong!");
            break;
        case prefix + "hello" :
                message.channel.send("Hello! Master");
                break;
    
    }
})