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

            {/* Language Selector & Mobile Menu */}
            <div className="flex items-center gap-2">
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
      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center space-y-6">
            {/* Contact Section */}
            <div className="text-sm">
              <p className="font-semibold text-foreground mb-1 text-base">Contact: Shri Babasaheb Bhagat</p>
              <p className="text-muted-foreground mb-2">(Khandoba Pujari)</p>
              <a href="tel:9922058279" className="text-primary hover:underline font-medium text-lg">
                9922058279
              </a>
            </div>
            
            {/* Address Section */}
            <div className="text-sm border-t border-border pt-6">
              <p className="font-semibold text-foreground mb-2">Address:</p>
              <p className="text-muted-foreground mb-3">
                Khandoba Temple, Deulwada, Nimgaon<br />
                Rajgurunagar, Khed, Pune 410505
              </p>
              <a 
                href="https://share.google/pyGTj5JORfdA1TkLd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                <MapPin className="w-4 h-4" />
                View on Google Maps
              </a>
            </div>
            
            {/* Copyright */}
            <div className="text-sm text-muted-foreground border-t border-border pt-6">
              <p className="mb-2">© 2025 {t.temple}, {t.location}</p>
              <p className="font-semibold">जय मल्हार | Jai Malhar</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
