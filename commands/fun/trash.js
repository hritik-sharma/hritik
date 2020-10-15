const {MessageEmbed,Message} = require("discord.js");
const axios = require('axios');

module.exports ={
    name:"trash",
    category:"fun",

run: async (client, message, args) => {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;        
            let response, data;
    
            try {
                response = await axios.get(`https://api.no-api-key.com/api/v1/trash?image=${user.user.displayAvatarURL({format: 'png'})}`)
                data = await response.data  
            } catch (e) {
                return console.log(e)
            }
    
            let  user1 = message.mentions.users.first();
            const embed = new MessageEmbed()
            .setTitle(`Admit it! ${user1.username} is a trash`)
                .setImage(data.url)
                .setColor("0193FC")
            await message.channel.send(embed)
        }};