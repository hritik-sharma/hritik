const{MessageEmbed,Message} = require ("discord.js")

let gifs = [
 
  "https://media1.tenor.com/images/c22a247affcf4cd02c7d17f5a432cd95/tenor.gif?itemid=8259627",
  "https://media1.tenor.com/images/556f9f0d64cb87d63429ce00a2477acf/tenor.gif?itemid=8197236",
  "https://media1.tenor.com/images/3d88d5d076f6f908f139827d20ce706f/tenor.gif?itemid=11896642",
  "https://media1.tenor.com/images/4fd0a62fdd73e451b6880f7d0c70e281/tenor.gif?itemid=13127365",
  "https://media1.tenor.com/images/fddb60c72ef54fc1713025b3c2aac314/tenor.gif?itemid=11618216",
  "https://media1.tenor.com/images/432a41a6beb3c05953c769686e8c4ce9/tenor.gif?itemid=4704665",
  "https://media1.tenor.com/images/6b42070f19e228d7a4ed76d4b35672cd/tenor.gif?itemid=9051585",
  "https://media1.tenor.com/images/6dd67bd831780c4a754cb33697cddcb6/tenor.gif?itemid=10095819",
  "https://media1.tenor.com/images/57f08a1c0a7999f98d4d2cc6f2a33666/tenor.gif?itemid=16660238",
  "https://media1.tenor.com/images/6ab39603ef0dd6dbfc78ba20885b991f/tenor.gif?itemid=8220087",
  "https://media1.tenor.com/images/83271613ed73fd70f6c513995d7d6cfa/tenor.gif?itemid=4915753",

    
    

    ]
module.exports ={
    name:"bite",
    category:"fun",

    run:async(client,message,args) =>{


     
            let random = gifs[Math.floor(Math.random( )* gifs.length)]
            
            let mUser = message.mentions.members.first()
            if(!mUser)return message.channel.send("you need to actually mention someone to bite!")
            
          let  user = message.mentions.users.first();

            let em = new MessageEmbed()
            .setDescription(`**${message.author.username} bites ${user.username} looks hurting!**`)
            .setImage(random)
            .setColor('LUMINOUS_VIVID_PINK')
         
            message.channel.send(em)

        }
    }