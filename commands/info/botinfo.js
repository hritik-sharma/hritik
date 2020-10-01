const {MessageEmbed, version} = require("discord.js");


module.exports ={
    name:"botinfo",
    category:"info",
    run:async(client,message,args) =>{
   
   const embed = new MessageEmbed()

.setAuthor('Fresh Force#788 Info',
client.user.displayAvatarURL()
)   
.setFooter(`Requested by ${message.author.tag}`)
.setColor(`RANDOM`)
.setDescription('**Bot name**: Fresh Force \n **Owner**: HRITIK#1415 \n **Total Categories**: 5 \n **Total Commands**: 24 \n **State**: Under development \n **Online status**: Up 24/7 \n **Created on**:  1st sept 2020  ')
.addField("**Fresh Force link**"," [Click Here](https://discord.com/oauth2/authorize?client_id=750379372485279815&scope=bot&permissions=8) ")
.setTimestamp()
message.channel.send(embed)
    }
  }