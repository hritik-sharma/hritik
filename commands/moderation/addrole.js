const {MessageEmbed} = require("discord.js")

module.exports ={
    name:"addrole",
    category:"moderation",


    run:async(client,message,args)=>{
        if(!message.member.hasPermission('BAN_MEMBERS')) 
        return message.reply({embed:{color:"RED",description:"❌You dont't have permission to use this command"}})
        .then(m=> m.delete({timeout:10000}));


        let user = message.mentions.members.first()
        if(!user) return message.channel.send({embed:{color:"RED",description:"Mention a user for that role."}})
        .then(m=> m.delete({timeout:10000}));

        let role = message.mentions.roles.first()
        if(!role) return message.channel.send({embed:{color:"RED",description:"Mention a role for that user."}})
        .then(m=> m.delete({timeout:10000}));

        message.channel.send({embed:{color:"GREEN",description:`${role} has been given to ${user}`}})
        user.roles.add(role)
        
    }
}