const { MessageEmbed } = require("discord.js");




let questions = [


{
  title: "Which of the following is a non-metal liquid at room temperature?",
  options: ["Phosphorus", "Bromine", "Chlorine", "Helium"],
  correct: 2,
},
{
  title: "Which of the following metals forms an amalgam with pther metals? ",
  options: ["Tin", "Mercury", "Lead", "Zinc"],
  correct: 2,
},



{
  title: "In which form the chemical compound RDX is used?",
  options: ["As an composition", "As an reactor", "As an explosive", "As an nuclear weapon"],
  correct: 3,
},
{
  title: "Tell the composition of soap?",
  options: ["Sodium salt with fatty acids.", "Potassium salt with fatty acids", "Both a & b", "Sodium and Potassium salt mixed with chemicals"],
  correct: 3,
},
{
  title: "Which of the following compound is not used as an an alkali?",
  options: ["Sodium hydroxide", "Potassium hydroxide", "Carbon hydroxide", "Nitrogen hydroxide"],
  correct: 4,
},
{
  title: "Natural rubber is a ________ which is having high elasticity.",
  options: ["Substance", "Material", "Elastomer", "Chemical using carbon as main compound"],
  correct: 3,
},


{
  title: "Isotones are those which have: Isotones are those which have: ",
  options: ["Equal number of protons", "Equal number of neutrons", "Equal number of nucleons", "None of these"],
  correct: 2,
},

{
  title: "Which of the following is not a radioactive element?",
  options: ["Astatine", "Francium", "Titanium", "Zirconium"],
  correct: 4,
},

{
  title: "How many charges alpha-rays consist of",
  options: ["Two unit positive charges", "Unit negative charge", "Unit positive charge", "None of these"],
  correct: 1,
},
{
  title: "The higher boiling point of the water occurs due to:",
  options: ["Its more specific heat", "Its more value of the dielectric constant", "Less molecular disassociation in H20", "Presence of hydrogen bonding among the molecules of H20"],
  correct: 4,
},
//10
];

module.exports = {
  name: "tri-chem",
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
  