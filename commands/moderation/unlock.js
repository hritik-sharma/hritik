const {MessageEmbed} = require("discord.js")

module.exports ={
    name:"unlock",
    category:"mod",
    description:"unlocks the @everyone role",
    usage:"<channel> lock",
    aliases:["unlockchannel","unlock"],

    run:async(client,message,args) =>{
        if(!client.lockit) client.lockit =[]
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send({embed:{color:"5169F2",description:"❌ You dont't have permission to use this command"}})
        message.channel.createOverwrite(message.guild.id,{
            SEND_MESSAGES:true

        })
        let embed = new MessageEmbed()
        .setTitle("Channel has been Unlocked 🔓")
        .setDescription(`${message.author.tag} has unlocked the channel`)
        .setColor("5169F2")
        message.channel.send(embed)
    }
}