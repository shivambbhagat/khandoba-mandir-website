import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Phone, Clock } from 'lucide-react';
import khandobaDeity from '@/assets/khandoba-deity-new.jpg';

const content = {
  mr: {
    marquee: 'जय मल्हार! श्री खंडोबा मंदिर निमगाव-दावडी येथे आपले स्वागत आहे • दररोज सकाळी ५:०० ते रात्री ९:०० पर्यंत मंदिर उघडे असते • ',
    hero: {
      title: 'श्री खंडोबा देवस्थान निमगाव',
      subtitle: 'निमगाव-दावडी येथील पवित्र तीर्थक्षेत्र',
      description: 'मल्लारी मार्तंड, मलय माणिक, जेजुरी च्या राजा श्री खंडोबा यांच्या आशीर्वादाने भारलेले हे पवित्र धाम भक्तांच्या श्रद्धेचे केंद्र आहे.',
      cta: 'दर्शन योजना करा'
    },
    features: [
      {
        title: 'पवित्र दर्शन',
        description: 'दररोज सकाळी ५:०० ते रात्री ९:०० पर्यंत मंदिर उघडे असते',
        icon: Clock
      },
      {
        title: 'सोपी पोहोच',
        description: 'पुणे आणि सोलापूर मधून येथे येणे अतिशय सोपे आहे',
        icon: MapPin
      },
      {
        title: 'विशेष पूजा',
        description: 'चांपा षष्ठी, दत्त जयंती आणि भद्रपद वाड्या सहावीला विशेष उत्सव',
        icon: Calendar
      }
    ],
    about: {
      title: 'भक्तिमय वातावरण',
      description: 'श्री खंडोबा मंदिर हे महाराष्ट्रातील सर्वात पवित्र मंदिरांपैकी एक आहे. येथील शांत वातावरण आणि दिव्य ऊर्जा भक्तांना आध्यात्मिक शांती प्रदान करते. येथे येणारे प्रत्येक भक्त श्री मल्हारीच्या कृपेने धन्य होतो.'
    },
    quickContact: 'त्वरित संपर्क'
  },
  en: {
    marquee: 'Jai Malhar! Welcome to Shri Khandoba Temple Nimgaon-Davadi • Temple open daily from 5:00 AM to 9:00 PM • ',
    hero: {
      title: 'Shri Khandoba Devsthan Nimgaon',
      subtitle: 'Sacred Pilgrimage Site at Nimgaon-Davadi',
      description: 'This holy shrine blessed by Mallari Martand, Malay Manik, King of Jejuri Shri Khandoba is the center of devotion for millions of devotees.',
      cta: 'Plan Your Visit'
    },
    features: [
      {
        title: 'Sacred Darshan',
        description: 'Temple open daily from 5:00 AM to 9:00 PM',
        icon: Clock
      },
      {
        title: 'Easy Access',
        description: 'Easily accessible from Pune and Solapur',
        icon: MapPin
      },
      {
        title: 'Special Pujas',
        description: 'Special celebrations on Champa Shashthi, Datta Jayanti and Bhadrapad Vadya Shashthi',
        icon: Calendar
      }
    ],
    about: {
      title: 'Divine Atmosphere',
      description: 'Shri Khandoba Temple is one of the most sacred temples in Maharashtra. The peaceful environment and divine energy here provide spiritual peace to devotees. Every devotee who comes here is blessed by the grace of Shri Malhari.'
    },
    quickContact: 'Quick Contact'
  },
  hi: {
    marquee: 'जय मल्हार! श्री खंडोबा मंदिर निमगांव-दावडी में आपका स्वागत है • मंदिर प्रतिदिन सुबह ५:०० से रात ९:०० तक खुला रहता है • ',
    hero: {
      title: 'श्री खंडोबा देवस्थान निमगाव',
      subtitle: 'निमगांव-दावडी का पवित्र तीर्थस्थल',
      description: 'मल्लारी मार्तंड, मलय माणिक, जेजुरी के राजा श्री खंडोबा के आशीर्वाद से भरा यह पवित्र धाम भक्तों की श्रद्धा का केंद्र है।',
      cta: 'दर्शन की योजना बनाएं'
    },
    features: [
      {
        title: 'पवित्र दर्शन',
        description: 'मंदिर प्रतिदिन सुबह ५:०० से रात ९:०० तक खुला रहता है',
        icon: Clock
      },
      {
        title: 'आसान पहुंच',
        description: 'पुणे और सोलापुर से यहां पहुंचना बहुत आसान है',
        icon: MapPin
      },
      {
        title: 'विशेष पूजा',
        description: 'चांपा षष्ठी, दत्त जयंती और भाद्रपद वाड्या षष्ठी पर विशेष उत्सव',
        icon: Calendar
      }
    ],
    about: {
      title: 'भक्तिमय वातावरण',
      description: 'श्री खंडोबा मंदिर महाराष्ट्र के सबसे पवित्र मंदिरों में से एक है। यहां का शांत वातावरण और दिव्य ऊर्जा भक्तों को आध्यात्मिक शांति प्रदान करती है। यहां आने वाला हर भक्त श्री मल्हारी की कृपा से धन्य होता है।'
    },
    quickContact: 'त्वरित संपर्क'
  }
};

const Home = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div>
      {/* Running Headline Marquee */}
      <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap inline-block">
          <span className="text-lg font-semibold mx-4">{t.marquee}</span>
          <span className="text-lg font-semibold mx-4">{t.marquee}</span>
          <span className="text-lg font-semibold mx-4">{t.marquee}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/temple-video.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 pb-12 px-4">
          <div className="container mx-auto text-center max-w-4xl relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">
              {t.hero.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Deity Image and Features Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50/50 via-yellow-50/50 to-red-50/50 dark:from-orange-950/10 dark:via-yellow-950/10 dark:to-red-950/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Deity Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary/20 hover:ring-primary/40 transition-all hover:scale-[1.02] duration-300">
              <img 
                src={khandobaDeity} 
                alt="Shri Khandoba Deity"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Features Grid */}
            <div className="grid gap-8">
              {t.features.map((feature, index) => {
                const Icon = feature.icon;
                const gradients = [
                  'from-orange-500 to-red-500',
                  'from-yellow-500 to-orange-500',
                  'from-red-500 to-pink-500'
                ];
                return (
                  <Card key={index} className="p-8 hover:shadow-2xl transition-all hover:-translate-y-1 bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradients[index]} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-950/10 dark:via-orange-950/10 dark:to-red-950/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--secondary)/0.1),transparent_50%)]" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">{t.about.title}</h2>
          <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border-2 border-primary/20">
            <p className="text-lg text-muted-foreground leading-relaxed">{t.about.description}</p>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-8 text-center bg-gradient-to-br from-orange-100 via-yellow-100 to-red-100 dark:from-orange-950/40 dark:via-yellow-950/40 dark:to-red-950/40 border-4 border-primary/30 shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all">
            <div className="inline-block p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-4 shadow-lg">
              <Phone className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">{t.quickContact}</h3>
            <a 
              href="tel:9922058279" 
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent hover:scale-110 inline-block transition-transform"
            >
              9922058279
            </a>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
