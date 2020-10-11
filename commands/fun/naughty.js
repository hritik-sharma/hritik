const{MessageEmbed,Message} = require ("discord.js")

let gifs = [
    
     
  
    "https://media1.tenor.com/images/ae838fbe09af8e132be0b37fe4cb791b/tenor.gif?itemid=14371044",
    "https://media1.tenor.com/images/fdba8528ed80dbfb89dde7c4c9d251b8/tenor.gif?itemid=7823503",
    "https://media1.tenor.com/images/346d71d50558dfc249c446d1ec22611e/tenor.gif?itemid=13939837",
    "https://media1.tenor.com/images/3dee4985aa4364c6a90891db7c62a8f3/tenor.gif?itemid=16380052",
    "https://media1.tenor.com/images/f4221a994eff1e245ac37f8001dd100b/tenor.gif?itemid=15556425",
    "https://media1.tenor.com/images/16d5f38d55d3bf9d6330ab496d589395/tenor.gif?itemid=13939835",
    "https://media1.tenor.com/images/85872c49761f5be80660249152de0367/tenor.gif?itemid=14855188",
    "https://media1.tenor.com/images/46a2b011d68f2b3130efa0ca60fb5732/tenor.gif?itemid=15785657",
    "https://media1.tenor.com/images/d3a13af6f1a6ff366f9f1c3ae898d072/tenor.gif?itemid=5438287",
    "https://media1.tenor.com/images/6aeee2b79715aad29ec7269e492b0f75/tenor.gif?itemid=7202123",
    "https://media1.tenor.com/images/b2b070ca5b1c439084b1d7a6b66dc35d/tenor.gif?itemid=14288018",
    "https://media1.tenor.com/images/d6f23bdbea4e6b78bb80044fa786fe42/tenor.gif?itemid=14966608",
    "https://media1.tenor.com/images/8738bc4bf2b6b7d9a268fffde7be0071/tenor.gif?itemid=15505563",
    "https://media1.tenor.com/images/9de01a4507d8973628ae5fcb867288de/tenor.gif?itemid=12323102",
    "https://media1.tenor.com/images/9716d54a6b176060ad9421ca7ebb0c7a/tenor.gif?itemid=15879526",
    "https://media1.tenor.com/images/c52a4b0d9a1cdc7ca19d2a79e0622312/tenor.gif?itemid=17446279",
    "https://media1.tenor.com/images/2577effbe8df2fc8dd4a81d7c152beae/tenor.gif?itemid=5909863",
    "https://media1.tenor.com/images/8ba13d78c225eac640bc508aeea3b692/tenor.gif?itemid=18006660",
    "https://media1.tenor.com/images/513c6bd4f8eee13d657ccdf374a8de62/tenor.gif?itemid=5464723",
    "https://media1.tenor.com/images/8ae97fce2621774859416c6a53cabc0d/tenor.gif?itemid=10837468",
    "https://media1.tenor.com/images/74f6d424ed3de4277e746d6d233fa461/tenor.gif?itemid=12347699",
    "https://media1.tenor.com/images/28304bca9c5eefcae786c5e9310f671d/tenor.gif?itemid=5730026",
    "https://media1.tenor.com/images/19551420b207b24ceb9d339c2b01c5e0/tenor.gif?itemid=18410410",
    "https://media1.tenor.com/images/98cca87667c91f2b66c9c6807edd8d0c/tenor.gif?itemid=15102420",
    "https://media1.tenor.com/images/71e6a5128c3cc694a57fd58ff08e8c7c/tenor.gif?itemid=6159757",
    "https://media1.tenor.com/images/74974eaee1f56d703fa9c04ede67594a/tenor.gif?itemid=18411622",
    "https://media1.tenor.com/images/7f51b41370fc90fbf433af403c70c013/tenor.gif?itemid=13926912",
    "https://media1.tenor.com/images/03742c2f7c338530b980ab81089a1550/tenor.gif?itemid=18003957",
    "https://media1.tenor.com/images/4fcacd7cbba825a6f8ea9a53844144ae/tenor.gif?itemid=18456382",
    "https://media1.tenor.com/images/86ce979567f44a63f81bd5aea8aafda2/tenor.gif?itemid=5427610",
    "https://media1.tenor.com/images/19d886243885c009f149e458b9c6abc0/tenor.gif?itemid=5398267",
    
  ]
module.exports ={
    name:"kill",
    category:"fun",

    run:async(client,message,args) =>{


     
            let random = gifs[Math.floor(Math.random( )* gifs.length)]
            
            let mUser = message.mentions.members.first()
            if(!mUser)return message.channel.send("please mention someone to kill")
            
          let  user = message.mentions.users.first();

           
            message.channel.send(`${user.username} ${random}`)

        }
    }