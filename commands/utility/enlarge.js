const { parse } = require("twemoji-parser");
const{MessageEmbed,Message} = require ("discord.js")

const Discord = require("discord.js");

module.exports ={

    name:"enlarge",
    category:"utility",

    run:async(client,msg,args) =>{


    
    const emoji = args[0];
    if (!emoji) return msg.channel.send("No emoji provided!");

    let custom = Discord.Util.parseEmoji(emoji);
    const embed = new Discord.MessageEmbed()
    .setTitle(`Enlarged version of ${emoji}`)
    .setColor("#FFFF00");

    if (custom.id) {
        embed.setImage(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`);
        return msg.channel.send(embed);
    }
    else {
        let parsed = parse(emoji, { assetType: "png" });
        if (!parsed[0]) return msg.channel.send("Invalid emoji!");

        embed.setImage(parsed[0].url);
        return msg.channel.send(embed);
    }

}

}

    