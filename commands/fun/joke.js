const {MessageEmbed,Message} = require("discord.js");
let jokes = [

{
title:"hey nice",

},
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
]

module.exports ={
    name:"joke",
    category:"fun",
    run:async(client,message,args) =>{

        let j = jokes[Math.floor(Math.random() * jokes.length)];

        message.channel.send(j.title)
    }
}