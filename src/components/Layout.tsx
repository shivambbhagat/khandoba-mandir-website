import { Link, useLocation } from 'react-router-dom';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Instagram, Facebook, Youtube, MapPin } from 'lucide-react';
import { useState } from 'react';
import khandobaLogo from '@/assets/khandoba-logo.jpeg';

const translations = {
  mr: {
    home: 'मुख्यपृष्ठ',
    history: 'इतिहास आणि महत्त्व',
    visit: 'दर्शन योजना',
    contact: 'संपर्क',
    jagaranGondal: 'जागरण गोंधळ',
    abhishek: 'अभिषेक',
    gallery: 'फोटो गॅलरी',
    utsav: 'उत्सव',
    temple: 'निमगाव खंडोबा मंदिर',
    location: 'निमगाव-दावडी'
  },
  en: {
    home: 'Home',
    history: 'History & Significance',
    visit: 'Plan Your Visit',
    contact: 'Contact',
    jagaranGondal: 'Jagaran Gondal',
    abhishek: 'Abhishek',
    gallery: 'Photo Gallery',
    utsav: 'Festivals',
    temple: 'Nimgaon Khandoba Temple',
    location: 'Nimgaon-Davadi'
  },
  hi: {
    home: 'मुख्य पृष्ठ',
    history: 'इतिहास और महत्व',
    visit: 'दर्शन योजना',
    contact: 'संपर्क',
    jagaranGondal: 'जागरण गोंदल',
    abhishek: 'अभिषेक',
    gallery: 'फोटो गैलरी',
    utsav: 'उत्सव',
    temple: 'निमगाव खंडोबा मंदिर',
    location: 'निमगांव-दावडी'
  }
};

const languageNames = {
  mr: 'मराठी',
  en: 'English',
  hi: 'हिन्दी'
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const navLinks = [
    { path: '/', label: t.home },
    { path: '/history', label: t.history },
    { path: '/visit', label: t.visit },
    { path: '/contact', label: t.contact },
    { path: '/jagaran-gondal', label: t.jagaranGondal },
    { path: '/abhishek', label: t.abhishek },
    { path: '/gallery', label: t.gallery },
    { path: '/utsav', label: t.utsav }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 dark:from-orange-950/40 dark:via-yellow-950/40 dark:to-red-950/40 border-b-4 border-primary shadow-lg overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Temple Name - Top Row */}
          <div className="flex items-center justify-center gap-3 py-4 border-b border-primary/20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
            <img 
              src={khandobaLogo} 
              alt="Shri Khandoba" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-lg border-2 border-primary ring-2 ring-primary/30"
            />
            <div className="text-center">
              <h1 className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">{t.temple}</h1>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">{t.location}</p>
            </div>
          </div>
          
          {/* Navigation Row */}
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={khandobaLogo} 
                alt="Shri Khandoba Devsthan Nimgaon Dawadi" 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-lg border-2 border-primary ring-2 ring-primary/30"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-white/60 dark:bg-card/60 backdrop-blur-sm rounded-xl p-1 shadow-md border border-primary/20">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                      : 'text-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Language Selector & Social Media & Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Social Media Icons */}
              <div className="flex items-center gap-1">
                <a 
                  href="https://instagram.com/nimgaon_cha_raja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-full hover:scale-110 transition-all shadow-md"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full hover:scale-110 transition-all shadow-md"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.youtube.com/@NimgaonKhandoba" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-full hover:scale-110 transition-all shadow-md"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>

              <div className="flex gap-0.5 bg-white/60 dark:bg-card/60 backdrop-blur-sm rounded-lg p-1 shadow-md border border-primary/20">
                {(['mr', 'en', 'hi'] as Language[]).map((lang) => (
                  <Button
                    key={lang}
                    variant={language === lang ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setLanguage(lang)}
                    className={`text-xs px-2 py-1 h-7 min-w-[45px] ${language === lang ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' : ''}`}
                  >
                    {languageNames[lang]}
                  </Button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden bg-white/60 dark:bg-card/60 backdrop-blur-sm shadow-md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-primary/20 bg-white/60 dark:bg-card/60 backdrop-blur-sm rounded-b-xl mb-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                      : 'text-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Social Media Sidebar - Fixed on Right */}
      <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-3 z-40">
        <a 
          href="https://instagram.com/nimgaon_cha_raja" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all shadow-lg hover:shadow-xl"
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all shadow-lg hover:shadow-xl"
          aria-label="Facebook"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a 
          href="https://www.youtube.com/@NimgaonKhandoba" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all shadow-lg hover:shadow-xl"
          aria-label="YouTube"
        >
          <Youtube className="w-6 h-6" />
        </a>
      </div>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 dark:from-orange-950/20 dark:via-yellow-950/20 dark:to-red-950/20 border-t-4 border-primary mt-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Quick Links Column */}
            <div className="space-y-4 bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-secondary/20 hover:shadow-2xl transition-shadow">
              <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-lg mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
                {language === 'mr' ? 'द्रुत दुवे' : language === 'hi' ? 'त्वरित लिंक' : 'Quick Links'}
              </h3>
              <nav className="flex flex-col space-y-2">
                {navLinks.slice(0, 6).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info Column */}
            <div className="space-y-4 bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-accent/20 hover:shadow-2xl transition-shadow">
              <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent text-lg mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-secondary to-accent rounded-full" />
                {language === 'mr' ? 'संपर्क माहिती' : language === 'hi' ? 'संपर्क जानकारी' : 'Contact Info'}
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-1">Shri Babasaheb Bhagat</p>
                  <p className="text-muted-foreground mb-1">(Khandoba Pujari)</p>
                  <a href="tel:9922058279" className="inline-flex items-center gap-1 text-primary hover:underline font-medium">
                    📞 9922058279
                  </a>
                </div>
              </div>
            </div>

            {/* Address Column */}
            <div className="space-y-4 bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary/20 hover:shadow-2xl transition-shadow">
              <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary text-lg mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-full" />
                {language === 'mr' ? 'पत्ता' : language === 'hi' ? 'पता' : 'Address'}
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-muted-foreground leading-relaxed">
                  Khandoba Temple, Deulwada<br />
                  Nimgaon, Rajgurunagar<br />
                  Khed, Pune 410505
                </p>
                <a 
                  href="https://maps.app.goo.gl/qp2P9AB6gwkKhVUDA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium hover:translate-x-1 transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  {language === 'mr' ? 'Google Maps वर पहा' : language === 'hi' ? 'Google Maps पर देखें' : 'View on Google Maps'}
                </a>
              </div>
            </div>

            {/* Map Column */}
            <div className="space-y-4 bg-white/60 dark:bg-card/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-300/20 hover:shadow-2xl transition-shadow">
              <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-lg mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full" />
                {language === 'mr' ? 'आमचे स्थान' : language === 'hi' ? 'हमारा स्थान' : 'Our Location'}
              </h3>
              <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg border-2 border-primary/30 ring-2 ring-primary/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2237.725927941025!2d73.93031036119193!3d18.80650980119479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2cb86bf09a16b%3A0xd98a4fc13b2cbb01!2sKHANDOBA%20TEMPLE%20DAWADI%20NIMGAON!5e1!3m2!1sen!2sus!4v1763878712127!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Temple Location"
                />
              </div>
              {/* Social Media Links */}
              <div>
                <p className="font-semibold text-foreground mb-3 text-sm">
                  {language === 'mr' ? 'आमच्याशी जुडा:' : language === 'hi' ? 'हमसे जुड़ें:' : 'Connect With Us:'}
                </p>
                <div className="flex gap-3">
                  <a 
                    href="https://instagram.com/nimgaon_cha_raja" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-full hover:scale-110 transition-all shadow-lg hover:shadow-xl"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full hover:scale-110 transition-all shadow-lg hover:shadow-xl"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@NimgaonKhandoba" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-full hover:scale-110 transition-all shadow-lg hover:shadow-xl"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t-2 border-primary/20 pt-8 mt-8 text-center space-y-3 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-t-3xl px-6 py-6">
            <p className="text-sm text-muted-foreground">
              © 2025 {t.temple}, {t.location}. {language === 'mr' ? 'सर्व हक्क राखीव.' : language === 'hi' ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}
            </p>
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-600 to-red-600 text-xl">
              जय मल्हार | Jai Malhar
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
