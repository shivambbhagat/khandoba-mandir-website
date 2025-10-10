import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Clock, MapPin, Calendar, Utensils, Bus, Train } from 'lucide-react';

const content = {
  mr: {
    title: 'दर्शन योजना',
    subtitle: 'तुमच्या भेटीची योजना करा',
    timings: {
      title: 'मंदिर वेळापत्रक',
      morning: 'सकाळी: ५:०० ते १२:००',
      evening: 'संध्याकाळ: ४:०० ते ९:००',
      note: 'विशेष पूजा आणि उत्सवाच्या वेळी मंदिर अधिक वेळ उघडे राहते'
    },
    location: {
      title: 'स्थान आणि प्रवास',
      address: 'श्री खंडोबा मंदिर, निमगाव-दावडी, जिल्हा पुणे, महाराष्ट्र',
      fromPune: 'पुण्यापासून: सुमारे ८० किमी (२ तास)',
      fromSolapur: 'सोलापूरपासून: सुमारे ७० किमी (१.५ तास)',
      byBus: 'बस: पुणे आणि सोलापूर येथून नियमित बस सेवा उपलब्ध',
      byTrain: 'रेल्वे: जवळचे स्थानक - बारामती (२५ किमी)'
    },
    festivals: {
      title: 'विशेष उत्सव',
      events: [
        {
          name: 'चांपा षष्ठी',
          date: 'भाद्रपद वाड्या सहावी',
          description: 'सर्वात मोठा उत्सव, लाखो भक्त उपस्थित राहतात'
        },
        {
          name: 'दत्त जयंती',
          date: 'मार्गशीर्ष पौर्णिमा',
          description: 'श्री दत्तगुरू यांच्या जन्मोत्सवाची पूजा'
        },
        {
          name: 'महाशिवरात्री',
          date: 'फाल्गुन वद्य त्रयोदशी',
          description: 'भगवान शिवाचा विशेष दिवस, रात्रभर जागरण'
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
        'वृद्ध आणि दिव्यांगांसाठी विशेष सुविधा'
      ]
    },
    offerings: {
      title: 'अर्पण आणि विधी',
      items: [
        'हळद अर्पण - श्री खंडोबाची विशेष प्रसाद',
        'भंडारा - गरीबांना अन्नदान',
        'तूप आणि दिवे',
        'फुले आणि बेलपत्र',
        'नारळ आणि पेढा'
      ]
    },
    tips: {
      title: 'उपयुक्त सूचना',
      items: [
        'उत्सवाच्या काळात लवकर या कारण गर्दी जास्त असते',
        'पारंपारिक पोशाख परिधान करणे उचित',
        'मंदिरात प्रवेश करण्यापूर्वी शूज काढावेत',
        'मोबाईल फोन शांत मोडमध्ये ठेवावेत',
        'मंदिराची स्वच्छता राखावी'
      ]
    }
  },
  en: {
    title: 'Plan Your Visit',
    subtitle: 'Plan Your Darshan',
    timings: {
      title: 'Temple Timings',
      morning: 'Morning: 5:00 AM to 12:00 PM',
      evening: 'Evening: 4:00 PM to 9:00 PM',
      note: 'Temple remains open longer during special pujas and festivals'
    },
    location: {
      title: 'Location & Travel',
      address: 'Shri Khandoba Temple, Nimgaon-Davadi, District Pune, Maharashtra',
      fromPune: 'From Pune: Approximately 80 km (2 hours)',
      fromSolapur: 'From Solapur: Approximately 70 km (1.5 hours)',
      byBus: 'By Bus: Regular bus services available from Pune and Solapur',
      byTrain: 'By Train: Nearest station - Baramati (25 km)'
    },
    festivals: {
      title: 'Special Festivals',
      events: [
        {
          name: 'Champa Shashthi',
          date: 'Bhadrapad Vadya Shashthi',
          description: 'The biggest celebration, attended by millions of devotees'
        },
        {
          name: 'Datta Jayanti',
          date: 'Margashirsha Pournima',
          description: 'Birth celebration of Shri Dattaguru'
        },
        {
          name: 'Mahashivratri',
          date: 'Falgun Vadya Trayodashi',
          description: 'Special day of Lord Shiva, night-long vigil'
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
        'Special facilities for elderly and disabled'
      ]
    },
    offerings: {
      title: 'Offerings & Rituals',
      items: [
        'Turmeric offering - Special prasad of Shri Khandoba',
        'Bhandara - Food donation to the poor',
        'Ghee and lamps',
        'Flowers and Belpatra',
        'Coconut and Pedha'
      ]
    },
    tips: {
      title: 'Useful Tips',
      items: [
        'Come early during festivals as it gets crowded',
        'Appropriate to wear traditional attire',
        'Remove shoes before entering the temple',
        'Keep mobile phones on silent mode',
        'Maintain temple cleanliness'
      ]
    }
  },
  hi: {
    title: 'दर्शन योजना',
    subtitle: 'अपनी यात्रा की योजना बनाएं',
    timings: {
      title: 'मंदिर समय',
      morning: 'सुबह: ५:०० से १२:०० तक',
      evening: 'शाम: ४:०० से ९:०० तक',
      note: 'विशेष पूजा और उत्सव के समय मंदिर अधिक समय तक खुला रहता है'
    },
    location: {
      title: 'स्थान और यात्रा',
      address: 'श्री खंडोबा मंदिर, निमगांव-दावडी, जिला पुणे, महाराष्ट्र',
      fromPune: 'पुणे से: लगभग ८० किमी (२ घंटे)',
      fromSolapur: 'सोलापुर से: लगभग ७० किमी (१.५ घंटे)',
      byBus: 'बस से: पुणे और सोलापुर से नियमित बस सेवा उपलब्ध',
      byTrain: 'रेल से: निकटतम स्टेशन - बारामती (२५ किमी)'
    },
    festivals: {
      title: 'विशेष उत्सव',
      events: [
        {
          name: 'चांपा षष्ठी',
          date: 'भाद्रपद वाड्या षष्ठी',
          description: 'सबसे बड़ा उत्सव, लाखों भक्त उपस्थित होते हैं'
        },
        {
          name: 'दत्त जयंती',
          date: 'मार्गशीर्ष पूर्णिमा',
          description: 'श्री दत्तगुरु के जन्मोत्सव की पूजा'
        },
        {
          name: 'महाशिवरात्रि',
          date: 'फाल्गुन वद्य त्रयोदशी',
          description: 'भगवान शिव का विशेष दिन, रात भर जागरण'
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
        'वृद्ध और दिव्यांगों के लिए विशेष सुविधा'
      ]
    },
    offerings: {
      title: 'अर्पण और विधि',
      items: [
        'हल्दी अर्पण - श्री खंडोबा का विशेष प्रसाद',
        'भंडारा - गरीबों को अन्नदान',
        'घी और दीपक',
        'फूल और बेलपत्र',
        'नारियल और पेड़ा'
      ]
    },
    tips: {
      title: 'उपयोगी सुझाव',
      items: [
        'उत्सव के समय जल्दी आएं क्योंकि भीड़ अधिक होती है',
        'पारंपरिक पोशाक पहनना उचित है',
        'मंदिर में प्रवेश से पहले जूते उतारें',
        'मोबाइल फोन साइलेंट मोड में रखें',
        'मंदिर की स्वच्छता बनाए रखें'
      ]
    }
  }
};

const Visit = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t.title}</h1>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Timings */}
        <Card className="p-6 md:p-8 mb-8 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="flex items-start gap-4 mb-4">
            <Clock className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">{t.timings.title}</h2>
              <div className="space-y-2 text-lg">
                <p className="text-foreground font-semibold">{t.timings.morning}</p>
                <p className="text-foreground font-semibold">{t.timings.evening}</p>
                <p className="text-muted-foreground mt-4">{t.timings.note}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Location */}
        <Card className="p-6 md:p-8 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-foreground">{t.location.title}</h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="font-semibold text-foreground">{t.location.address}</p>
                <p>{t.location.fromPune}</p>
                <p>{t.location.fromSolapur}</p>
                <div className="flex items-center gap-2 pt-2">
                  <Bus className="w-5 h-5 text-primary" />
                  <p>{t.location.byBus}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Train className="w-5 h-5 text-primary" />
                  <p>{t.location.byTrain}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Festivals */}
        <Card className="p-6 md:p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Calendar className="w-8 h-8 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-bold text-foreground">{t.festivals.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.festivals.events.map((event, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">{event.name}</h3>
                <p className="text-sm text-primary font-semibold mb-2">{event.date}</p>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Facilities */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">{t.facilities.title}</h2>
            <ul className="space-y-3">
              {t.facilities.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Offerings */}
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-3 mb-4">
              <Utensils className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <h2 className="text-2xl font-bold text-foreground">{t.offerings.title}</h2>
            </div>
            <ul className="space-y-3">
              {t.offerings.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-1">◆</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Tips */}
        <Card className="p-6 md:p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
          <h2 className="text-2xl font-bold mb-4 text-center text-foreground">{t.tips.title}</h2>
          <ul className="space-y-3 max-w-2xl mx-auto">
            {t.tips.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1">★</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Visit;
