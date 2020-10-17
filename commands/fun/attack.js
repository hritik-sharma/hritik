const{MessageEmbed,Message} = require ("discord.js")

let gifs = [
   
   "https://media1.tenor.com/images/5b442329c8a8adc696fb017ddf75763b/tenor.gif?itemid=11745638",
   "https://media1.tenor.com/images/caa83c37185b658bc04d28a7eb905414/tenor.gif?itemid=11214449",
   "https://media1.tenor.com/images/68ea1c99b4f2a57c9ee5ff1f212d2e85/tenor.gif?itemid=9720724",
   "https://media1.tenor.com/images/9188788a3cee259094a2fb599723079b/tenor.gif?itemid=17152149",
   "https://media1.tenor.com/images/434fdc6e1adcb24eaf731c624898be08/tenor.gif?itemid=16284896",
   "https://media1.tenor.com/images/11f4047c394a3ca8b53e3b7a11b4f3c5/tenor.gif?itemid=13720303",
   "https://media1.tenor.com/images/86bd4ab7511d7ce2e8dc8634257d96c0/tenor.gif?itemid=11602504",
   "",
   "",
   "",
   "",
   "",
   "",
   "",
   "",
   "",


  ]
module.exports ={
    name:"attack",
    category:"fun",

    run:async(client,message,args) =>{


     
            let random = gifs[Math.floor(Math.random( )* gifs.length)]
            
            let mUser = message.mentions.members.first()
            if(!mUser)return message.channel.send("You can't attack yourself, please mention someone")
            
          let  user = message.mentions.users.first();

            let em = new MessageEmbed()
            .setDescription(`**${message.author.tag} attacks ${user.tag} very hard!**`)
            .setImage(random)
            .setColor('LUMINOUS_VIVID_PINK')
            .setFooter("Begining of the war")
            message.channel.send(em)

        }
    }