const { MessageEmbed } = require("discord.js");
let questions = [
 

{
  title: "What is the name of the National-award winning Bollywood choreographer, who recently passed away?",
  options: ["Saroj Khan", "Protik Prakash", " Tridib Ghosh", "Geetha Nagabhushan"],
  correct: 1,
},
{
  title: "Which Bollywood personality was named by NITI Aayog to promote the Women Entrepreneurship platform (WEP)?",
  options: ["Salman Khan", "Akshay Kumar", "Sushant Singh Rajput", "Vidya Balan"],
  correct: 3,
},
{
  title: "The Versatile Bollywood actor Irrfan Khan, who recently passed away, had won National award for which movie?",
  options: ["Lunch Box", "Paan Singh Tomar", "Life of Pi", "Haider"],
  correct: 2,
},
{
  title: "Which Bollywood celebrity has been appointed as the first ever brand ambassador of IDFC FIRST Bank?",
  options: ["Ranveer Singh", "Amitabh Bachchan", "Shah Rukh Khan", "Salman Khan"],
  correct: 2,
},
{
  title: "As of 2020, which is the only Bollywood movie to win 13 Filmfare Awards?",
  options: ["Uri: The Surgical Strike", "Article 15 ", "Saand Ki Aankh", "Gully Boy"],
  correct: 4,
},
{
  title: "Which of the following movies has became the first Bollywood film ever to release in Saudi Arabia?",
  options: ["Pad Man", "Raazi", "Gold", "Parmanu"],
  correct: 3,
},
{
  title: "Which Bollywood personality has been honoured by European Union for strengthening Europe-India cultural ties?",
  options: [" Akshay Kumar", "Amitabh Bachchan", "Deepika Padukone", " Priyanka Chopra"],
  correct: 2,
},
{
  title: "Preity Zinta made her debut in this film.",
  options: ["Soldier", "Dil Se", "Sangharsh", "Kya Kehna"],
  correct: 2,
},



];

module.exports = {
  name: "tri-ent",
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
};