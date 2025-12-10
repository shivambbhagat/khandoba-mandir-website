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
        name: 'माघ पौर्णिमा - शाही लग्न सोहळा',
        date: 'माघ पौर्णिमा',
        description: 'माघ पौर्णिमेला श्री खंडोबा आणि मल्हाळसाई यांचा शाही लग्न सोहळा साजरा केला जातो. हा उत्सव अत्यंत भव्य आणि दिमाखदार असतो.',
        significance: 'खंडोबा आणि मल्हाळसा यांच्या दिव्य विवाहाचा हा पवित्र दिवस आहे.',
        activities: ['शाही लग्न सोहळा', 'विशेष पूजा', 'भांडारा', 'जागरण गोंधळ']
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
        name: 'Magh Purnima - Royal Wedding Ceremony',
        date: 'Magh Purnima',
        description: 'On Magh Purnima, the grand royal wedding ceremony (Shahi Lagan Sohala) of Shri Khandoba and Mhalsa is celebrated with great pomp and splendor.',
        significance: 'This sacred day commemorates the divine marriage of Khandoba and Mhalsa.',
        activities: ['Royal Wedding Ceremony', 'Special Puja', 'Mass Feast', 'Jagaran Gondhal']
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
        name: 'माघ पूर्णिमा - शाही लग्न सोहाला',
        date: 'माघ पूर्णिमा',
        description: 'माघ पूर्णिमा पर श्री खंडोबा और मल्हाळसाई का शाही लग्न सोहाला धूमधाम से मनाया जाता है। यह उत्सव अत्यंत भव्य और शानदार होता है।',
        significance: 'खंडोबा और मल्हाळसा के दिव्य विवाह का यह पवित्र दिन है।',
        activities: ['शाही लग्न सोहाला', 'विशेष पूजा', 'भंडारा', 'जागरण गोंदल']
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
    <div className="min-h-screen bg-background w-full">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-br from-orange-100 via-yellow-100 to-red-100 dark:from-orange-950/20 dark:via-yellow-950/20 dark:to-red-950/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto w-full max-w-5xl text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 leading-tight">
            {t.title}
          </h1>
          <div className="flex justify-center my-4 sm:my-6">
            <div className="h-1.5 sm:h-2 w-20 sm:w-24 md:w-32 bg-gradient-to-r from-primary via-secondary to-accent rounded-full shadow-lg" />
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">{t.subtitle}</p>
        </div>
      </section>

      {/* Festivals Section */}
      <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-br from-orange-50/30 via-yellow-50/30 to-red-50/30 dark:from-orange-950/5 dark:via-yellow-950/5 dark:to-red-950/5">
        <div className="container mx-auto w-full max-w-6xl">
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {t.festivals.map((festival, index) => (
              <div key={index} className="scroll-mt-20">
                {/* Festival Title */}
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mb-3 sm:mb-4">
                    {festival.name}
                  </h2>
                  <div className="flex justify-center">
                    <div className="h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full shadow-lg" />
                  </div>
                </div>

                {/* Two Column Layout */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content Column */}
                  <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="space-y-3 sm:space-y-4 bg-white/60 dark:bg-card/60 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border-2 border-primary/20">
                      <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-md">
                        <p className="font-semibold text-xs sm:text-sm md:text-base">{festival.date}</p>
                      </div>
                      
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
                        {festival.description}
                      </p>
                      
                      <div className="border-l-4 border-gradient-to-b from-primary to-secondary pl-4 sm:pl-6 py-2 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-r-lg">
                        <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">
                          {language === 'mr' ? 'महत्त्व:' : language === 'hi' ? 'महत्व:' : 'Significance:'}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
                          {festival.significance}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-foreground mb-2 sm:mb-4 text-sm sm:text-base md:text-lg">
                          {language === 'mr' ? 'कार्यक्रम:' : language === 'hi' ? 'कार्यक्रम:' : 'Activities:'}
                        </h3>
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                          {festival.activities.map((activity, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary flex-shrink-0" />
                              <span className="text-xs sm:text-sm font-medium">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image/Video Column */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {index === 0 ? (
                      /* Instagram Reel for Champa Shashthi */
                      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl ring-2 sm:ring-4 ring-primary/20 hover:ring-primary/40 transition-all bg-white dark:bg-card">
                        <div className="w-full flex justify-center">
                          <iframe
                            src="https://www.instagram.com/reel/DRfL6gZDH2G/embed"
                            className="w-full min-h-[450px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] border-0"
                            allowFullScreen
                            scrolling="no"
                            title="Champa Shashthi Reel"
                          />
                        </div>
                      </div>
                    ) : index === 1 ? (
                      /* Instagram Reel for Somavati Amavasya */
                      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl ring-2 sm:ring-4 ring-primary/20 hover:ring-primary/40 transition-all bg-white dark:bg-card">
                        <div className="w-full flex justify-center">
                          <iframe
                            src="https://www.instagram.com/reel/DEMxud0I53O/embed"
                            className="w-full min-h-[450px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] border-0"
                            allowFullScreen
                            scrolling="no"
                            title="Somavati Amavasya Reel"
                          />
                        </div>
                      </div>
                    ) : index === 2 ? (
                      /* Instagram Reel for Magh Purnima - Shahi Lagan Sohala */
                      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl ring-2 sm:ring-4 ring-primary/20 hover:ring-primary/40 transition-all bg-white dark:bg-card">
                        <div className="w-full flex justify-center">
                          <iframe
                            src="https://www.instagram.com/reel/DF-BMtsInX6/embed"
                            className="w-full min-h-[450px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] border-0"
                            allowFullScreen
                            scrolling="no"
                            title="Magh Purnima Shahi Lagan Reel"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl group ring-2 sm:ring-4 ring-primary/20 hover:ring-primary/40 transition-all">
                        <img 
                          src="/src/assets/khandoba-deity.jpeg"
                          alt={festival.name}
                          className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                          <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl">
                            {festivalIcons[index] && 
                              React.createElement(festivalIcons[index], {
                                className: "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white drop-shadow-lg flex-shrink-0"
                              })
                            }
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                              {festival.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    )}
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
