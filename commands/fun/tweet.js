const {MessageEmbed,Message} = require("discord.js");
const axios = require('axios');

module.exports ={
    name:"tweet",
    category:"fun",

run: async (client, message, args) => {
    try {
               const text = args.join(' ')
               const url = `https://api.no-api-key.com/api/v2/trump?message=`
               const encoded = url + encodeURIComponent(text);
               console.log(url)
               const embed = new MessageEmbed()
                   .setImage(encoded)
                   .setColor('0193FC')
               await message.channel.send(embed)
           } catch (e) {
               console.log(e)
           }
   
       }
   }