const{MessageEmbed,Message} = require ("discord.js")

module.exports ={
    name:"say",
    category:"utility",

    run:async(client,msg,args) =>{
   

        let msg1 = args.join(" ");
        if (!msg) {
        return message.channel.send("please enter some text")
                      }
        msg.channel.send(`${msg1}`) 
      
        
         }
    }