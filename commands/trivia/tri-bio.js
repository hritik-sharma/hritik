const { MessageEmbed } = require("discord.js");
let questions = [
 

 

{
  title: " Which of the following is a large blood vessel that carries blood away from the heart? ",
  options: ["Vein", "Artery", " Capillary", "Nerve"],
  correct: 3,
},

{
  title: "Fungi are plants that lack ",
  options: ["Oxygen", "Carbon dioxide", "Chlorophyll", " None of these"],
  correct: 3,
},

{
  title: "What makes a reptile a reptile?",
  options: ["Cold blooded", "Warm Blooded", "Non-Hearing", " Egg-laying"],
  correct: 4,
},
{
  title: "Which of the following is an air-borne disease? ",
  options: [" Measles", "Typhoid", "Pink eye", " None of the above"],
  correct: 1,
},
{
  title: "Which organ of the body produces the fluid known as bile? ",
  options: ["Liver", ". Pancreas", "Gall bladder", ". Kidney"],
  correct: 1,
},
{
  title: " Which one of the following is not a function of the liver? ",
  options: [" Regulation of blood sugar", "Enzyme activation", " Detoxification", "Pump blood"],
  correct: 4,
},


{
  title: " Greatest number of Sweat glands are present in which part of the human body?",
  options: ["Forehead", "Forearm", "Palm of the hand", "Back"],
  correct: 3,
},

{
  title: "Mention the source of Liver, milk, egg yolk, fish liver oil?",
  options: ["Vitamin B2", "Vitamin A", " Vitamin D", " Vitamin C"],
  correct: 3,
},

{
  title: "Heart is made up of",
  options: [" Non-striated muscle", "Cardiac muscle", "Adipose tissue", " Striated muscle"],
  correct: 2,
},

{
  title: "Name the corona virus that kills human?",
  options: ["AIDS", "FAIDS", "SARS", "HIV"],
  correct: 3,
},

{
  title: "In which part of the body digestion of protein starts?",
  options: ["Mouth", "Stomach", "Duodenum", "Intestine"],
  correct: 2,
},

];

module.exports = {
  name: "tri-bio",
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