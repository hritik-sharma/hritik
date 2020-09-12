const { Client,Collection, MessageEmbed } = require("discord.js")

const fs = require("fs")
const client = new Client ({ 
    disableEveryone:"true" // This makes sure that the bot does not mention everyone
});
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/")
const config = require("./config.json") // enter your bot prefix in the config.json file
const prefix = config.prefix;

['command'].forEach(handler=>{
    require(`./handler/${handler}`)(client);
})
client.on("ready",()=>{
    console.log("Tutorial Bot is online")
    setInterval(() => {
        const statuses = [
        'Working 24/7 for your server',
        'Streaming for 25 servers'
        ]
        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status,{type: "Playing"})
    }, 5000);
})

client.on("message",async message =>{
    client.prefix = prefix;
    if(message.author.bot) return; // This line makes sure that the bot does not respond to other bots
    if(!message.guild) return;
    if(!message.content.startsWith(prefix)) return; // This line makes sure that the bot does not respond to other messages with the bots prefix
    if(!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length ===0) return;

    let command = client.commands.get(cmd);
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command)
    command.run(client,message,args);
})
client.login(process.env.token);

client.on('message', message=>{
    if (message.content ===`${prefix}server name`){
        message.channel.send(message.guild.name);
    }else if (message.content=== `${prefix}members`) {
        message.channel.send(`Total Members: ${message.guild.memberCount}`);
    }
    else if (message.content ===`${prefix}userid`) {
        message.channel.send(`Username: ${message.author.username }`);
        message.channel.send(`ID ${message.author.id}`);
    }
});
	
	