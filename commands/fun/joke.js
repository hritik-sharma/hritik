const {MessageEmbed,Message} = require("discord.js");
let jokes = [

{
    title: "ज़रुरत से ज्यादा भगवान को याद मत किया करो क्योंकि… \n किसी दिन भगवान ने याद कर लिया तो..?? \n लेने के देने पड़ जायेंगे ।😝😛😛"
},

{
    title: "“काम ऐसे करो कि लोग आपको… \n  किसी दूसरे काम के लिए बोलें ही नहीं” \n 😂😂😜😝"
},
{
    title: "आज के जमाने में सत्संग उसी संत का बढ़िया रहता है, जिसके पंडाल में गर्म पोहा, समोसा जलेबी और अदरक वाली चाय मिले। \n वरना ज्ञान तो अब ऑनलाइन उपलब्ध है ।😃"
},

{
    title: "😄 \n आप कितने ही अच्छे काम कर लें, लेकिन लोग उसे ही याद करते हैं, \n जो उधार लेकर मरा हो ।😃"
},
{
    title: "😃\n  जब आप किसी चीज को पूरी शिद्दत से पाने की ख्वाहिश या कोशिश करते हैं, तो वह चीज\n .\n .\n  उसी शिद्दत से कुछ ज्यादा ही एटीट्यूड दिखाने लगती है।😃"
},
{
    title: "😃\n  आदमी अपने घर में सिर्फ दो ही कारणों से खुश होता है: \n जब बीवी ” नई ” हो \n या \n बीवी ” नहीं ” हो 😝"
},
{
    title:"😃 /n What’s app का सबसे बड़ा फायदा क्या है ?? \n बहुत सारी औरतें आपस में बात करती हैं फिर भी आवाज़ ही नहीं होती \n 😊"
},

{
    title:"😊  जीवन में कम से कम एक सच्चा मित्र हमेशा अपने पास रखो \n ताकि….. \n . \n  . \n  जिस दिन आपके यहाँ तुरई, करेला या लाैकी की सब्जी बने उस दिन उसके घर जाकर खाना खा सको…..। 😜😜😜"
},
{
    title:"दुकानदार : कैसा सूट दिखाऊँ ? \n महिला : पड़ोसन तड़प – तड़प कर दम तोड़ दे ऐसा ……😝😜😝😜😝😜"
},
{
    title:"खून में तेरे गर्मी , गर्मी में तेरा खून …. ऊपर सूरज निचे धरती बीच में May aur june 😂😁 हे भगवान् 😬😝😜"
},
{
    title:"पत्नी:- अजी सुनते हो ? हमारी शादी करवाने वाले पंडित जी का देहांत हो गया 😔😔😔😔😔 \n पति:- एक ना एक दिन तो उसे उसके कर्मों का फल मिलना ही था.😂😂😂😂😝😜😛 "
},
{
    title:"aaj ka social media \n कॉकरोच देख कर चिल्लाते हुये दस किलोमीटर तक भागने वाले पाकिस्तान को धमका रहे होते हैं कि “अब भी वक्त है सुधर जाओ”। "
},
{
    title:"Most Boys Don’T Lyk Touch Screen Mobile, U Know Why? Jinhe Dabane Ki Aadatho,Unhe Bas Touch Karneme Kahan Maza Aayega…!!!!"
},
{
    title:"Pathan Ki Biwi Suhagrat Ke Baad Us Se Ladte Hue Boli.\n Biwi: “Mere Ko Abhi Talak Chahiye” \n Pathan Ke Tote Ud Gaye, Hairani Se Puchha \n Pathan: “Par Begum Kyu?” \n Biwi: “Abe Jitna Tera Smaan Hai, Us Se Badi To Shabir Bhai Ki Zuban Hai“"
},
{
    title:"3 Married Lady* First- Mere Pati To Pura Hath Ghusa Dete Hai. Second- Mere To Pair Bhi. Teesri- Apni Saari Uthake Boli: Aji… Bahar Niklo G"
},
{
    title:"Ek Baar Class Mein Ek Nayi Ladki Aayi \n Teacher Ne Us Se Pucha \n Teacher: ?Tumhara Naam Kya Hai?? \n Ladki: Ji, Pinki? \n Teacher: Aage Ya Piche Kuch Lagati Ho?? \n Ladki Sharmate Hue: Ji Aage Veet Cream Aur \n Piche Sarson Ka Tel!"
},
{
    title:"Dr.: Apke Pati Ko Bhut Kamjori Hai, Rozana Doodh Dijiye. Lady: Roz Deti Hun Dr.Saab, Lekin Ye Dabate Jyada Hain Or Peete Kam Hai."
},
{
    title:"Ladki: “Jaanu Mere Muh Mein Daalo, Main Choosungi” \n Ladka: “Nahi Nahi, Tum Kha Gayi To Main Kya Karunga?” \n Ladki: “Yaar Itne Kanjus Na Bano, Tum Doosri Cornetto Le Lena“"
},
{
    title:"Teacher Ne Class Mein Question Pucha \n Teacher: Videsh Ke Bachhe Gore Aur Yahan Ke Kale Kyun Hote Hai \n  Santa: Madam Ji, Kyun Ki Wahan Ponds Cream Laga Ke Chudayi Hoti Hai Aur Yahan Sarso Ke Tel Se "
},
{
    title:"Ek Gaanv Ke Shareef Ladke Ki Shaadi Shehar Ki Sexy Ladki Ke Saath Ho Jaati Hai. \n  Suhagraat Ko Jab Pati Sone Laga To Patni Ne Kaha. \n Patni: “Aaj Hamari Suhagraat Hai Kuch Karoge Nahi?” \n  Pati Hairan Hote Hue: “Kya Karna Hai?” \n Patni: “Jo Karna Chahiye” \n Pati: “Mujhe Nahi Pata” \n Patni Ka Sex Karne Ka Bahot Man Ho Raha Tha To Usne Pati Ko Kaha. \n Patni: “Agar Tumhe Nahi Pata To Jese Mein Karungi Vese Karte Jana”  \n Patni Ne Apne Sare Kapde Utaar Diye To Pati Ne Bhi Utaar Diye. \n Patni Bed Pe Taange Upar Kar Ke Late Gayi To Pati Bhi Aise Hi Late Gaya \n Patni Gusse Se: “Behan Ke Lode Chootiye Aisa Kar Bahar Se Do Admi Le Aa Ek Teri Le Lega Aur Ek Meri“"
},
{
    title:"Santa: Sex Karte Hue Apni Wife Se Aur Tight Ah, Aur Tight Kar Gulabo: Kamine Itna Tight Hona Hai To Bahar Jake Ganne Ke Ras Wali Mashin Mein Dal Le."
},
{
    title:"Boy To Girl. Boy- Can I Touch Your Software ? Girl- Show Me First Your Hardware. Boy- Can I Install It In Your System? Girl- Yes Ok, If U Cover It From Anti-Virus."
},
{
    title:"Ustad Chodumal Khan Sahab Ne Ek Din Subha Uthte Hi Ek Sher Farmaya \n  Koi To Hai Jo Hume Duao Mein Mang Raha Hai \n  Warna Roj Subha Subha Samaan Yun Hi Khada Nahi Hota"
},

{
    title:"Ek Patni Apne Pati Se Puchti Hai: “Suno Ji In Kutton Ko Kaise Pata Chalta Hai Ki Kutiya Ka Mann Ker Raha Hai?” \n Pati: “Unhe Soongh Kar Pata Chalta Hai” \n Patni Gusse Se Boli: “To Bhonsdi Ke Tujhe Jukaam Hai Kya?“"
},
{
    title:"Baccha Juice Ki Dukan Par..\n “Papa Kya Koi Aisi Ulti Machine Nahi Hai Jisme Juice Dalo To Fal Nikle?” \n Papa- Hai Na Beta, \n Tu Usi Ka To Fal Hai"
},
]

module.exports ={
    name:"joke",
    category:"fun",
    run:async(client,message,args) =>{

        let j = jokes[Math.floor(Math.random() * jokes.length)];

        message.channel.send(j.title)
    }
}