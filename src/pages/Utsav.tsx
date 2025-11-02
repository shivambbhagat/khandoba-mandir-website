import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Calendar, Sparkles, Sun, Moon, Star } from 'lucide-react';

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
          <Calendar className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t.title}</h1>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>
      </section>

      {/* Festivals Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-8">
            {t.festivals.map((festival, index) => {
              const Icon = festivalIcons[index];
              return (
                <Card key={index} className="p-8 md:p-10 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">{festival.name}</h2>
                        <p className="text-primary font-medium">{festival.date}</p>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {festival.description}
                      </p>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">
                          {language === 'mr' ? 'महत्त्व:' : language === 'hi' ? 'महत्व:' : 'Significance:'}
                        </h3>
                        <p className="text-muted-foreground">{festival.significance}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">
                          {language === 'mr' ? 'कार्यक्रम:' : language === 'hi' ? 'कार्यक्रम:' : 'Activities:'}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {festival.activities.map((activity, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Utsav;
