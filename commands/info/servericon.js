const {MessageEmbed,Message, Client} = require("discord.js");

module.exports ={
    name:"servericon",
    category:"info",


    run:async(client,message,args) =>{
        
        let server = message.guild;
    
   

        //4096 is the biggest size of the avatar
        // Dynamic is used so that it displays gif/animated avatars also
        
        const embed = new MessageEmbed()
        .setTitle(`${message.guild.name}'s icon`)
        .setDescription(`[Icon Link ](${server.iconURL({size:2048, dynamic:true,format:"png"})})`)
        .setColor("RANDOM")
        .setImage(server.iconURL({size:2048, dynamic:true,format:"png"}))
        .setFooter(`Requested by ${message.author.tag}`);

         message.channel.send(embed)
    }
}
    