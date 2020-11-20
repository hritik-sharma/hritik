const { MessageEmbed, Message } = require("discord.js");


module.exports = {
  name: "help",
  category: "info",
  run: async (client, message, args) => {



    const embed = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setTitle('Commands list🧾🧾')
      .setDescription('⚠️__**Moderation Commands**__: \n**kick**,**ban**,**clear**,**removerole**,**addrole**,**lock**,**unlock**,**mute**,**unmute** \n\n 🎉 __**Fun commands**__:\n  **meme**,**spam**,**8ball**,**rps**,**trivia**,**bite**,**slap**,**attack**\n \n  ℹ️ __**Info Commands**__ : **avatar**,**ping**,**help**,**botinfo**,**userinfo**,**userid**,**servername**,**members(server)**,**servericon**\n \n  ⚒️__**Utility Commands**__ : \n **emoji**,**dm**,**announce**,**enlarge(emoji)**,**createchannel**,**poll**,**giveaway**,**say** ')
      .setColor("LUMINOUS_VIVID_PINK")
      .addField("**Fresh Force link**", " [Click Here](https://discord.com/oauth2/authorize?client_id=750379372485279815&scope=bot&permissions=8) ")
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp()


    message.channel.send(embed)
  }
}
