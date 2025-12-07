import { useLanguage } from '@/contexts/LanguageContext';
import galleryDeity1 from '@/assets/gallery-deity-1.jpg';
import galleryDeity2 from '@/assets/gallery-deity-2.jpg';
import khandobaDeity from '@/assets/khandoba-deity-new.jpg';

const content = {
  mr: {
    title: 'फोटो गॅलरी',
    subtitle: 'श्री खंडोबा देवस्थानाचे दिव्य दर्शन',
    images: [
      { src: galleryDeity1, alt: 'श्री खंडोबा देवाचे दर्शन', title: 'मुख्य देवस्थान' },
      { src: galleryDeity2, alt: 'श्री खंडोबा त्रिमूर्ती', title: 'त्रिमूर्ती दर्शन' },
      { src: khandobaDeity, alt: 'श्री खंडोबा आणि माऊली-मल्लाई', title: 'पूर्ण दर्शन' }
    ]
  },
  en: {
    title: 'Photo Gallery',
    subtitle: 'Divine Glimpses of Shri Khandoba Temple',
    images: [
      { src: galleryDeity1, alt: 'Shri Khandoba Deity Darshan', title: 'Main Shrine' },
      { src: galleryDeity2, alt: 'Shri Khandoba Trinity', title: 'Trinity Darshan' },
      { src: khandobaDeity, alt: 'Shri Khandoba with Mauli-Mallai', title: 'Complete Darshan' }
    ]
  },
  hi: {
    title: 'फोटो गैलरी',
    subtitle: 'श्री खंडोबा देवस्थान के दिव्य दर्शन',
    images: [
      { src: galleryDeity1, alt: 'श्री खंडोबा देव के दर्शन', title: 'मुख्य देवस्थान' },
      { src: galleryDeity2, alt: 'श्री खंडोबा त्रिमूर्ति', title: 'त्रिमूर्ति दर्शन' },
      { src: khandobaDeity, alt: 'श्री खंडोबा और माऊली-मल्लाई', title: 'संपूर्ण दर्शन' }
    ]
  }
};

const Gallery = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
            {t.title}
          </h1>
          <div className="flex justify-center my-6">
            <div className="h-2 w-32 bg-gradient-to-r from-primary via-secondary to-accent rounded-full shadow-lg" />
          </div>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50/30 via-yellow-50/30 to-red-50/30 dark:from-orange-950/5 dark:via-yellow-950/5 dark:to-red-950/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 ring-4 ring-primary/20 hover:ring-primary/40">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-sm p-4 rounded-xl">
                      <h3 className="text-xl font-bold text-white">{image.title}</h3>
                    </div>
                  </div>
                </div>
                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full opacity-80 flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;