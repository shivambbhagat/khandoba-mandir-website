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
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t.title}</h1>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
