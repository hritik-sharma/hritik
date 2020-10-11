const{MessageEmbed,Message} = require ("discord.js")

let gifs = [
    
  "https://media1.tenor.com/images/04c39f437de3bda67d2dc35bbb563d88/tenor.gif?itemid=12817361",
  "https://media1.tenor.com/images/c925511d32350cc04411756d623ebad6/tenor.gif?itemid=13462237",
  "https://media1.tenor.com/images/0b39752a9e328237ce09af5f3c379b20/tenor.gif?itemid=12042399",
  "https://media1.tenor.com/images/f9a825b7d614cedda3fb2676a4ca0b68/tenor.gif?itemid=16127538",
  "https://media1.tenor.com/images/40877c628584984f44a5d441000b71bd/tenor.gif?itemid=7627209",
  "https://media1.tenor.com/images/17d33b325fe5b73548fd06227080096c/tenor.gif?itemid=17303765",
  "https://media1.tenor.com/images/97514c64332ac4660b16513fed65de84/tenor.gif?itemid=4874892",
  "https://media1.tenor.com/images/daa38ff8d98d709e525de49f536ae278/tenor.gif?itemid=11217278",
  "https://media1.tenor.com/images/d250c06c34f6961087a83c6fd79d0711/tenor.gif?itemid=4718235",
  "https://media1.tenor.com/images/ef8800c178f203160cacdde8142a7ef5/tenor.gif?itemid=5204793",
  "https://media1.tenor.com/images/82d372285efacb762310ec1fa96ab3e8/tenor.gif?itemid=18183411",
  "https://media1.tenor.com/images/527f8c200e4c60079f7b50df256dbed5/tenor.gif?itemid=18273883",
  "https://media1.tenor.com/images/77853dde8827a79d22c8a42d8037441f/tenor.gif?itemid=18273791",

    
    

    ]
module.exports ={
    name:"dance",
    category:"fun",

    run:async(client,message,args) =>{


     
            let random = gifs[Math.floor(Math.random( )* gifs.length)]
            
  
            let em1 = new MessageEmbed()
            .setDescription(`** ${message.author.username} is dancing!**`)
            .setImage(random)
            .setColor('LUMINOUS_VIVID_PINK')
         .setFooter("looking hot!")
            message.channel.send(em1)

          
        }
    }