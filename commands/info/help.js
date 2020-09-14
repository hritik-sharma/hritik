const {MessageEmbed,Message} = require("discord.js");


module.exports ={
    name:"help",
    category:"info",
    run:async(client,message,args) =>{
    

   
    const embed = new MessageEmbed()
   .setThumbnail(client.user.displayAvatarURL())
   .setTitle('Commands list🧾🧾')
   .setDescription('⚠️__**Moderation Commands**__:[5] \n**kick**,**ban**,**clear**,**removerole**,**addrole**,**lockdown**,**unl \n\n 🎉 __**Fun commands**__:[4] \n  **memes**,**spam**,**8ball**,**rps**\n \n  ℹ️ __**Info Commands**__ :[7] **avatar**,**ping**,**help**,**botinfo**,**userinfo**,**Userid**,**servername**,**members(server)**,\n \n  ⚒️__**Utility commands**__ :[1] \n **emoji**')  
    .setColor("LUMINOUS_VIVID_PINK")
   
 .setFooter(`Requested by ${message.author.tag}`)
   .setTimestamp()




      message.channel.send(embed)
    }}
