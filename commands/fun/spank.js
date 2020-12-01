const{MessageEmbed,Message} = require ("discord.js")

let gifs = [
   
   "https://media1.tenor.com/images/a9b8bd2060d76ec286ec8b4c61ec1f5a/tenor.gif?itemid=17784858",
   "https://media1.tenor.com/images/3c161bd7d6c6fba17bb3e5c5ecc8493e/tenor.gif?itemid=5196956",
   "https://media1.tenor.com/images/35c1ecae2168c49be997871adc2a5d75/tenor.gif?itemid=3412059",
   "https://media1.tenor.com/images/e2eaf2f2d68cfc2972275ab8d6ae14ae/tenor.gif?itemid=17720272",
   "https://media1.tenor.com/images/29e932d369e5f0730ebab23ddcfec43a/tenor.gif?itemid=16216485",
   "https://media1.tenor.com/images/c159cd1d7e7424cf9fd6fbdb09919146/tenor.gif?itemid=14179570",
   "https://media1.tenor.com/images/a7ed1e6575b047ae219c8bdef3cdb799/tenor.gif?itemid=16082139",
   "https://media1.tenor.com/images/de0a01eb127e0494e96ab999876e1ba2/tenor.gif?itemid=15472705",
   "https://media1.tenor.com/images/5529ad77a3627b0b9e27de8753219690/tenor.gif?itemid=7885617",
   "https://media1.tenor.com/images/693afd5812160c00a1fa8582de15a83e/tenor.gif?itemid=5458569",
   "https://media1.tenor.com/images/02e7e815066e728e721a44eb3e1118d3/tenor.gif?itemid=16055441",
   "https://media1.tenor.com/images/be2bb9db1c8b8dc2194ec6a1b3d96b89/tenor.gif?itemid=18811244",
   "https://media1.tenor.com/images/4173a49cf302675f25f850cf21234a8c/tenor.gif?itemid=15492222",
   "https://media1.tenor.com/images/3a7bd46675a49d7dee4947dba4719f07/tenor.gif?itemid=9610049",
   


  ]
module.exports ={
    name:"spank",
    category:"fun",

    run:async(client,message,args) =>{


     
            let random = gifs[Math.floor(Math.random( )* gifs.length)]
            
            let mUser = message.mentions.members.first()
            if(!mUser)return message.channel.send("You can't spank yourself, please mention someone")
            
          let  user = message.mentions.users.first();

            let em = new MessageEmbed()
            .setDescription(`**${message.author.tag} spank ${user.tag} very hard!**`)
            .setImage(random)
            .setColor('LUMINOUS_VIVID_PINK')
            .setFooter("I can see that red spot😜")
            message.channel.send(em)

        }
    }