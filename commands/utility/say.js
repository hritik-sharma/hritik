const{MessageEmbed,Message} = require ("discord.js")

module.exports ={
    name:"say",
    category:"utility",

    run:async(client,msg,args) =>{
   

        let msg1 = args.join(" ");
        if (!msg1) {
        return message.channel.send("please enter some text")
                      }
        message.channel.send(`${msg1}`) 
      
        
         }
    }