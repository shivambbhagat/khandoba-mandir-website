import { useLanguage } from '@/contexts/LanguageContext';
import { Droplets, Clock, Heart, Star } from 'lucide-react';

const content = {
  mr: {
    title: 'अभिषेक',
    subtitle: 'श्री खंडोबा देवाचा पवित्र अभिषेक',
    description: 'अभिषेक म्हणजे देवतेला पवित्र जलाने स्नान घालणे. हे अत्यंत पवित्र आणि शुभ कर्म मानले जाते.',
    types: {
      title: 'अभिषेकाचे प्रकार',
      items: [
        { name: 'जल अभिषेक', desc: 'पवित्र जलाने अभिषेक' },
        { name: 'दुग्ध अभिषेक', desc: 'दुधाने अभिषेक' },
        { name: 'पंचामृत अभिषेक', desc: 'पाच अमृतांनी अभिषेक' },
        { name: 'हळद अभिषेक', desc: 'हळदीच्या पाण्याने अभिषेक' }
      ]
    },
    timings: {
      title: 'अभिषेक वेळापत्रक',
      morning: 'सकाळी: ६:०० ते ११:००',
      evening: 'संध्याकाळ: ५:०० ते ८:००'
    },
    benefits: {
      title: 'अभिषेकाचे फायदे',
      items: [
        'मानसिक शांती आणि समाधान',
        'आरोग्य आणि सुख प्राप्ती',
        'कुटुंबाचे कल्याण',
        'आध्यात्मिक उन्नती',
        'पितृ ऋण मुक्ती'
      ]
    },
    booking: {
      title: 'अभिषेक बुकिंग',
      note: 'अभिषेक बुकिंगसाठी कृपया मंदिरात संपर्क साधा',
      phone: '9922058279'
    }
  },
  en: {
    title: 'Abhishek',
    subtitle: 'Sacred Abhishek of Shri Khandoba',
    description: 'Abhishek means bathing the deity with holy water. It is considered a sacred and auspicious ritual.',
    types: {
      title: 'Types of Abhishek',
      items: [
        { name: 'Jal Abhishek', desc: 'Abhishek with holy water' },
        { name: 'Dugdha Abhishek', desc: 'Abhishek with milk' },
        { name: 'Panchamrit Abhishek', desc: 'Abhishek with five nectars' },
        { name: 'Haldi Abhishek', desc: 'Abhishek with turmeric water' }
      ]
    },
    timings: {
      title: 'Abhishek Timings',
      morning: 'Morning: 6:00 AM to 11:00 AM',
      evening: 'Evening: 5:00 PM to 8:00 PM'
    },
    benefits: {
      title: 'Benefits of Abhishek',
      items: [
        'Mental peace and satisfaction',
        'Health and happiness',
        'Family welfare',
        'Spiritual progress',
        'Ancestral debt relief'
      ]
    },
    booking: {
      title: 'Abhishek Booking',
      note: 'Please contact the temple for booking',
      phone: '9922058279'
    }
  },
  hi: {
    title: 'अभिषेक',
    subtitle: 'श्री खंडोबा देव का पवित्र अभिषेक',
    description: 'अभिषेक का अर्थ है देवता को पवित्र जल से स्नान कराना। यह अत्यंत पवित्र और शुभ कर्म माना जाता है।',
    types: {
      title: 'अभिषेक के प्रकार',
      items: [
        { name: 'जल अभिषेक', desc: 'पवित्र जल से अभिषेक' },
        { name: 'दुग्ध अभिषेक', desc: 'दूध से अभिषेक' },
        { name: 'पंचामृत अभिषेक', desc: 'पांच अमृतों से अभिषेक' },
        { name: 'हल्दी अभिषेक', desc: 'हल्दी के पानी से अभिषेक' }
      ]
    },
    timings: {
      title: 'अभिषेक समय',
      morning: 'सुबह: ६:०० से ११:०० तक',
      evening: 'शाम: ५:०० से ८:०० तक'
    },
    benefits: {
      title: 'अभिषेक के लाभ',
      items: [
        'मानसिक शांति और संतुष्टि',
        'स्वास्थ्य और सुख प्राप्ति',
        'परिवार का कल्याण',
        'आध्यात्मिक उन्नति',
        'पितृ ऋण मुक्ति'
      ]
    },
    booking: {
      title: 'अभिषेक बुकिंग',
      note: 'बुकिंग के लिए कृपया मंदिर से संपर्क करें',
      phone: '9922058279'
    }
  }
};

const Abhishek = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-100 via-yellow-100 to-red-100 dark:from-orange-950/20 dark:via-yellow-950/20 dark:to-red-950/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full shadow-2xl mb-6">
            <Droplets className="w-10 h-10 text-white" />
          </div>
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
          {/* Description */}
          <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 mb-8 rounded-2xl shadow-lg border-2 border-primary/20 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">{t.description}</p>
          </div>

          {/* Types of Abhishek */}
          <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 mb-8 rounded-2xl shadow-lg border-2 border-secondary/20 hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">{t.types.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {t.types.items.map((item, index) => (
                <div key={index} className="p-4 md:p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20 text-center hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Droplets className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Timings */}
            <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-lg border-2 border-accent/20 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-xl shadow-md">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">{t.timings.title}</h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-foreground font-semibold">{t.timings.morning}</p>
                <p className="text-lg text-foreground font-semibold">{t.timings.evening}</p>
              </div>
            </div>

            {/* Booking */}
            <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-lg border-2 border-primary/20 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-md">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">{t.booking.title}</h2>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{t.booking.note}</p>
              <a 
                href={`tel:${t.booking.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:shadow-lg transition-all font-bold text-lg"
              >
                📞 {t.booking.phone}
              </a>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-lg border-2 border-secondary/20 hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="p-3 bg-gradient-to-br from-secondary to-accent rounded-xl shadow-md">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">{t.benefits.title}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {t.benefits.items.map((item, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl text-center border border-primary/20 hover:shadow-lg transition-all">
                  <span className="text-2xl mb-2 block">✨</span>
                  <p className="text-sm text-foreground font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abhishek;