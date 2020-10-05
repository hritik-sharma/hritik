const { MessageEmbed } = require("discord.js");




let questions = [
  {
    title: "Best programming language",
    options: ["JavaScript/TypeScript", "Python", "Ruby", "Rust"],
    correct: 1,
  },
  {
    title: "World's 5th best economy in the world",
    options: ["India", "Germany", "England", "Japan"],
    correct: 1,
  },
 { title: "which country saw a world record 315 million voters turn out for elections on May 20,1991?",
    options: ["India","Poland","Soviet Union","USA"],
    correct: 1,
},
{
  title: "Electric bulb filament is made of?",
  options: ["copper", "Aluminium", "Lead", "Tungsten"],
  correct: 4,
},



{
  title: "India is a federal union comprising twenty-nine states and how many union territories?",
  options: ["6", "7", "8", "9"],
  correct: 4,
},
{
  title: "Which of the following states is not located in the North India? ",
  options: ["Jharkhand", "Jammu and Kashmir", "Himachal Pradesh", "Haryana"],
  correct: 1,
},
{
  title: "Which is the largest coffee producing state of India?",
  options: ["Kerala", "Tamil Nadu", "Karnataka", "Arunachal Pradesh"],
  correct: 3,
},
{
  title: "Which state has the largest area in India?",
  options: ["Maharashtra", "Madhya Pradesh", "Uttar Pradesh", "Rajasthan"],
  correct: 4,
},


{
    title: "Which state has the largest population in India?",
    options: ["Uttar Pradesh", "Maharastra", "Bihar", "Andra Pradesh"],
    correct: 1,
  },
  
{
    title: "Dead sea is located between which two countries?",
    options: ["Jordan and Sudan", "Jordan and Israel", "Turkey and UAE", "UAE and Egypt"],
    correct: 2,
  },
  
  {
    title: "Which country gifted Statue of Liberty to USA in 1886?",
    options: ["France", "Canada", "Brazil", "England"],
    correct: 1,
  },
  {
    title: "In which ocean Bermuda Triangle region is located?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correct: 1,
  },
  {
    title: "Which country has the highest no. of countries?",
    options: ["Asia", "Europe", "North America", "Africa"],
    correct: 4,
  },
  
];

module.exports = {
  name: "tri-gk",
  description: "Test your knowledge!",
  category: "trivia",
  run: async (bot, message, args) => {
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new MessageEmbed()

      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`GREEN`)
      .setFooter(`${message.author.tag} Reply to this message with the correct no.! You have 15 seconds.`
      );
    message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`You got it correct!`);
      } else {
        return message.channel.send(`You got it incorrect.`);
      }
    } catch (e) {
      return message.channel.send(`You did not answer in time!`);
    }
  },
}
  