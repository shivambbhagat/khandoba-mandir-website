import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Sun, Moon, Star, Calendar } from 'lucide-react';

const content = {
  mr: {
    title: 'उत्सव आणि सण',
    subtitle: 'श्री खंडोबा मंदिरातील विविध धार्मिक उत्सव',
    festivals: [
      {
        name: 'चंपा षष्ठी',
        date: 'मार्गशीर्ष शुक्ल षष्ठी',
        description: 'हा श्री खंडोबाचा सर्वात महत्त्वाचा उत्सव आहे. या दिवशी मोठ्या प्रमाणावर भाविक दर्शनासाठी येतात.',
        significance: 'खंडोबा आणि मल्हाळशी यांच्या विवाहाची आठवण म्हणून हा उत्सव साजरा केला जातो.',
        activities: ['विशेष पूजा', 'भांडारा', 'जागरण गोंधळ', 'रथयात्रा']
      },
      {
        name: 'सोमवती अमावस्या',
        date: 'सोमवारी येणारी अमावस्या',
        description: 'विशेष पूजा आणि अभिषेकाचा दिवस. या दिवशी मंदिरात विशेष धार्मिक कार्यक्रम आयोजित केले जातात.',
        significance: 'सोमवारी येणारी अमावस्या खंडोबा भक्तांसाठी अत्यंत शुभ मानली जाते.',
        activities: ['रुद्राभिषेक', 'हवन', 'अन्नदान', 'भजन-कीर्तन']
      },
      {
        name: 'कोजागिरी पौर्णिमा',
        date: 'आश्विन पौर्णिमा',
        description: 'पौर्णिमेच्या रात्री विशेष पूजा आणि जागरण होते. भाविक रात्रभर मंदिरात भजन-कीर्तन करतात.',
        significance: 'या रात्री देवता भक्तांच्या मनोकामना पूर्ण करतात असे मानले जाते.',
        activities: ['रात्री जागरण', 'चंद्रदर्शन पूजा', 'प्रसाद वाटप', 'भजन मंडळी']
      },
      {
        name: 'विजयादशमी (दसरा)',
        date: 'आश्विन शुक्ल दशमी',
        description: 'विजयाचा उत्सव. या दिवशी खंडोबाची शस्त्रपूजा केली जाते.',
        significance: 'खंडोबा हे योद्धा देवता असल्याने विजयादशमी विशेष महत्त्वाचा आहे.',
        activities: ['शस्त्रपूजा', 'शोभायात्रा', 'सांस्कृतिक कार्यक्रम', 'मेळावा']
      },
      {
        name: 'कार्तिक पौर्णिमा',
        date: 'कार्तिक पौर्णिमा',
        description: 'दिव्य प्रकाशाचा उत्सव. मंदिराला दिव्यांनी सजवले जाते.',
        significance: 'या दिवशी केलेल्या दानाचे विशेष महत्त्व आहे.',
        activities: ['दीप उत्सव', 'महाआरती', 'तुलादान', 'साधुसंत आवभगत']
      }
    ]
  },
  en: {
    title: 'Festivals & Celebrations',
    subtitle: 'Major religious festivals at Shri Khandoba Temple',
    festivals: [
      {
        name: 'Champa Shashthi',
        date: 'Margashirsha Shukla Shashthi',
        description: 'This is the most important festival of Shri Khandoba. Thousands of devotees visit the temple on this day.',
        significance: 'Celebrated to commemorate the divine marriage of Khandoba and Mhalsa.',
        activities: ['Special Puja', 'Mass Feast', 'Jagaran Gondhal', 'Chariot Procession']
      },
      {
        name: 'Somavati Amavasya',
        date: 'Amavasya falling on Monday',
        description: 'A day of special worship and abhishek. Special religious programs are organized at the temple.',
        significance: 'Amavasya falling on Monday is considered extremely auspicious for Khandoba devotees.',
        activities: ['Rudrabhishek', 'Havan', 'Food Donation', 'Bhajan-Kirtan']
      },
      {
        name: 'Kojagiri Purnima',
        date: 'Ashwin Purnima',
        description: 'Special puja and night vigil on full moon night. Devotees sing bhajans throughout the night.',
        significance: 'It is believed that the deity fulfills wishes of devotees on this night.',
        activities: ['Night Vigil', 'Moon Worship', 'Prasad Distribution', 'Bhajan Groups']
      },
      {
        name: 'Vijayadashami (Dussehra)',
        date: 'Ashwin Shukla Dashami',
        description: 'Festival of victory. Weapon worship of Khandoba is performed on this day.',
        significance: 'As Khandoba is a warrior deity, Vijayadashami holds special importance.',
        activities: ['Weapon Worship', 'Procession', 'Cultural Programs', 'Fair']
      },
      {
        name: 'Kartik Purnima',
        date: 'Kartik Purnima',
        description: 'Festival of divine lights. The temple is decorated with lamps.',
        significance: 'Donations made on this day are considered especially meritorious.',
        activities: ['Lamp Festival', 'Grand Aarti', 'Tuladaan', 'Sadhu Hospitality']
      }
    ]
  },
  hi: {
    title: 'उत्सव और समारोह',
    subtitle: 'श्री खंडोबा मंदिर के प्रमुख धार्मिक उत्सव',
    festivals: [
      {
        name: 'चंपा षष्ठी',
        date: 'मार्गशीर्ष शुक्ल षष्ठी',
        description: 'यह श्री खंडोबा का सबसे महत्वपूर्ण उत्सव है। इस दिन हजारों भक्त दर्शन के लिए आते हैं।',
        significance: 'खंडोबा और मल्हालसा के दिव्य विवाह की याद में मनाया जाता है।',
        activities: ['विशेष पूजा', 'भंडारा', 'जागरण गोंदल', 'रथयात्रा']
      },
      {
        name: 'सोमवती अमावस्या',
        date: 'सोमवार को आने वाली अमावस्या',
        description: 'विशेष पूजा और अभिषेक का दिन। मंदिर में विशेष धार्मिक कार्यक्रम आयोजित किए जाते हैं।',
        significance: 'सोमवार को आने वाली अमावस्या खंडोबा भक्तों के लिए अत्यंत शुभ मानी जाती है।',
        activities: ['रुद्राभिषेक', 'हवन', 'अन्नदान', 'भजन-कीर्तन']
      },
      {
        name: 'कोजागिरी पूर्णिमा',
        date: 'आश्विन पूर्णिमा',
        description: 'पूर्णिमा की रात विशेष पूजा और जागरण होता है। भक्त रात भर भजन-कीर्तन करते हैं।',
        significance: 'यह माना जाता है कि इस रात देवता भक्तों की मनोकामनाएं पूरी करते हैं।',
        activities: ['रात्रि जागरण', 'चंद्र पूजा', 'प्रसाद वितरण', 'भजन मंडली']
      },
      {
        name: 'विजयादशमी (दशहरा)',
        date: 'आश्विन शुक्ल दशमी',
        description: 'विजय का उत्सव। इस दिन खंडोबा की शस्त्र पूजा की जाती है।',
        significance: 'खंडोबा योद्धा देवता होने के कारण विजयादशमी विशेष महत्व रखता है।',
        activities: ['शस्त्र पूजा', 'शोभायात्रा', 'सांस्कृतिक कार्यक्रम', 'मेला']
      },
      {
        name: 'कार्तिक पूर्णिमा',
        date: 'कार्तिक पूर्णिमा',
        description: 'दिव्य प्रकाश का उत्सव। मंदिर को दीपों से सजाया जाता है।',
        significance: 'इस दिन किए गए दान का विशेष महत्व है।',
        activities: ['दीप उत्सव', 'महाआरती', 'तुलादान', 'साधु सत्कार']
      }
    ]
  }
};

const festivalIcons = [Sparkles, Sun, Moon, Star, Calendar];

const Utsav = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            {t.title}
          </h1>
          <div className="flex justify-center my-6">
            <div className="h-1 w-32 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Festivals Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-20">
            {t.festivals.map((festival, index) => (
              <div key={index} className="scroll-mt-20">
                {/* Festival Title */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {festival.name}
                  </h2>
                  <div className="flex justify-center">
                    <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
                  </div>
                </div>

                {/* Two Column Layout */}
                <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Content Column */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="space-y-4">
                      <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                        <p className="text-primary font-semibold">{festival.date}</p>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {festival.description}
                      </p>
                      
                      <div className="border-l-4 border-primary pl-6 py-2">
                        <h3 className="font-bold text-foreground mb-2 text-lg">
                          {language === 'mr' ? 'महत्त्व:' : language === 'hi' ? 'महत्व:' : 'Significance:'}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {festival.significance}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-foreground mb-4 text-lg">
                          {language === 'mr' ? 'कार्यक्रम:' : language === 'hi' ? 'कार्यक्रम:' : 'Activities:'}
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {festival.activities.map((activity, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-muted-foreground"
                            >
                              <div className="w-2 h-2 rounded-full bg-primary" />
                              <span className="text-sm font-medium">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <img 
                        src="/src/assets/khandoba-deity.jpeg"
                        alt={festival.name}
                        className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-2">
                          {festivalIcons[index] && 
                            React.createElement(festivalIcons[index], {
                              className: "w-8 h-8 text-white drop-shadow-lg"
                            })
                          }
                          <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                            {festival.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Utsav;
