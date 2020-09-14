const {MessageEmbed} = require("discord.js")

module.exports ={
    name:"lock",
    category:"moderation",
    description:"locks the @everyone role",
    usage:"<channel> lock",
    aliases:["lockchannel","lock"],

    run:async(client,message,args) =>{
        if(!client.lockit) client.lockit =[]
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send({embed:{color:"5169F2",description:"❌ You dont't have permission to use this command"}})
        message.channel.createOverwrite(message.guild.id,{
            SEND_MESSAGES:false

        })
        let embed = new MessageEmbed()
        .setTitle("Channel Locked 🔒")
        .setDescription(`${message.author.tag} has locked the channel`)
        .setColor("5169F2")
        message.channel.send(embed)
    }
}