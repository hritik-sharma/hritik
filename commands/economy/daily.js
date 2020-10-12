const mongoose = require("mongoose")
const config = require("../../config.json")
const {MessageEmbed, Client} = require("discord.js")
const ms = require("parse-ms")
mongoose.connect(config.mongoPass,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
const Data = require('../../models/data.js')
const { model } = require("../../models/data.js")

module.exports ={
    name:"daily",

    run:async(client,message,args) =>{
        let timeout = 86400000
        let reward = 1500
        Data.findOne ({
            id:message.author.id

        },(err,data) =>{
            if(err) console.log(err);
            if(!data){
                const newD = new Data({
                    id:message.author.id,
                    Money:reward,
                    Bank:0,
                    lb:"all",
                    daily:Date.now()
                })
                newD.save().catch(err => console.log(err))
                 return message.channel.send("Here are your first daily reward")
            }else{
                if(timeout -(Date.now()-data.daily)>0){
                    let time = ms(timeout-(Date.now()-data.daily));
                    let embed = new MessageEmbed()
                    .setTitle("Slow it down man!")
                    .setDescription(`**You can get your daily coins again in ${time.hours}h ${time.minutes}m ${time.seconds}s **`)
                    .setFooter("default countdown is 1 day")
                    .setColor("BLUE")
                    message.channel.send(embed)
                    .setColor("GREEN")
                }else{
                    data.Money +=reward
                    data.daily =Date.now()
                    data.save().catch(err => console.log(err))

                    let embed = new MessageEmbed()
                    .setTitle(`**Here are your daily coins, ${message.author.username}**`)
                    .setDescription(`${reward} coins were placed in your wallet! `)
                    .setColor("GREEN")
                    message.channel.send(embed)
                }
            }
        })
    }
}