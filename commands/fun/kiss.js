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
    "https://media1.tenor.com/images/ef4a0bcb6e42189dc12ee55e0d479c54/tenor.gif?itemid=12143127",
    "https://media1.tenor.com/images/59966642c3fe571ae12fb1d8b13feec5/tenor.gif?itemid=10662832",
    "https://media1.tenor.com/images/6f455ef36a0eb011a60fad110a44ce68/tenor.gif?itemid=13658106",
    "https://media1.tenor.com/images/34ecc943dd11f0c55689e25f1bacddfb/tenor.gif?itemid=14816388",
    "https://media1.tenor.com/images/24fdab77e4474180888c9a42a22d67e8/tenor.gif?itemid=5612596",
    "https://media1.tenor.com/images/c263375bf2b35ed931edf05c8694910d/tenor.gif?itemid=15111557",
    "https://media1.tenor.com/images/d30f90ec854edde177e8b503b568fdcf/tenor.gif?itemid=5206747",
    "https://media1.tenor.com/images/6c6090c058300acf8aacdd1afce4a630/tenor.gif?itemid=17039510",
    "https://media1.tenor.com/images/24fdab77e4474180888c9a42a22d67e8/tenor.gif?itemid=5612596",  
    "https://media1.tenor.com/images/9fac3eab2f619789b88fdf9aa5ca7b8f/tenor.gif?itemid=12925177",
    "https://media1.tenor.com/images/f2bffa8abbcf6d7c19324877140a8403/tenor.gif?itemid=7691384",
    "https://media1.tenor.com/images/db79d17d7a5e08bf64e55a63eea5976f/tenor.gif?itemid=15416619",
    "https://media1.tenor.com/images/1306732d3351afe642c9a7f6d46f548e/tenor.gif?itemid=6155670",
    "https://media1.tenor.com/images/f8893038cf33dc68575140ad1d9e11a3/tenor.gif?itemid=6155648",
    "https://media1.tenor.com/images/5deb0f0b23aa10247db6a9d009d3f0d6/tenor.gif?itemid=18047510",
    "https://media1.tenor.com/images/7cf581fa0999dc33fc02c7a7f01697eb/tenor.gif?itemid=15069984",
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
            .setDescription(`**${message.author.username} Kisses ${user.username}! how Cute**`)
            .setImage(random)
            .setColor('LUMINOUS_VIVID_PINK')
            .setFooter("They are looking hot!")
            message.channel.send(em)

        }
    }