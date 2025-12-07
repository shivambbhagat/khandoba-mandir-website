import { useLanguage } from '@/contexts/LanguageContext';
import { Music, Star, Heart, Users } from 'lucide-react';

const content = {
  mr: {
    title: 'जागरण गोंधळ',
    subtitle: 'श्री खंडोबाची पारंपारिक पूजा पद्धत',
    description: 'जागरण गोंधळ हा श्री खंडोबा देवाची पूजा करण्याचा पारंपारिक मार्ग आहे. रात्रभर भजन, कीर्तन आणि गोंधळ गाऊन देवाची आराधना केली जाते.',
    about: {
      title: 'जागरण गोंधळ म्हणजे काय?',
      items: [
        'रात्रभर चालणारी भक्ती सेवा',
        'पारंपारिक वाद्ये आणि गायन',
        'खंडोबाच्या कथांचे वर्णन',
        'भक्तांचा सामूहिक सहभाग',
        'दिव्य आध्यात्मिक अनुभव'
      ]
    },
    instruments: {
      title: 'पारंपारिक वाद्ये',
      items: [
        { name: 'तुणतुणे', desc: 'मुख्य वाद्य' },
        { name: 'झांज', desc: 'तालवाद्य' },
        { name: 'ढोलकी', desc: 'ताल वाद्य' },
        { name: 'टाळ', desc: 'भजन वाद्य' }
      ]
    },
    significance: {
      title: 'महत्त्व',
      items: [
        'देवाची कृपा प्राप्त होते',
        'मनोकामना पूर्ण होतात',
        'कुटुंबाचे रक्षण होते',
        'आरोग्य आणि समृद्धी मिळते',
        'आध्यात्मिक उन्नती होते'
      ]
    },
    booking: {
      title: 'गोंधळ बुकिंग',
      note: 'जागरण गोंधळ बुकिंगसाठी संपर्क साधा',
      phone: '9922058279'
    }
  },
  en: {
    title: 'Jagaran Gondhal',
    subtitle: 'Traditional Worship of Shri Khandoba',
    description: 'Jagaran Gondhal is a traditional way of worshipping Shri Khandoba. The deity is worshipped through night-long bhajans, kirtans and gondhal singing.',
    about: {
      title: 'What is Jagaran Gondhal?',
      items: [
        'Night-long devotional service',
        'Traditional instruments and singing',
        'Narration of Khandoba stories',
        'Collective participation of devotees',
        'Divine spiritual experience'
      ]
    },
    instruments: {
      title: 'Traditional Instruments',
      items: [
        { name: 'Tuntune', desc: 'Main instrument' },
        { name: 'Jhanj', desc: 'Cymbal' },
        { name: 'Dholki', desc: 'Rhythm drum' },
        { name: 'Taal', desc: 'Bhajan instrument' }
      ]
    },
    significance: {
      title: 'Significance',
      items: [
        'Receive divine blessings',
        'Wishes are fulfilled',
        'Family protection',
        'Health and prosperity',
        'Spiritual progress'
      ]
    },
    booking: {
      title: 'Gondhal Booking',
      note: 'Contact for Jagaran Gondhal booking',
      phone: '9922058279'
    }
  },
  hi: {
    title: 'जागरण गोंदल',
    subtitle: 'श्री खंडोबा की पारंपारिक पूजा पद्धति',
    description: 'जागरण गोंदल श्री खंडोबा देव की पूजा करने का पारंपारिक तरीका है। रात भर भजन, कीर्तन और गोंदल गाकर देव की आराधना की जाती है।',
    about: {
      title: 'जागरण गोंदल क्या है?',
      items: [
        'रात भर चलने वाली भक्ति सेवा',
        'पारंपारिक वाद्य और गायन',
        'खंडोबा की कथाओं का वर्णन',
        'भक्तों की सामूहिक भागीदारी',
        'दिव्य आध्यात्मिक अनुभव'
      ]
    },
    instruments: {
      title: 'पारंपारिक वाद्य',
      items: [
        { name: 'तुनतुने', desc: 'मुख्य वाद्य' },
        { name: 'झांझ', desc: 'ताल वाद्य' },
        { name: 'ढोलकी', desc: 'ताल वाद्य' },
        { name: 'ताल', desc: 'भजन वाद्य' }
      ]
    },
    significance: {
      title: 'महत्व',
      items: [
        'देव की कृपा प्राप्त होती है',
        'मनोकामनाएं पूर्ण होती हैं',
        'परिवार की रक्षा होती है',
        'स्वास्थ्य और समृद्धि मिलती है',
        'आध्यात्मिक उन्नति होती है'
      ]
    },
    booking: {
      title: 'गोंदल बुकिंग',
      note: 'जागरण गोंदल बुकिंग के लिए संपर्क करें',
      phone: '9922058279'
    }
  }
};

const JagaranGondal = () => {
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
            <Music className="w-10 h-10 text-white" />
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

          {/* About Section */}
          <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 mb-8 rounded-2xl shadow-lg border-2 border-secondary/20 hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="p-3 bg-gradient-to-br from-secondary to-accent rounded-xl shadow-md">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">{t.about.title}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {t.about.items.map((item, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl text-center border border-primary/20 hover:shadow-lg transition-all">
                  <span className="text-2xl mb-2 block">🎵</span>
                  <p className="text-sm text-foreground font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Instruments */}
          <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 mb-8 rounded-2xl shadow-lg border-2 border-accent/20 hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">{t.instruments.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {t.instruments.items.map((item, index) => (
                <div key={index} className="p-4 md:p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20 text-center hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Significance */}
            <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-lg border-2 border-primary/20 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-md">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">{t.significance.title}</h2>
              </div>
              <ul className="space-y-3">
                {t.significance.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-0.5">✨</span>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking */}
            <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-lg border-2 border-secondary/20 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-secondary to-accent rounded-xl shadow-md">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">{t.booking.title}</h2>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{t.booking.note}</p>
              <a 
                href={`tel:${t.booking.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:shadow-lg transition-all font-bold text-lg"
              >
                📞 {t.booking.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JagaranGondal;