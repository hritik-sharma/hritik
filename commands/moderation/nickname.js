const {MessageEmbed,Message} = require("discord.js");


module.exports ={
    name:"nickname",
    category:"info",
    run:async(client,message,args) =>{

if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("you dont have permission to use this command")
let user = message.mentions.users.first();
if (!user) return message.channel.send("you need to mention a user")

let nick = args.slice(1).join(" ")
if (!nick) return message.channel.send("you need to input a nickname")

let member = message.guild.members.cache.get(user.id) 
await member.setNickname(nick).catch(err => message.channel.send({embed:{color:"RED", description:`${err}`}}))
let embed = new MessageEmbed()
.setTitle("Nickname changed")
.setDescription(`${user.tag}s nickname changed to ${nick}`)
.setColor("GREEN")
message.channel.send(embed)
}
}