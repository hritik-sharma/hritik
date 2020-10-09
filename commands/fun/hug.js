const{MessageEmbed,Message} = require ("discord.js")

let gifs = [
    
    "https://media1.tenor.com/images/f5df55943b64922b6b16aa63d43243a6/tenor.gif?itemid=9375012",   
    "https://media1.tenor.com/images/f1d7dcfc64e642a4c0c77e65ea9e9181/tenor.gif?itemid=16163473",   
    "https://media1.tenor.com/images/0964f7e14a34d6c6048cb5c95365cfcc/tenor.gif?itemid=16859376",   
    "https://media1.tenor.com/images/b3a0e4968bd1555a82355bce760d8925/tenor.gif?itemid=12668776",   
    "https://media1.tenor.com/images/b718019de378ce6d1e13b93ac9ed6a8e/tenor.gif?itemid=17132136",   
    "https://media1.tenor.com/images/410102eb20e24e2ecb0c0889ed7dd288/tenor.gif?itemid=15974218",   
    "https://media1.tenor.com/images/412bc49583e69551c1ecdd5e56e85c38/tenor.gif?itemid=14102399",   
    "https://media1.tenor.com/images/498a991063f01a905adc7dc0f01b2a45/tenor.gif?itemid=16567632",   
    "https://media1.tenor.com/images/b07761f7850cd08ffc3e4d1ab85d0815/tenor.gif?itemid=12075645",   
    "https://media1.tenor.com/images/df8b87203442db2c2af2a806eb7153d4/tenor.gif?itemid=16300141",   
    "https://media1.tenor.com/images/23547c466df7d691ae28f0df5e25be2e/tenor.gif?itemid=16018766",   
    "https://media1.tenor.com/images/d2a2b216ef3bc74406f661049f937999/tenor.gif?itemid=17023255",   
    "https://media1.tenor.com/images/595f89fa0ea06a5e3d7ddd00e920a5bb/tenor.gif?itemid=7919037",   
    "https://media1.tenor.com/images/daffa3b7992a08767168614178cce7d6/tenor.gif?itemid=15249774",   
    "https://media1.tenor.com/images/11889c4c994c0634cfcedc8adba9dd6c/tenor.gif?itemid=5634578",   
    "https://media1.tenor.com/images/72627a21fc298313f647306e6594553f/tenor.gif?itemid=9096291",   
    "https://media1.tenor.com/images/530c52de04fa1a28a4bb173756a3b52b/tenor.gif?itemid=13221048",   
    "https://media1.tenor.com/images/9ecd999c5ec7ed1470c0193671b8bec5/tenor.gif?itemid=14751760",   
   
    

    ]
module.exports ={
    name:"hug",
    category:"fun",

    run:async(client,message,args) =>{


     
            let random = gifs[Math.floor(Math.random( )* gifs.length)]
            
            let mUser = message.mentions.members.first()
            if(!mUser)return message.channel.send("oof You can't hug yourself!")
            
          let  user = message.mentions.users.first();

            let em = new MessageEmbed()
            .setDescription(`**${message.author.tag} hugs ${user.tag} how Cute!**`)
            .setImage(random)
            .setColor('LUMINOUS_VIVID_PINK')
            .setFooter("They are sharing love!")
            message.channel.send(em)

        }
    }