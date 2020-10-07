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
{
    title:"5 Things To Remember Always: \n 1. Lun Aur Pani Apna Rasta Khud Bana Laitey Hein \n 2.Jazbat Aur Mumey Jitnay Dabaoo Barthay Hein \n  3.Doodh Phatnay Ki Aur Gand Phatnay Ki Awaz Nahi Hoti \n 4.Gari Aur Biwi Kisi Ko Mat Doo Chod Kar Wapis Mileygi \n 5.Sanp Aur Phudi Jahan Milay Mar Dooo"
},
{
    title:"A Movie On Lesbians Was Named ‘Fire’, A Movie On HomoSexuals Would Be Named ‘Backfire’, & On BiSexuals Would Be “Kabhi Pussy Kabhi Bum”"
},
{
    title:"Baba Saxidas Ji Ki Mahaan Kitab Sex Ki Bulandiyo Mein Se Ek Behad Hi Kaam Ki Baat. \n Radio Ka Antena Aur Larki Ki Taangein Jitni Jyada Uper Hogi, \n Conection Utna Hi Achha Or Behtar Hoga."
},
{
    title:"Pati Sex Karte Hue Bola- Darling Ladka Nikalu Ya Ladki? \n Patni- Dard Se Meri Gaand Fati Ja Rahi Hai. \n  Pahle Jo Dala Hai Wo Nikalo"
},
{
    title:"Pathan Biwi Se: “Aaj Hum Aage Se Sex Karega” \n  Wife Ye Sun Ke Khushi Se Salwar Utaar Ke Tangein Utha Ke Bed Pe Lait Gayi \n  Pathan: “April Fool, April Fool Banaya.“"
},
{
    title:"Husband Ne Magazine Pardhte Hue Pass \n Leti Biwi Ki Choot Main Ungli Kardi.. \n Biwi: awww Jaanu Sex Ka Mood Hai? \n Husband: Nahi Page Palantne K Liye Ungli Geeli Ki Hai."
},
{
    title:"Golden Words By Swami Lunnacharya \n  Kitab Aur Taange Kholne Se Pahle Ungli Par Thook Lagani Chahiye"
},
{
    title:"Ise Jor Jor Se Padho…. \n  Ah Aah Aaah… Uie Uiee Uieee… \n   Yes Yes Yes No No No Yes..\n  Yes Aaaaah ….. \n Dekha Hum To Mobile Pe Bhi G**Nd Mar Dete Hai!!!"
},
{
    title:"Suhagrat Pe Pati Biwi Par Chada To Biwi Hansi, \n  Fir Hansi…. Dobara Hansi Aur Zor Zor Se Hasne Lagi \n  Pati Hairan Hoke Gusse Se Bola: “Abe Sali Tujhe Kya Hua, Hass Kyu Rahi Hai?” \n Biwi Hanste Hue: “Hehehe Vo Pankhe Ke Beech Jo Gol Chakri Hai Na Uss Mein Aapki Gaand Dikh Rahi Hai“"
},
{
    title:"Parents Raat Ko Sex Kar Rahe Thhey Achanak Hi Bache Ki Neend Khull Gayi Papa: “Beta Neend Nahi Aa Rahi Kya?”Beta: “Jab Kisi Ki Maa Ch*Dh Rahi Ho To Bachhe Ko Kese Neend Aayegi“"
},
{
    title:"Bus Mein Jagah Nahi Thi To Ladki Ko 1 Uncle Ne God Me Bitha Liya. Thodi Der Mein Hi Ladki Jhatke Se Uth Gayi Or Boli: Uncle Ya To Usko Bitha Lo Ya Mujhko..!!"
},
{
    title:"Teacher Ne Science Class Mein Chinki Se Puchha. \n Teacher: “Ladki Or Ladke Mein Kya Farak Hai?” \n Chinki: “Ji Ladki Chah Kar Bhi Ek Saal Mein Sirf Ek Hi Bache Ki Maan Ban Sakti Hai Aur Ladka Chahe To Ek Saal Mein 365 Bachon Ka Baap Ban Sakta Hai.“"
},
{
    title:"Santa Ke Ghar Beta Paida Hua, Santa Khushi Se Preeto Ko Choomte Hue Bola \n  Santa: “Bilkul Mere Jaisi Aankhein Choti Si, Meri Jaisi Naak Choti Si” \n Preeto Bachhe Ka Nappy Khol Ke Sharmati Hue Boli \n  Preeto: “Yahan Baazi Maar Hi Gaya Ladka“"
},
{
    title:"Q: “Aadmi Or Bandar Mein Kya Farak Hai?” \n A: “Bandar Hamesha Daal Per Ucchalta Hai Or Aadmi Andar Daal Kar Ucchaltaa Hai“."
},
{
    title:"16 Sal Ki Umr Me… \n  Phli Bar Kiya To Khun Aya… \n  2Bar Kiya Bhut Dard Hua  \n 3 Bar Kiya Bhut Jln Hui  \n 4 Bar Smoothly Hua…  \n .  \n  .\n . \n  \n. \n . \n Sudhr Jao Kmino….Shaving Ki Bat Kr Ra Hu…. \n (‘.’) \n <))> /n Kbhi To Shuddh Socha Kr Yr"
},
{
    title:"Ek Accedient Mein Santa Ki Gaand Fatt Jaati Hai \n Wo Hospital Tanke Lagvane Jata Hai \n   Nurse Ne Us Se Pucha: “Kitni Khulli Rakhni Hai?” \n  Santa: “Jitni Aapki Hai” \n Nurse: “Fir To Aur Fadni Padegi”"
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