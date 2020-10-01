const {MessageEmbed,Message} = require("discord.js");


module.exports ={
    name:"invite",
    category:"info",
    run:async(client,message,args) =>{

        const embed = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle('Fresh Force link')
        .addField("Invite link"," [Invite](https://discord.com/oauth2/authorize?client_id=750379372485279815&scope=bot&permissions=8) ")
        .addField("Server link"," [Support Server](https://discord.gg/WWBMqxf) ")
        message.channel.send(embed)
    }
}