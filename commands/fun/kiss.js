const{MessageEmbed,Message} = require ("discord.js")

let gifs = [
    
       
    "https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif?itemid=12612515",
     "https://cdn.weeb.sh/images/SJINn6OPW.gif",
    "https://media1.tenor.com/images/3d56f6ef81e5c01241ff17c364b72529/tenor.gif?itemid=13843260",
    "https://media1.tenor.com/images/896f0159d6605b27c59ef3c3f818d664/tenor.gif?itemid=16490903",
     "https://cdn.weeb.sh/images/ryEvhTOwW.gif",
    "https://media1.tenor.com/images/d0cd64030f383d56e7edc54a484d4b8d/tenor.gif?itemid=17382422",
    "https://media1.tenor.com/images/d307db89f181813e0d05937b5feb4254/tenor.gif?itemid=16371489",
    "https://media1.tenor.com/images/ba1841e4aeb5328e41530d3289616f46/tenor.gif?itemid=14240425",
    ""

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
            .setDescription(`**${message.author.tag}** kisses **${user.tag} !Cute!**`)
            .setImage(random)
            .setColor('LUMINOUS_VIVID_PINK')
            .setFooter("They are looking hot!")
            message.channel.send(em)

        }
    }