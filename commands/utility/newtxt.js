const {MessageEmbed,Message} = require("discord.js");


module.exports ={
    name:"createchannel",
    category:"utility",
    run:async(client,msg,args) =>{

        if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.reply ({embed:{color:"RED",description:"You dont have the permission to use this command"}});
   
if (!args[0]) return msg.channel.send('Please include a name of the channel after the Command');

msg.guild.channels.create(args.slice(0).join(" "), {type:'text'}),
msg.channel.send({embed:{color:"#FFB6C1",description:'Channel has been created!'}});

            
    }
}
