const {MessageEmbed,Message} = require("discord.js");

module.exports ={
    name:"mute",
    category:"moderation",

 run:async(client,msg,message,args)=>{


if (!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.reply({embed:{color:'RED',description:'you do not have the permissions to use this command'}})

var user = msg.mentions.users.first();

if (!user) return msg.reply({embed:{color:'RED',description:'mention a user to mute '}})

var member;
 try {
     member = await msg.guild.members.fetch(user);
 } catch(err) {

    member = null;
 }

if (!member) return msg.reply({embed:{color:'RED',description:'the mentioned user is not in the server'}})

if (member) {
 if (member.hasPermission('MANAGE_CHANNELS')) return msg.reply({embed:{color:'RED',description:'cannot mute the user has manage channels permission'}})


let muterole = message.guild.roles.cache.find(r = r.name === "MUTED")

var embed = new MessageEmbed

.setTitle('user muted')
.addField('User:',user,true)
.addField('By:',msg.author, true)
.setFooter(`Requested by ${message.author.tag}`)
.setTimestamp()
message.channel.send(embed)

var embed = new MessageEmbed()
.setTitle("You were muted!")
 try{
      await user.send(embed)
      }catch(err) {
           console.warn(err)
          }
           msg.guild.members.muterole(user);
            msg.channel.send({embed:{color:"GREEN",description:`${user} has been muted by ${msg.author}`}});
 }
        }
}
