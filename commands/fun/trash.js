const {MessageEmbed,Message} = require("discord.js");


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
    
            const embed = new MessageEmbed()
                .setImage(data.url)
                .setColor("0193FC")
            await message.channel.send(embed)
        }};