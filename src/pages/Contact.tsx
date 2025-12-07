import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, MapPin, Heart, Users } from 'lucide-react';

const content = {
  mr: {
    title: 'संपर्क आणि दान',
    subtitle: 'आमच्याशी संपर्क साधा',
    contact: {
      title: 'संपर्क माहिती',
      phone: 'फोन',
      address: 'पत्ता',
      addressLine: 'श्री खंडोबा मंदिर, निमगाव-दावडी, तालुका खेड, जिल्हा पुणे, महाराष्ट्र - ४१०५०५'
    },
    donation: {
      title: 'देणगी आणि दान',
      description: 'श्री खंडोबा मंदिराच्या देखभाल, दुरुस्ती आणि धार्मिक कार्यासाठी तुमचे दान अत्यंत उपयुक्त ठरते.',
      ways: {
        title: 'दान देण्याचे मार्ग',
        items: [
          'थेट मंदिरात भेट देऊन',
          'बँक हस्तांतरणाद्वारे',
          'भंडारा आयोजन करून',
          'मंदिराच्या विकासासाठी विशेष योगदान'
        ]
      },
      benefits: {
        title: 'तुमच्या दानाचा उपयोग',
        items: [
          'गरीबांना अन्नदान (भंडारा)',
          'मंदिराची दैनंदिन देखभाल',
          'धार्मिक उत्सवांचे आयोजन',
          'भक्तांसाठी सुविधा',
          'मंदिर परिसराची स्वच्छता'
        ]
      }
    },
    seva: {
      title: 'सेवा संधी',
      description: 'मंदिरात विविध सेवा करण्याची संधी उपलब्ध',
      items: [
        'मंदिर स्वच्छता सेवा',
        'भंडार्‍यात सेवा',
        'भक्तांना मार्गदर्शन',
        'उत्सवात सहकार्य',
        'प्रसाद वितरण'
      ]
    },
    message: {
      title: 'संदेश पाठवा',
      description: 'तुमचे प्रश्न, सूचना किंवा प्रतिक्रिया आम्हाला कळवा.',
      note: 'कृपया फोनद्वारे संपर्क साधा किंवा थेट मंदिरात भेट द्या.'
    }
  },
  en: {
    title: 'Contact & Donations',
    subtitle: 'Get in Touch',
    contact: {
      title: 'Contact Information',
      phone: 'Phone',
      address: 'Address',
      addressLine: 'Shri Khandoba Temple, Nimgaon-Davadi, Taluka Khed, District Pune, Maharashtra - 410505'
    },
    donation: {
      title: 'Donations & Contributions',
      description: 'Your donations are extremely useful for the maintenance and religious activities of Shri Khandoba Temple.',
      ways: {
        title: 'Ways to Donate',
        items: [
          'Direct visit to the temple',
          'Through bank transfer',
          'By organizing Bhandara',
          'Special contribution for development'
        ]
      },
      benefits: {
        title: 'Use of Your Donation',
        items: [
          'Food donation to the poor',
          'Daily temple maintenance',
          'Organization of religious festivals',
          'Facilities for devotees',
          'Cleanliness of temple premises'
        ]
      }
    },
    seva: {
      title: 'Seva Opportunities',
      description: 'Various seva opportunities available at temple',
      items: [
        'Temple cleaning service',
        'Service in Bhandara',
        'Guidance to devotees',
        'Cooperation in festivals',
        'Prasad distribution'
      ]
    },
    message: {
      title: 'Send a Message',
      description: 'Let us know your questions, suggestions or feedback.',
      note: 'Please contact by phone or visit temple directly.'
    }
  },
  hi: {
    title: 'संपर्क और दान',
    subtitle: 'संपर्क करें',
    contact: {
      title: 'संपर्क जानकारी',
      phone: 'फोन',
      address: 'पता',
      addressLine: 'श्री खंडोबा मंदिर, निमगांव-दावडी, तालुका खेड, जिला पुणे, महाराष्ट्र - ४१०५०५'
    },
    donation: {
      title: 'दान और योगदान',
      description: 'श्री खंडोबा मंदिर के रखरखाव और धार्मिक कार्यों के लिए आपका दान अत्यंत उपयोगी है।',
      ways: {
        title: 'दान देने के तरीके',
        items: [
          'सीधे मंदिर में आकर',
          'बैंक स्थानांतरण के माध्यम से',
          'भंडारा आयोजन करके',
          'विकास के लिए विशेष योगदान'
        ]
      },
      benefits: {
        title: 'आपके दान का उपयोग',
        items: [
          'गरीबों को अन्नदान',
          'मंदिर का दैनिक रखरखाव',
          'धार्मिक उत्सवों का आयोजन',
          'भक्तों के लिए सुविधाएं',
          'मंदिर परिसर की स्वच्छता'
        ]
      }
    },
    seva: {
      title: 'सेवा अवसर',
      description: 'मंदिर में विभिन्न सेवा का अवसर उपलब्ध है',
      items: [
        'मंदिर सफाई सेवा',
        'भंडारे में सेवा',
        'भक्तों को मार्गदर्शन',
        'उत्सव में सहयोग',
        'प्रसाद वितरण'
      ]
    },
    message: {
      title: 'संदेश भेजें',
      description: 'अपने प्रश्न, सुझाव या प्रतिक्रिया हमें बताएं।',
      note: 'कृपया फोन द्वारा संपर्क करें या सीधे मंदिर आएं।'
    }
  }
};

const Contact = () => {
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
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border-2 border-primary/20 hover:shadow-2xl transition-shadow">
              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">{t.contact.title}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-md">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{t.contact.phone}</p>
                    <a 
                      href="tel:9922058279" 
                      className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 hover:from-red-600 hover:to-pink-600 transition-all"
                    >
                      9922058279
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-secondary to-accent rounded-xl shadow-md">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{t.contact.address}</p>
                    <p className="text-muted-foreground mb-2 leading-relaxed max-w-xs">{t.contact.addressLine}</p>
                    <a 
                      href="https://maps.app.goo.gl/qp2P9AB6gwkKhVUDA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:shadow-lg transition-all text-sm font-medium"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border-2 border-secondary/20 hover:shadow-2xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">{t.message.title}</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">{t.message.description}</p>
              <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                <p className="text-sm text-muted-foreground">{t.message.note}</p>
              </div>
            </div>
          </div>

          {/* Donation Section */}
          <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 mb-8 rounded-2xl shadow-lg border-2 border-accent/20 hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-xl shadow-md">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">{t.donation.title}</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t.donation.description}</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">{t.donation.ways.title}</h3>
                <ul className="space-y-3">
                  {t.donation.ways.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">{index + 1}</span>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-6 rounded-xl border border-secondary/20">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">{t.donation.benefits.title}</h3>
                <ul className="space-y-3">
                  {t.donation.benefits.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">✓</span>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Seva Opportunities */}
          <div className="bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-lg border-2 border-primary/20 hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-md">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">{t.seva.title}</h2>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">{t.seva.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {t.seva.items.map((item, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl text-center border border-primary/20 hover:shadow-lg transition-all">
                  <p className="text-foreground font-medium text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;