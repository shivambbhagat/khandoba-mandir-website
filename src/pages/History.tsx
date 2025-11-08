import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

const content = {
  mr: {
    title: 'इतिहास आणि महत्त्व',
    subtitle: 'श्री खंडोबा - मल्हारी मार्तंड',
    sections: [
      {
        title: 'देवाची उत्पत्ती',
        content: 'श्री खंडोबा म्हणजे भगवान शिवाचा अवतार. मल्ल आणि मणि या दोन असुरांचा वध करण्यासाठी भगवान शिवांनी मार्तंड रुपात अवतार घेतला. मल्हारी म्हणजे मल्लाचा वध करणारा आणि मार्तंड म्हणजे सूर्यासारखे तेजस्वी. श्री खंडोबा हे शौर्य, न्याय आणि भक्तीचे प्रतीक आहेत.खंडोबा किंवा खंडेराय हे मुख्यत्वे महाराष्ट्र, कर्नाटक, आंध्र प्रदेश या राज्यातील लोकप्रिय हिंदू दैवत आहे. हे दैवत महाराष्ट्रातील अनेकांचे कुलदैवत आहे. प्रामुख्याने मराठा, रामोशी (नाईक), धनगर समाजचे लोकांचे कुलदैवत मानले जाते. खंडोबाच्या परिवारात म्हाळसा, बाणाई या पत्नी; हेगडे हा प्रधान (हा बाणाईचा भाऊ आहे); कुत्रा आणि वाहन घोडा यांचा समावेश होतो. खंडोबाच्या मूर्ती बैठ्या, उभ्या व अश्वारूढ अशा स्वरूपात असून हातात डमरू, त्रिशूळ, खंडा आणि पानपत्र, चतुर्भुज, कपाळाला भंडारा असे रूप आहे. मणी व मल्ल असुरांचा संहार केल्यानंतर श्रीमार्तंड भैरवाने आपली राजधानी जयाद्रीच्या टेकडीवर स्थापन केली व कलियुगातील मानवाचे अरिष्ट दूर करण्यासाठी कायम स्वरूपी वास्तव्य केले ते जागृत स्थान म्हणजे जेजुरगड'
      },
      {
        title: 'जेजुरीचा राजा',
        content: 'जेजुरी येथे श्री खंडोबाचे मुख्य स्थान असले तरी महाराष्ट्रातील अनेक गावात श्री खंडोबाची पूजा केली जाते. निमगाव-दावडी येथील मंदिर हे अत्यंत प्राचीन आणि प्रसिद्ध आहे. येथे दरवर्षी हजारो भक्त दर्शनासाठी येतात.'
      },
      {
        title: 'मल्हारी महात्म्य',
        content: 'श्री खंडोबा भक्तांच्या प्रत्येक समस्येचे निवारण करतात. त्यांच्या भक्तीत श्रद्धा ठेवणाऱ्या प्रत्येक व्यक्तीला त्यांची कृपा लाभते. भंडारा, तूप आणि हळद अर्पण करणे हा येथील प्रमुख विधी आहे. भाद्रपद वाड्या सहावीला (चांपा षष्ठी) येथे मोठा उत्सव साजरा केला जातो.'
      },
      {
        title: 'धार्मिक महत्त्व',
        content: 'श्री खंडोबा धनगर, कोळी, आणि इतर समुदायांचे आराध्य देव आहेत. त्यांची पूजा अर्चना विशिष्ट विधींनुसार केली जाते. बनाई आणि बानेश्वर हे त्यांचे भक्त मानले जातात. येथे येणारा प्रत्येक भक्त "एलगार, देवा!" असा जयघोष करतो जो श्री खंडोबाच्या विजयाची आठवण करून देतो.'
      },
      {
        title: 'स्थापत्यकला',
        content: 'निमगाव-दावडी येथील श्री खंडोबा मंदिराची रचना प्राचीन महाराष्ट्रीय शैलीत आहे. मंदिराच्या शिखरावर सोनेरी कलश आहे जो दूरवरून दिसतो. मंदिराच्या आवारात अनेक छोटी देवाले आहेत ज्यात भगवान शिवाच्या इतर रूपांची मूर्ती आहेत.'
      }
    ],
    beliefs: {
      title: 'आस्था आणि श्रद्धा',
      items: [
        'श्री खंडोबाच्या चरणी हळद अर्पण केल्याने सर्व मनोकामना पूर्ण होतात',
        'भंडारा देऊन गरीबांना अन्नदान केल्याने देवाची कृपा लाभते',
        'चांपा षष्ठीच्या दिवशी दर्शन घेतल्याने विशेष पुण्य मिळते',
        'येथे येणाऱ्या प्रत्येक भक्ताला आध्यात्मिक शांती मिळते'
      ]
    }
  },
  en: {
    title: 'History & Significance',
    subtitle: 'Shri Khandoba - Mallari Martand',
    sections: [
      {
        title: 'Divine Origin',
        content: 'Shri Khandoba is an incarnation of Lord Shiva. To destroy two demons named Malla and Mani, Lord Shiva took avatar as Martand. Malhari means one who killed Malla and Martand means radiant as the sun. Shri Khandoba represents courage, justice and devotion.'
      },
      {
        title: 'King of Jejuri',
        content: 'While Jejuri is the main abode of Shri Khandoba, he is worshipped in many villages across Maharashtra. The temple at Nimgaon-Davadi is very ancient and famous. Thousands of devotees visit here every year for darshan.'
      },
      {
        title: 'Malhari Glory',
        content: 'Shri Khandoba resolves all problems of his devotees. Every person who has faith in his devotion receives his grace. Offering Bhandara, ghee and turmeric is the main ritual here. A grand celebration is held on Bhadrapad Vadya Shashthi (Champa Shashthi).'
      },
      {
        title: 'Religious Significance',
        content: 'Shri Khandoba is the deity of Dhangar, Koli, and other communities. His worship is performed according to specific rituals. Banai and Baneshwar are considered his devotees. Every devotee who comes here chants "Elgar, Deva!" which reminds of Shri Khandoba\'s victory.'
      },
      {
        title: 'Architecture',
        content: 'The Shri Khandoba temple at Nimgaon-Davadi is designed in ancient Maharashtrian style. The temple spire has a golden kalash visible from afar. The temple premises have many small shrines containing idols of other forms of Lord Shiva.'
      }
    ],
    beliefs: {
      title: 'Faith & Devotion',
      items: [
        'Offering turmeric at Shri Khandoba\'s feet fulfills all wishes',
        'Donating food to the poor through Bhandara brings divine grace',
        'Taking darshan on Champa Shashthi brings special blessings',
        'Every devotee who visits here receives spiritual peace'
      ]
    }
  },
  hi: {
    title: 'इतिहास और महत्व',
    subtitle: 'श्री खंडोबा - मल्हारी मार्तंड',
    sections: [
      {
        title: 'देव की उत्पत्ति',
        content: 'श्री खंडोबा भगवान शिव का अवतार हैं। मल्ल और मणि नामक दो असुरों का वध करने के लिए भगवान शिव ने मार्तंड रूप में अवतार लिया। मल्हारी का अर्थ है मल्ल का वध करने वाला और मार्तंड का अर्थ है सूर्य के समान तेजस्वी। श्री खंडोबा शौर्य, न्याय और भक्ति के प्रतीक हैं।'
      },
      {
        title: 'जेजुरी के राजा',
        content: 'जेजुरी में श्री खंडोबा का मुख्य स्थान है, लेकिन महाराष्ट्र के कई गांवों में श्री खंडोबा की पूजा की जाती है। निमगांव-दावडी का मंदिर अत्यंत प्राचीन और प्रसिद्ध है। यहां हर साल हजारों भक्त दर्शन के लिए आते हैं।'
      },
      {
        title: 'मल्हारी महात्म्य',
        content: 'श्री खंडोबा भक्तों की हर समस्या का समाधान करते हैं। उनकी भक्ति में श्रद्धा रखने वाले हर व्यक्ति को उनकी कृपा मिलती है। भंडारा, घी और हल्दी चढ़ाना यहां का मुख्य विधि है। भाद्रपद वाड्या षष्ठी (चांपा षष्ठी) को यहां बड़ा उत्सव मनाया जाता है।'
      },
      {
        title: 'धार्मिक महत्व',
        content: 'श्री खंडोबा धनगर, कोली और अन्य समुदायों के आराध्य देव हैं। उनकी पूजा विशिष्ट विधियों के अनुसार की जाती है। बनाई और बानेश्वर उनके भक्त माने जाते हैं। यहां आने वाला हर भक्त "एलगार, देवा!" का जयघोष करता है जो श्री खंडोबा की विजय की याद दिलाता है।'
      },
      {
        title: 'स्थापत्य कला',
        content: 'निमगांव-दावडी के श्री खंडोबा मंदिर की रचना प्राचीन महाराष्ट्रीय शैली में है। मंदिर के शिखर पर स्वर्ण कलश है जो दूर से दिखाई देता है। मंदिर परिसर में कई छोटे मंदिर हैं जिनमें भगवान शिव के अन्य रूपों की मूर्तियां हैं।'
      }
    ],
    beliefs: {
      title: 'आस्था और श्रद्धा',
      items: [
        'श्री खंडोबा के चरणों में हल्दी चढ़ाने से सभी मनोकामनाएं पूर्ण होती हैं',
        'भंडारा देकर गरीबों को अन्नदान करने से देव की कृपा मिलती है',
        'चांपा षष्ठी के दिन दर्शन करने से विशेष पुण्य मिलता है',
        'यहां आने वाले हर भक्त को आध्यात्मिक शांति मिलती है'
      ]
    }
  }
};

const History = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t.title}</h1>
          <p className="text-xl text-primary font-semibold">{t.subtitle}</p>
        </div>

        {/* Main Sections */}
        <div className="space-y-8 mb-12">
          {t.sections.map((section, index) => (
            <Card key={index} className="p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{section.content}</p>
            </Card>
          ))}
        </div>

        {/* Beliefs Section */}
        <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">{t.beliefs.title}</h2>
          <ul className="space-y-4">
            {t.beliefs.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✦</span>
                <span className="text-muted-foreground text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default History;
