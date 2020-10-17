const{MessageEmbed,Message} = require ("discord.js")

let gifs = [
    "https://media1.tenor.com/images/153b2f1bfd3c595c920ce60f1553c5f7/tenor.gif?itemid=10936993",
    "https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956",
    "https://media1.tenor.com/images/612e257ab87f30568a9449998d978a22/tenor.gif?itemid=16057834",
    "https://media1.tenor.com/images/a9b8bd2060d76ec286ec8b4c61ec1f5a/tenor.gif?itemid=17784858",
    "https://media1.tenor.com/images/1ba1ea1786f0b03912b1c9138dac707c/tenor.gif?itemid=5738394",
    "https://media1.tenor.com/images/af36628688f5f50f297c5e4bce61a35c/tenor.gif?itemid=17314633",
    "https://media1.tenor.com/images/477821d58203a6786abea01d8cf1030e/tenor.gif?itemid=7958720",
    "https://media1.tenor.com/images/f1320bcc7bf4ffd5de42e09cbade52c4/tenor.gif?itemid=15743602",
    "https://media1.tenor.com/images/5e5f33fd48aaaa0a116df3bd8ebb7a53/tenor.gif?itemid=12858541",
    "https://media1.tenor.com/images/ba4b7240bfe12a4491ec4a299754e9e2/tenor.gif?itemid=8607940",
    "https://media1.tenor.com/images/7826b1011ea92515ed2657ac1dcf0e8b/tenor.gif?itemid=17823188",
    "https://media1.tenor.com/images/b7a844cc66ca1c6a4f06c266646d070f/tenor.gif?itemid=17423278",
    "https://media1.tenor.com/images/bc3d1991d7bec09250e70bd684410b90/tenor.gif?itemid=17897226",
    "https://media1.tenor.com/images/07b4516d50406b4a320269d514876170/tenor.gif?itemid=17897216",
    "https://media1.tenor.com/images/b221fb3f50f0e15b3ace6a2b87ad0ffa/tenor.gif?itemid=8576304",
  


  ]
module.exports ={
    name:"slap",
    category:"fun",

    run:async(client,message,args) =>{


     
            let random = gifs[Math.floor(Math.random( )* gifs.length)]
            
            let mUser = message.mentions.members.first()
            if(!mUser)return message.channel.send("You can't slap yourself!")
            
          let  user = message.mentions.users.first();

            let em = new MessageEmbed()
            .setDescription(`**${message.author.tag} slaps ${user.tag} very hard!**`)
            .setImage(random)
            .setColor('LUMINOUS_VIVID_PINK')
            .setFooter("I can see that red spot😜")
            message.channel.send(em)

        }
    }