const{MessageEmbed,Message} = require ("discord.js")

let gifs = [
    
   "https://media1.tenor.com/images/86e96b198c95015c55091a187ebd3408/tenor.gif?itemid=11909075",
   "https://media1.tenor.com/images/5f73f2a7b302a3800b3613095f8a5c40/tenor.gif?itemid=10005495",
   "https://media1.tenor.com/images/0c608b33607b4e92350198b53c8940c7/tenor.gif?itemid=16735374",
   "https://media1.tenor.com/images/ec2ca0bf12d7b1a30fea702b59e5a7fa/tenor.gif?itemid=13417195",
   "https://media1.tenor.com/images/c4f68fbbec3c96193386e5fcc5429b89/tenor.gif?itemid=13451325",
   "https://media1.tenor.com/images/0c608b33607b4e92350198b53c8940c7/tenor.gif?itemid=16735374",
   "https://media1.tenor.com/images/3a243709d1d8fc504a89e018cb27b1f0/tenor.gif?itemid=17518068",
   "https://media1.tenor.com/images/81769ee6622b5396d1489fb4667fd20a/tenor.gif?itemid=14376074",
   "https://media1.tenor.com/images/feeef4685f9307b76c78a22ba0a69f48/tenor.gif?itemid=8413059",
   "https://media1.tenor.com/images/20a20e267e145299cc8cbee691667509/tenor.gif?itemid=15781493",
   "https://media1.tenor.com/images/9cae7093f53b19b79a89d724127b487e/tenor.gif?itemid=18710743",
   "https://media1.tenor.com/images/2b846c6bb5dc0b03dfe7776bc581608c/tenor.gif?itemid=11268572",
   "https://media1.tenor.com/images/b27310c2bce73784ce0f731d282befd4/tenor.gif?itemid=13451289",
   "https://media1.tenor.com/images/2ca4ca0d787ca3af4e27cdf71bb9796f/tenor.gif?itemid=15900645",
   "https://media1.tenor.com/images/d64d14b0bb090bf9bd6976accb94858e/tenor.gif?itemid=15069985",
   "https://media1.tenor.com/images/b08b6d61bcf16bee7d56408f61855f35/tenor.gif?itemid=17549074",
   "https://media1.tenor.com/images/d64d14b0bb090bf9bd6976accb94858e/tenor.gif?itemid=15069985",
   "https://media1.tenor.com/images/efd46743771a78e493e66b5d26cd2af1/tenor.gif?itemid=14002773",
   "https://media1.tenor.com/images/576729feb2b35511d8d95ecfb2da4c20/tenor.gif?itemid=15788935",
 "https://media1.tenor.com/images/0ce34500facf2ada86307bb740a03dfd/tenor.gif?itemid=5567738",
 
    
    

    ]
module.exports ={
    name:"lick",
    category:"fun",

    run:async(client,message,args) =>{


     
            let random = gifs[Math.floor(Math.random( )* gifs.length)]
            
            let mUser = message.mentions.members.first()
            if(!mUser)return message.channel.send("oof You can't lick yourself!")
            
          let  user = message.mentions.users.first();

            let em = new MessageEmbed()
            .setDescription(`**${message.author.tag} licks ${user.tag} how Cute!**`)
            .setImage(random)
            .setColor('LUMINOUS_VIVID_PINK')
         
            message.channel.send(em)

        }
    }