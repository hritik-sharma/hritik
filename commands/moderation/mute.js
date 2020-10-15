const {MessageEmbed,Message} = require("discord.js");

module.exports ={
    name:"mute",
    category:"moderation",

 run:async(client,message,args)=>{


if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply({embed:{color:'RED',description:'you do not have the permissions to use this command'}})
.then(m=> m.delete({timeout:10000}));

var user = message.mentions.users.first();

if (!user) return message.reply({embed:{color:'RED',description:'mention a user to mute '}})
.then(m=> m.delete({timeout:10000}));

var member;
 try {
     member = await message.guild.members.fetch(user);
 } catch(err) {

    member = null;
 }

if (!member) return message.reply({embed:{color:'RED',description:'the mentioned user is not in the server'}})
.then(m=> m.delete({timeout:10000}));

if (member) {
 if (member.hasPermission('MANAGE_CHANNELS')) return message.reply({embed:{color:'RED',description:'cannot mute the user has manage channels permission'}})
 .then(m=> m.delete({timeout:10000}));


 let muterole = message.guild.roles.cache.find( r => r.name === "muted");

if (!muterole)  return message.reply({embed:{color:'RED',description:'cannot find a mute role pls make one!'}})
.then(m=> m.delete({timeout:10000}));

if(member.roles.cache.has(muterole.id)) {
    return message.channel.send("Given user is already muted")
    .then(m=> m.delete({timeout:10000}));
}

var reason = args.slice(1).join(' ');
if(!reason) return message.reply({embed:{color:"RED",description:"Mention a reason to mute the user"}})
.then(m=> m.delete({timeout:10000}));
var embed = new MessageEmbed()

.setTitle('user muted')
.addField('User:',user,true)
.addField('By:',message.author, true)
.addField('Reason:',reason)
.setFooter(`Requested by ${message.author.tag}`)
.setTimestamp()
.setColor('GREEN')
message.channel.send(embed)

var embed = new MessageEmbed()
.setTitle("You were muted!")
.addField('Reason:',reason)
 try{
      await member.send(embed)
      }catch(err) {
           console.warn(err)
          }
           member.roles.add(muterole.id)
            message.channel.send({embed:{color:"GREEN",description:`${user} has been muted by ${message.author}`}});
 }
        }
}
