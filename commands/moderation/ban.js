const{MessageEmbed,Message} = require ("discord.js")

module.exports ={
    name:"ban",
    category:"moderation",

    run:async(client,msg,args) =>{
        if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply({embed:{color:"RED",description: 'You dont have permission to use this command'}});
  var user = msg.mentions.users.first();
 if (!user) return msg.reply ({embed:{color :"RED", description:"Mention a user to ban"}});

 var member;
 try {
     member = await msg.guild.members.fetch(user);
 } catch(err) {

    member = null;
 }
 if(!member) return msg.reply({embed:{color:"RED", description:"The specified user is not in server"}})
 if(member){
     if(member.hasPermission('BAN_MEMBERS')) return msg.reply ({embed:{color:"RED",description:"cannot kick this user , has ban members permission"}});
   
     var reason = args.slice(1).join(' ');
     if(!reason) return msg.reply({embed:{color:"RED",description:"Mention a reason to ban the user"}})

     var channel = msg.guild.channels.cache.find(c => c.name === 'potato');

     var embed = new MessageEmbed()
     .setTitle('User Banned')
     .addField('User:',user , true)
     .addField('By:',msg.author,true) 
     .addField('Reason:', reason) 
     msg.channel.send(embed)
     
     var embed = new MessageEmbed()
       .setTitle("You were banned!")
        .setDescription(reason); 
        try{
             await user.send(embed)
             }catch(err) {
                  console.warn(err)
                 }
                  msg.guild.members.ban(user);
                   msg.channel.send({embed:{color:"GREEN",description:`${user} has been banned by ${msg.author}`}});
                }
             }
            }
      