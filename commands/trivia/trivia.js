const {MessageEmbed,Message} = require("discord.js");


module.exports ={
    name:"trivia",
    category:"trivia",
    run:async(client,message,args) =>{


        const embed = new MessageEmbed()
   
        .setTitle('Trivia topics list🧾🧾')
        .setDescription('**Type the following commands for your fav topics to start playing trivia:** \n \n **tri-chem , tri-bio , tri-gk, tri-ent(entertainment) ,tri-rd (random)**')
        .setColor("LUMINOUS_VIVID_PINK")
        .setFooter(`add my prefix in front of every command`)
       
       
       
       
       
             message.channel.send(embed)

    }
}