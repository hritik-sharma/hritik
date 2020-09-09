const {MessageEmbed} = require("discord.js");


const chooseArr =  [ "🗿","📜", "✂️"] ;
module.exports ={
    name:"rps",
    category:"fun",
description : "Rock Paper scissors game. React to one of the emojis to play",
 run:async(client,message,args)=>{
 const embed = new MessageEmbed
 .setColor("RED")
.setFooter(message.guild.medisplayName, client.user.displayAvatarURL)
.setDescription("Add a reaction to one of these emojis to play the game!")
.setTimestamp();

const m = await message.channel.send(embed);
const reacted = await promptMessage(m, message.author,30,chooseArr);
const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

const result = await getResult(reacted,botChoice);

await m.clearReactions();

embed
.setDescription("")
.addField(result, `${reacted} vs ${botChoice}`);
m.edit(embed);

function getResult(me,clientChosen) {

if((me=== "🗿" && clientChosen ==="✂️") ||
  (me=== "📜" && clientChosen ==="🗿")  ||
  (me=== "✂️" && clientChosen ==="📜"))  {
     return "You won!";
  } else if(me ===clientChosen) {
      return "It,s a tie";
  } else {
      return "You lost!";

  }
}
}
}