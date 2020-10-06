const Discord = module.require("discord.js");
 module.exports = {
     name: "spam",
     description: "Another fun command", run: async(client, message, args) => { 
     let msg = args.join(" ");
     if (!msg) {
     return message.channel.send("Error : No Text Found to Spam")
                   }
     message.channel.send(`${msg}`) 
     message.channel.send(`${msg}`) 
     message.channel.send(`${msg}`)  
     message.channel.send(`${msg}`) 
     message.channel.send(`${msg}`) 
     message.channel.send(`${msg}`) 
     message.channel.send(`${msg}`) 
     message.channel.send(`${msg}`) 
     message.channel.send(`${msg}`) 
     message.channel.send(`${msg}`);
     
      }
 }