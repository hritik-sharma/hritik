module.exports = {
    name: "clear",
  aliases : ["purge","nuke"],
  category :"moderation",
    description: "clears the chat",
     run: async(client, message, args) => { 

if (message.deletable) {

message.delete ();

if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("you do not have the permission to delete messages")
let deleteAmount;
 
if(parseInt(args[0]) > 10000 ) {
    deleteAmount = 1000;
} else {
    deleteAmount = parseInt(args[0]);
}

message.channel.bulkDelete(deleteAmount, true)
   .then(deleted=> message.channel.send(`Purged \`${deleted.size}\`messages.`))
  .catch(err => message.reply(`something went wrong.... ${err}`))
 
}

 } 
    }