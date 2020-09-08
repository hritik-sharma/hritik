
const {MessageEmbed} = require("discord.js")

module.exports ={
    name:"removerole",
    category:"moderation",


    run:async(client,message,args)=>{
        let user = message.mentions.members.first()
        if(!user) return message.channel.send({embed:{color:"RED",description:"Mention a user for that role."}})

        let role = message.mentions.roles.first()
        if(!role) return message.channel.send({embed:{color:"RED",description:"Mention a role for that user."}})

        message.channel.send({embed:{color:"GREEN",description:`${role} has been taken from ${user} bhery bhery sed`}})
        user.roles.remove(role)
        
    }
}