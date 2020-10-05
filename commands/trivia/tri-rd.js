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

];

module.exports = {
  name: "tri-rd",
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
  