const {MessageEmbed,Message} = require("discord.js");

module.exports ={
    name:"rps",
    category:"fun",
    aliases:["rockpaperscissors","rpsminigames"],
    description:" play rock,paper,scissors with the bot",
    usage:"<rock,paper or scissors>",
    

    run: async(client,message,args) =>{

        let replies = ["rock","paper","scissors"];
        let result = Math.floor(Math.random() * replies.length);

        let uReply  = args[0];
        if(!uReply){
            return message.channel.send(`Please mention one of these replies:\`${replies.join(",")}\``)
        }
        if(!replies.includes(uReply)){
            return message.channel.send(`Only these responses are acceptable:\`${replies.join(",")}\``)
        }
        if(replies[result] === uReply ){
            return message.channel.send("It's a tie! We had the same choice")
        }else if(uReply === 'rock'){
            if(replies[result] === "paper") {
                message.channel.send("I won,my choice was 📰 😎")
            } else return message.channel.send("My choice was ✂️ so you won")
        }else if(uReply === "scissors"){
            if(replies[result] === "rock"){
                message.channel.send("I won,my choice was rock😎")
            }  else return message.channel.send("My choice was 📰 so you won")
        }else if(uReply === "paper"){
            if(replies[result] === "scissors"){
                message.channel.send("I won,my choice was ✂️😎")
            } else return  message.channel.send("My choice was rock so you won")
        }
        
        

    }
}
	
