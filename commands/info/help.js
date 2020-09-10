const {MessageEmbed,Message} = require("discord.js");


module.exports ={
    name:"help",
    category:"info",
    run:async(client,message,args) =>{
    

   
    const embed = new MessageEmbed()
   .setThumbnail(client.user.displayAvatarURL())
   .setTitle('Commands list🧾🧾')
   .setDescription('⚠️__Moderation commands__:[5] ``kick``,``ban``,``clear``,``removerole``,``addrole``  \n \n🎉 __Fun commands__:[3]\n ``memes``,``spam``,``8ball`` \n \n ℹ️ __Info commands__ :[2]\n  ``avatar``,``ping``,``help``\n \n ⚒️__Utility commands__ :[1]\n ``emoji``')  
    .setColor("LUMINOUS_VIVID_PINK")
   
 .setFooter(`Requested by ${message.author.tag}`)
   




      message.channel.send(embed)
    }}
