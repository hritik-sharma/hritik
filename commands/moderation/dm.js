const{MessageEmbed,Message} = require ("discord.js")

module.exports ={
    name:"dm",
    category:"moderation",

    run:async(client,msg,args) =>{
     let mesg = args.join(" ");

     var user = msg.mentions.users.first();
          
     let guild = msg.guild.name
    
     var embed = new MessageEmbed()
.addField('Alert from server:', guild ,true)
.addField('Alert:',mesg, true)
.setColor('random')
.setFooter(`sender ${msg.author.tag}`)
     user.send(embed) 

            }
        }