import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, MapPin, Calendar, Utensils, Bus } from 'lucide-react';

const content = {
  mr: {
    title: 'दर्शन योजना',
    subtitle: 'तुमच्या भेटीची योजना करा',
    timings: {
      title: 'मंदिर वेळापत्रक',
      morning: 'सकाळी: ५:०० ',
      evening: 'संध्याकाळ: ९:०० पर्यंत',
      note: 'विशेष पूजा आणि उत्सवाच्या वेळी मंदिर अधिक वेळ उघडे राहते'
    },
    location: {
      title: 'स्थान आणि प्रवास',
      address: 'श्री खंडोबा मंदिर, निमगाव-दावडी, जिल्हा पुणे, महाराष्ट्र',
      fromPune: 'पुण्यापासून: सुमारे ४० किमी',
      busRoute: 'PMPML मार्ग ३७०',
      busRouteDetails: 'भोसरी - दावडी गाव/निमगाव',
      fromBhosari: 'भोसरी वरून: सकाळी १०:०५, दुपारी २:१५, संध्याकाळी ६:२०',
      fromNimgaon: 'निमगाव वरून: सकाळी ७:५०, सकाळी ११:५०, दुपारी ४:००'
    },
    festivals: {
      title: 'विशेष उत्सव',
      events: [
        {
          name: 'चांपा षष्ठी',
          date: 'भाद्रपद वाड्या सहावी',
          description: 'सर्वात मोठा उत्सव'
        },
        {
          name: 'दत्त जयंती',
          date: 'मार्गशीर्ष पौर्णिमा',
          description: 'श्री दत्तगुरू जन्मोत्सव'
        },
        {
          name: 'महाशिवरात्री',
          date: 'फाल्गुन वद्य त्रयोदशी',
          description: 'रात्रभर जागरण'
        }
      ]
    },
    facilities: {
      title: 'सुविधा',
      items: [
        'भक्तांसाठी विश्रामगृह',
        'प्रसाद आणि पूजासाहित्य',
        'पिण्याचे पाणी आणि स्वच्छतागृह',
        'पार्किंगची सोय',
        'वृद्ध आणि दिव्यांगांसाठी सुविधा'
      ]
    },
    offerings: {
      title: 'अर्पण आणि विधी',
      items: [
        'हळद अर्पण - विशेष प्रसाद',
        'भंडारा - गरीबांना अन्नदान',
        'तूप आणि दिवे',
        'फुले आणि बेलपत्र',
        'नारळ आणि पेढा'
      ]
    },
    tips: {
      title: 'उपयुक्त सूचना',
      items: [
        'उत्सवाच्या काळात लवकर या',
        'पारंपारिक पोशाख परिधान करा',
        'प्रवेशापूर्वी शूज काढावेत',
        'मोबाईल शांत मोडमध्ये ठेवावेत',
        'मंदिराची स्वच्छता राखावी'
      ]
    }
  },
  en: {
    title: 'Plan Your Visit',
    subtitle: 'Plan Your Darshan',
    timings: {
      title: 'Temple Timings',
      morning: 'Morning: 5:00 AM ',
      evening: 'Evening: Upto 9:00 PM',
      note: 'Temple remains open longer during festivals'
    },
    location: {
      title: 'Location & Travel',
      address: 'Shri Khandoba Temple, Nimgaon-Davadi, District Pune, Maharashtra',
      fromPune: 'From Pune: Approximately 40 km',
      busRoute: 'PMPML Route 370',
      busRouteDetails: 'Bhosari - Dawadi Gaon/Nimgaon',
      fromBhosari: 'From Bhosari: 10:05 AM, 2:15 PM, 6:20 PM',
      fromNimgaon: 'From Nimgaon: 7:50 AM, 11:50 AM, 4:00 PM'
    },
    festivals: {
      title: 'Special Festivals',
      events: [
        {
          name: 'Champa Shashthi',
          date: 'Bhadrapad Vadya Shashthi',
          description: 'The biggest celebration'
        },
        {
          name: 'Datta Jayanti',
          date: 'Margashirsha Pournima',
          description: 'Birth of Shri Dattaguru'
        },
        {
          name: 'Mahashivratri',
          date: 'Falgun Vadya Trayodashi',
          description: 'Night-long vigil'
        }
      ]
    },
    facilities: {
      title: 'Facilities',
      items: [
        'Rest rooms for devotees',
        'Prasad and puja items',
        'Drinking water and washrooms',
        'Parking facility',
        'Special facilities for elderly'
      ]
    },
    offerings: {
      title: 'Offerings & Rituals',
      items: [
        'Turmeric offering - Special prasad',
        'Bhandara - Food donation',
        'Ghee and lamps',
        'Flowers and Belpatra',
        'Coconut and Pedha'
      ]
    },
    tips: {
      title: 'Useful Tips',
      items: [
        'Come early during festivals',
        'Wear traditional attire',
        'Remove shoes before entry',
        'Keep phones on silent mode',
        'Maintain temple cleanliness'
      ]
    }
  },
  hi: {
    title: 'दर्शन योजना',
    subtitle: 'अपनी यात्रा की योजना बनाएं',
    timings: {
      title: 'मंदिर समय',
      morning: 'सुबह: ५:०० से ',
      evening: 'शाम:  ९:०० तक',
      note: 'उत्सव के समय मंदिर अधिक समय खुला'
    },
    location: {
      title: 'स्थान और यात्रा',
      address: 'श्री खंडोबा मंदिर, निमगांव-दावडी, जिला पुणे, महाराष्ट्र',
      fromPune: 'पुणे से: लगभग  ४० किमी',
      busRoute: 'PMPML मार्ग ३७०',
      busRouteDetails: 'भोसरी - दावडी गांव/निमगांव',
      fromBhosari: 'भोसरी से: सुबह १०:०५, दोपहर २:१५, शाम ६:२०',
      fromNimgaon: 'निमगांव से: सुबह ७:५०, सुबह ११:५०, दोपहर ४:००'
    },
    festivals: {
      title: 'विशेष उत्सव',
      events: [
        {
          name: 'चांपा षष्ठी',
          date: 'भाद्रपद वाड्या षष्ठी',
          description: 'सबसे बड़ा उत्सव'
        },
        {
          name: 'दत्त जयंती',
          date: 'मार्गशीर्ष पूर्णिमा',
          description: 'श्री दत्तगुरु जन्मोत्सव'
        },
        {
          name: 'महाशिवरात्रि',
          date: 'फाल्गुन वद्य त्रयोदशी',
          description: 'रात भर जागरण'
        }
      ]
    },
    facilities: {
      title: 'सुविधाएं',
      items: [
        'भक्तों के लिए विश्रामगृह',
        'प्रसाद और पूजा सामग्री',
        'पीने का पानी और शौचालय',
        'पार्किंग की सुविधा',
        'वृद्ध और दिव्यांगों के लिए सुविधा'
      ]
    },
    offerings: {
      title: 'अर्पण और विधि',
      items: [
        'हल्दी अर्पण - विशेष प्रसाद',
        'भंडारा - अन्नदान',
        'घी और दीपक',
        'फूल और बेलपत्र',
        'नारियल और पेड़ा'
      ]
    },
    tips: {
      title: 'उपयोगी सुझाव',
      items: [
        'उत्सव के समय जल्दी आएं',
        'पारंपरिक पोशाक पहनें',
        'प्रवेश से पहले जूते उतारें',
        'फोन साइलेंट मोड में रखें',
        'मंदिर की स्वच्छता बनाए रखें'
      ]
    }
  }
};

const Visit = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-100 via-yellow-100 to-red-100 dark:from-orange-950/20 dark:via-yellow-950/20 dark:to-red-950/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
            {t.title}
          </h1>
          <div className="flex justify-center my-6">
            <div className="h-2 w-32 bg-gradient-to-r from-primary via-secondary to-accent rounded-full shadow-lg" />
          </div>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50/30 via-yellow-50/30 to-red-50/30 dark:from-orange-950/5 dark:via-yellow-950/5 dark:to-red-950/5">
        <div className="container mx-auto max-w-6xl">
          {/* Timings */}
          <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 mb-8 rounded-2xl shadow-lg border-2 border-primary/20 hover:shadow-2xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-md">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">{t.timings.title}</h2>
                <div className="space-y-2 text-lg">
                  <p className="text-foreground font-semibold">{t.timings.morning}</p>
                  <p className="text-foreground font-semibold">{t.timings.evening}</p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">{t.timings.note}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 mb-8 rounded-2xl shadow-lg border-2 border-secondary/20 hover:shadow-2xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-secondary to-accent rounded-xl shadow-md">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">{t.location.title}</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p className="font-semibold text-foreground leading-relaxed">{t.location.address}</p>
                  <p className="leading-relaxed">{t.location.fromPune}</p>
                  <div className="mt-4 p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Bus className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="font-bold text-foreground">{t.location.busRoute}</p>
                    </div>
                    <p className="text-sm text-foreground font-medium mb-2">{t.location.busRouteDetails}</p>
                    <p className="text-sm leading-relaxed">{t.location.fromBhosari}</p>
                    <p className="text-sm leading-relaxed">{t.location.fromNimgaon}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Festivals */}
          <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 mb-8 rounded-2xl shadow-lg border-2 border-accent/20 hover:shadow-2xl transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-xl shadow-md">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">{t.festivals.title}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {t.festivals.events.map((event, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-bold text-foreground mb-2">{event.name}</h3>
                  <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 font-semibold mb-2">{event.date}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Facilities */}
            <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-lg border-2 border-primary/20 hover:shadow-2xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">{t.facilities.title}</h2>
              <ul className="space-y-3">
                {t.facilities.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-0.5">✓</span>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offerings */}
            <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-lg border-2 border-secondary/20 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <Utensils className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">{t.offerings.title}</h2>
              </div>
              <ul className="space-y-3">
                {t.offerings.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-0.5">◆</span>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-lg border-2 border-accent/20 hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">{t.tips.title}</h2>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {t.tips.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent text-xl mt-0.5">★</span>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visit;
