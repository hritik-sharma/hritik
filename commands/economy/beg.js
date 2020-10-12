const mongoose = require("mongoose")
const config = require("../../config.json")
const {MessageEmbed} = require("discord.js")
const ms = require("parse-ms")
mongoose.connect(config.mongoPass,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
const Data = require('../../models/data.js')
const data = require("../../models/data.js")

module.exports={
    name:"beg",
    category:"economy",

    run:async(client,message,args) =>{


   

        let timeout = 45000;
        let reward = Math.floor(Math.random()* Math.floor(600)) //You can set any number

        Data.findOne({
            id:message.author.id
        },(err,data)=>{
            if(err) console.log(err);
            if(!data){
                const newD = new Data({
                    id:message.author.id,
                    Money:reward,
                    Bank:0,
                    lb:"all",

                    beg:Date.now()
                })
                newD.save().catch(err => console.log(err));
                let member = message.guild.members.cache.random();
                return message.channel.send(`You beg for the first time and you receive $${reward} from ${member}`)
            }else{
                if(timeout- (Date.now()-data.beg) >0){
                    let time = ms(timeout -(Date.now()-data.beg));

                    let embed = new MessageEmbed()
                    .setTitle('**Slow it down**')
                    .setDescription(` **Dude!!** I'm not an ATM stop asking for money \n You can beg again in **${time.minutes}m ${time.seconds}s** \n The default cooldown is **45s**`)
                    .setColor("BLUE")

                    message.channel.send(embed)
                }else{
                    data.Money +=reward
                    data.beg = Date.now()
                    data.save().catch(err => console.log(err));
                    let member = message.guild.members.cache.random();
                    let embed = new MessageEmbed()
                    .setDescription(`**Congrats!! ${member.username} ** finally donated ${reward} coins to ${message.author.username}!`)
                    .setColor(RANDOM)
                    message.channel.send(embed)

                }
            }
        })
    }
}