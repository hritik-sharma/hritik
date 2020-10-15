const{MessageEmbed,Message} = require ("discord.js")

module.exports ={
    name:"announce",
    category:"utility",

    run:async(client,msg,args) =>{
     let mesg = args.slice(1).join(" ");
     if (!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.reply({embed:{color:'RED',description:'you do not have the permissions to use this command'}})


     if(!mesg) return msg.reply({embed:{color:"RED",description:"please write something to announce \n Command usage: ```prefix announce  (#channel_name) (write_announcement)``` \n Remember: brackets are just for an instance"}})
    

    
let channel1 = msg.mentions.channels.first()

if(!channel1) return msg.reply({embed:{color:"RED",description:"please mention a channel to announce \n Command usage: ```prefix announce (#channel_name)  (write_announcement)```  \n Remember: brackets are just for an instance"}})

     var embed = new MessageEmbed()
 .setTitle('New Server Announcement')
.addField("Alert",mesg,true)
.setColor("PINK")
.setFooter(`Announcement by ${msg.author.tag}`)
     channel1.send(embed)

     msg.channel.send({embed:{color:"GREEN",description:`**Done!** \n Announcement has been sent to ${channel1} `}})
     .then(m=> m.delete({timeout:10000}));

    }
}