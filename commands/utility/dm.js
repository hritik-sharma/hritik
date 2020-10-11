const{MessageEmbed,Message} = require ("discord.js")

module.exports ={
    name:"dm",
    category:"moderation",

    run:async(client,msg,args) =>{

        if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.reply({embed:{color:"RED",description: 'You dont have permission to use this command'}});
  
        var user = msg.mentions.users.first();
          
        if (!user) return msg.reply ({embed:{color :"RED", description:"Mention a user to dm  \n usage: prefix dm @freshforce hello there"}});
        
     let mesg = args.slice(1).join(" ");

     if(!mesg) return msg.reply({embed:{color:"RED",description:"please write something in dm  \n usage: prefix dm @freshforce hello there"}})

   

     let guild = msg.guild.name
    
     var embed = new MessageEmbed()
.addField('Alert from server:', guild ,true)
.addField('Alert:',mesg, true)
.setColor("GREEN")
.setFooter(`sender ${msg.author.tag}`)
     user.send(embed) 

            }
        }