const {MessageEmbed} = require("discord.js");


module.exports={
    name:"eval",
    category:"info",

    run:async(client,message,args)=>{
      const remAt = text => {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
        if(message.author.id !== "661611421703995403") return;
        try {
          const code = args.join(" ");
          let evaled = eval(code);
     
          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
     
          message.channel.send(remAt(evaled), {code:"xl"});
        } catch (err) {
          message.channel.send(`\`ERROR\` \`\`\`xl\n${remAt(err)}\n\`\`\``);
        }
    }
  }