const{MessageEmbed,Message} = require ("discord.js")

let gifs = [
    "https://media.tenor.com/images/b020758888323338c874c549cbca5681/tenor.gif",
    "https://media.tenor.com/images/48963a8342fecf77d8eabfd2ab2e75c1/tenor.gif",
    "https://media.tenor.com/images/dc329c68542d91ce2e00e8c162be8746/tenor.gif",
    "https://media.tenor.com/images/822b11c4ab7843229fdd4abf5ccadf61/tenor.gif",
    "https://media.tenor.com/images/2346a83cb600c3a8feb4000d515b7c0c/tenor.gif",
    "https://media.tenor.com/images/a23d2ec86610bd1dd026a07853992b57/tenor.gif",
    "https://media.tenor.com/images/faadbe17f1b4fbf399be38eaddff6e05/tenor.gif",
    "https://media.tenor.com/images/25359520a0973f896b002689ed90db8d/tenor.gif",
    "https://media.tenor.com/images/5fae48a5065440df87efb803cf8e43ce/tenor.gif",
    "https://media.tenor.com/images/924c9665eeb727e21a6e6a401e60183b/tenor.gif",
    "https://media.tenor.com/images/0136ddedea728ae27df8fbcd19d680f5/tenor.gif",
    "https://media.tenor.com/images/be2b3298bc9880b9ffcdc7a47635fff6/tenor.gif",
     "https://media.tenor.com/images/dd777838018ab9e97c45ba34596bb8de/tenor.gif",
     "https://media.tenor.com/images/912baa6ce415c3a783969c3e63a5b6b9/tenor.gif",
     "https://media.tenor.com/images/26aaa1494b424854824019523c7ba631/tenor.gif",
     "https://cdn.weeb.sh/images/SJINn6OPW.gif",
     "https://cdn.weeb.sh/images/ryEvhTOwW.gif",

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
            .setDescription(`**${message.author.tag}** kisses **${user.tag}! Cute!**`)
            .setImage(random)
            .setColor('LUMINOUS_VIVID_PINK')
            message.channel.send(em)

        }
    }