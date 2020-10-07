const{MessageEmbed,Message} = require ("discord.js")

let gifs = [
    "https://tenor.com/7UKr.gif",
    "https://tenor.com/bk57O.gif",
    "https://tenor.com/bgQ8r.gif",
    // "https://gif4.gif"
    ]
module.exports ={
    name:"kiss",
    category:"fun",

    run:async(client,message,args) =>{


     
            let random = gifs[Math.floor(Math.random( )* gifs.length)]
            
            let mUser = message.mentions.members.first()
            if(!mUser)return message.channel.send("oof You can't kiss yourself!")
            
          let  user = message.mentions.users.first();

            let em = new MessageEmbed()
            .setDescription(`**${message.author.tag}** kisses **${user.tag} lip's**`)
            .setImage(random)
            .setColor('LUMINOUS_VIVID_PINK')
            message.channel.send(em)

        }
    }