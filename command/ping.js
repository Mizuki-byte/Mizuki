module.export = {
    name:"ping",
    desciption: "Mizuki's first commend",
    execute(message){
        message.channel.send("Pong!");
    }
}