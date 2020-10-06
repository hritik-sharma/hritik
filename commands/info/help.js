const {MessageEmbed,Message} = require("discord.js");


module.exports ={
    name:"help",
    category:"info",
    run:async(client,message,args) =>{
    

   
    const embed = new MessageEmbed()
   .setThumbnail(client.user.displayAvatarURL())
   .setTitle('Commands list🧾🧾')
   .setDescription('⚠️__**Moderation Commands**__:[9] \n**kick**,**ban**,**clear**,**removerole**,**addrole**,**lock**,**unlock**,**mute**,**unmute** \n\n 🎉 __**Fun commands**__:[5] \n  **memes**,**spam**,**8ball**,**rps**,**trivia**,**joke**\n \n  ℹ️ __**Info Commands**__ :[9] **avatar**,**ping**,**help**,**botinfo**,**userinfo**,**userid**,**servername**,**members(server)**,**servericon**\n \n  ⚒️__**Utility Commands**__ :[8] \n **emoji**,**dm**,**announce**,**enlarge(emoji)**,**createchannel**,**poll**,**giveaway**,**say** \n \n __**Economy Commands**__ : [2] \n **bal** , **beg**\n COMING SOON!!!' )  
    .setColor("LUMINOUS_VIVID_PINK")
    .addField("**Fresh Force link**"," [Click Here](https://discord.com/oauth2/authorize?client_id=750379372485279815&scope=bot&permissions=8) ")
 .setFooter(`Requested by ${message.author.tag}`)
   .setTimestamp()




      message.channel.send(embed)
    }}
