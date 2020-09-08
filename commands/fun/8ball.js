const {MessageEmbed} = require("discord.js");

module.exports ={
    name:"8ball",
    category:"fun",

 run:async(client,message,args)=>{

if(!args[2]) return message.reply("Please ask a full question!");
let replies = ["Yes.", "No", "I dont know", "Ask me again later"];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(0).join(" ");

const embed = new MessageEmbed()
.setAuthor(message.author.tag)
.setColor("#FF9900")
.addField("Question", question)
.addField("Answer", replies[result]);
message.channel.send(embed);
}}


