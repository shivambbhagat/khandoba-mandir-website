import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin, Heart, Users } from 'lucide-react';

const content = {
  mr: {
    title: 'संपर्क आणि दान',
    subtitle: 'आमच्याशी संपर्क साधा',
    contact: {
      title: 'संपर्क माहिती',
      phone: 'फोन',
      address: 'पत्ता',
      addressLine: 'श्री खंडोबा मंदिर, निमगाव-दावडी, तालुका बारामती, जिल्हा पुणे, महाराष्ट्र - ४१३११५'
    },
    donation: {
      title: 'देणगी आणि दान',
      description: 'श्री खंडोबा मंदिराच्या देखभाल, दुरुस्ती आणि धार्मिक कार्यासाठी तुमचे दान अत्यंत उपयुक्त ठरते. तुमच्या योगदानाने गरीबांना अन्नदान, मंदिराची देखभाल आणि विविध धार्मिक कार्ये चालू राहतात.',
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
      description: 'मंदिरात विविध सेवा करण्याची संधी उपलब्ध आहे',
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
      description: 'तुमचे प्रश्न, सूचना किंवा प्रतिक्रिया आम्हाला कळवा. आम्ही लवकरच तुमच्याशी संपर्क साधू.',
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
      addressLine: 'Shri Khandoba Temple, Nimgaon-Davadi, Taluka Baramati, District Pune, Maharashtra - 413115'
    },
    donation: {
      title: 'Donations & Contributions',
      description: 'Your donations are extremely useful for the maintenance, repair and religious activities of Shri Khandoba Temple. Your contribution helps in food donation to the poor, temple maintenance and various religious activities.',
      ways: {
        title: 'Ways to Donate',
        items: [
          'Direct visit to the temple',
          'Through bank transfer',
          'By organizing Bhandara',
          'Special contribution for temple development'
        ]
      },
      benefits: {
        title: 'Use of Your Donation',
        items: [
          'Food donation to the poor (Bhandara)',
          'Daily temple maintenance',
          'Organization of religious festivals',
          'Facilities for devotees',
          'Cleanliness of temple premises'
        ]
      }
    },
    seva: {
      title: 'Seva Opportunities',
      description: 'Various seva opportunities available at the temple',
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
      description: 'Let us know your questions, suggestions or feedback. We will contact you soon.',
      note: 'Please contact by phone or visit the temple directly.'
    }
  },
  hi: {
    title: 'संपर्क और दान',
    subtitle: 'संपर्क करें',
    contact: {
      title: 'संपर्क जानकारी',
      phone: 'फोन',
      address: 'पता',
      addressLine: 'श्री खंडोबा मंदिर, निमगांव-दावडी, तालुका बारामती, जिला पुणे, महाराष्ट्र - ४१३११५'
    },
    donation: {
      title: 'दान और योगदान',
      description: 'श्री खंडोबा मंदिर के रखरखाव, मरम्मत और धार्मिक कार्यों के लिए आपका दान अत्यंत उपयोगी है। आपके योगदान से गरीबों को अन्नदान, मंदिर का रखरखाव और विभिन्न धार्मिक कार्य जारी रहते हैं।',
      ways: {
        title: 'दान देने के तरीके',
        items: [
          'सीधे मंदिर में आकर',
          'बैंक स्थानांतरण के माध्यम से',
          'भंडारा आयोजन करके',
          'मंदिर के विकास के लिए विशेष योगदान'
        ]
      },
      benefits: {
        title: 'आपके दान का उपयोग',
        items: [
          'गरीबों को अन्नदान (भंडारा)',
          'मंदिर का दैनिक रखरखाव',
          'धार्मिक उत्सवों का आयोजन',
          'भक्तों के लिए सुविधाएं',
          'मंदिर परिसर की स्वच्छता'
        ]
      }
    },
    seva: {
      title: 'सेवा अवसर',
      description: 'मंदिर में विभिन्न सेवा करने का अवसर उपलब्ध है',
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
      description: 'अपने प्रश्न, सुझाव या प्रतिक्रिया हमें बताएं। हम जल्द ही आपसे संपर्क करेंगे।',
      note: 'कृपया फोन द्वारा संपर्क करें या सीधे मंदिर में आएं।'
    }
  }
};

const Contact = () => {
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

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
            <h2 className="text-2xl font-bold mb-6 text-foreground">{t.contact.title}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">{t.contact.phone}</p>
                  <a 
                    href="tel:9922058279" 
                    className="text-2xl font-bold text-primary hover:text-secondary transition-colors"
                  >
                    9922058279
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">{t.contact.address}</p>
                  <p className="text-muted-foreground">{t.contact.addressLine}</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">{t.message.title}</h2>
            <p className="text-muted-foreground mb-4">{t.message.description}</p>
            <p className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
              {t.message.note}
            </p>
          </Card>
        </div>

        {/* Donation Section */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">{t.donation.title}</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8">{t.donation.description}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{t.donation.ways.title}</h3>
              <ul className="space-y-3">
                {t.donation.ways.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{t.donation.benefits.title}</h3>
              <ul className="space-y-3">
                {t.donation.benefits.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* Seva Opportunities */}
        <Card className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">{t.seva.title}</h2>
          </div>
          <p className="text-muted-foreground mb-6">{t.seva.description}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.seva.items.map((item, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg text-center">
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
