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
    temple: 'श्री खंडोबा मंदिर',
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
    temple: 'Shri Khandoba Temple',
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
    temple: 'श्री खंडोबा मंदिर',
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
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          {/* Temple Name - Top Row */}
          <div className="flex items-center justify-center gap-3 py-4 border-b border-border/50 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20">
            <img 
              src={khandobaLogo} 
              alt="Shri Khandoba" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-md border-2 border-primary"
            />
            <div className="text-center">
              <h1 className="text-lg md:text-2xl font-bold text-foreground">{t.temple}</h1>
              <p className="text-xs md:text-sm text-muted-foreground">{t.location}</p>
            </div>
          </div>
          
          {/* Navigation Row */}
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={khandobaLogo} 
                alt="Shri Khandoba Devsthan Nimgaon Dawadi" 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-lg border-2 border-primary"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Language Selector & Social Media & Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Social Media Icons */}
              <div className="flex items-center gap-2">
                <a 
                  href="https://instagram.com/nimgaon_cha_raja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@NimgaonKhandoba" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>

              <div className="flex gap-0.5 bg-muted rounded-md p-0.5">
                {(['mr', 'en', 'hi'] as Language[]).map((lang) => (
                  <Button
                    key={lang}
                    variant={language === lang ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setLanguage(lang)}
                    className="text-xs px-2 py-1 h-7 min-w-[45px]"
                  >
                    {languageNames[lang]}
                  </Button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
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
      <footer className="bg-gradient-to-b from-card to-muted/30 border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Temple Info Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src={khandobaLogo} 
                  alt="Shri Khandoba" 
                  className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-primary"
                />
                <div>
                  <h3 className="font-bold text-foreground text-lg">{t.temple}</h3>
                  <p className="text-sm text-muted-foreground">{t.location}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {language === 'mr' 
                  ? 'श्री खंडोबा मंदिर, निमगाव-दावडी येथे आपले स्वागत आहे। येथे दर्शन घेऊन आशीर्वाद घ्या.'
                  : language === 'hi'
                  ? 'श्री खंडोबा मंदिर, निमगांव-दावडी में आपका स्वागत है। यहां दर्शन करें और आशीर्वाद प्राप्त करें।'
                  : 'Welcome to Shri Khandoba Temple, Nimgaon-Davadi. Visit us for divine blessings.'}
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-foreground text-lg mb-4">
                {language === 'mr' ? 'द्रुत दुवे' : language === 'hi' ? 'त्वरित लिंक' : 'Quick Links'}
              </h3>
              <nav className="flex flex-col space-y-2">
                {navLinks.slice(0, 6).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-foreground text-lg mb-4">
                {language === 'mr' ? 'संपर्क माहिती' : language === 'hi' ? 'संपर्क जानकारी' : 'Contact Info'}
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-1">Shri Babasaheb Bhagat</p>
                  <p className="text-muted-foreground mb-1">(Khandoba Pujari)</p>
                  <a href="tel:9922058279" className="text-primary hover:underline font-medium">
                    📞 9922058279
                  </a>
                </div>
                <div className="pt-2">
                  <p className="font-semibold text-foreground mb-1">
                    {language === 'mr' ? 'पत्ता:' : language === 'hi' ? 'पता:' : 'Address:'}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Khandoba Temple, Deulwada<br />
                    Nimgaon, Rajgurunagar<br />
                    Khed, Pune 410505
                  </p>
                </div>
                <a 
                  href="https://share.google/pyGTj5JORfdA1TkLd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  {language === 'mr' ? 'Google Maps वर पहा' : language === 'hi' ? 'Google Maps पर देखें' : 'View on Google Maps'}
                </a>
              </div>
            </div>

            {/* Map Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-foreground text-lg mb-4">
                {language === 'mr' ? 'आमचे स्थान' : language === 'hi' ? 'हमारा स्थान' : 'Our Location'}
              </h3>
              <div className="w-full h-48 rounded-lg overflow-hidden shadow-md border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.8234567890123!2d73.9167!3d18.9667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU4JzAwLjEiTiA3M8KwNTUnMDAuMSJF!5e0!3m2!1sen!2sin!4v1234567890123"
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
                    className="p-2.5 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@NimgaonKhandoba" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-6 text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © 2025 {t.temple}, {t.location}. {language === 'mr' ? 'सर्व हक्क राखीव.' : language === 'hi' ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}
            </p>
            <p className="font-bold text-primary text-lg">जय मल्हार | Jai Malhar</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
