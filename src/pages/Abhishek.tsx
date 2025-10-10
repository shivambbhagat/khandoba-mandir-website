import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  mr: {
    title: 'अभिषेक',
    subtitle: 'येथे लवकरच सामग्री उपलब्ध होईल'
  },
  en: {
    title: 'Abhishek',
    subtitle: 'Content coming soon'
  },
  hi: {
    title: 'अभिषेक',
    subtitle: 'सामग्री जल्द ही उपलब्ध होगी'
  }
};

const Abhishek = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t.title}</h1>
        <p className="text-xl text-muted-foreground">{t.subtitle}</p>
      </div>
    </div>
  );
};

export default Abhishek;
