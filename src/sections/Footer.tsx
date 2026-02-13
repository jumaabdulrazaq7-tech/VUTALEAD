import { Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Website Development', href: '#services' },
      { name: 'Website Maintenance', href: '#services' },
      { name: 'AI Automation', href: '#services' },
      { name: 'Social Media Management', href: '#services' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Packages', href: '#packages' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'FAQ', href: '#faq' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Get a Quote', href: '#contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/vutalead', label: 'Instagram' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-vutalead-black overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/logo.png" 
                  alt="Vutalead Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <p className="text-white/60 font-body text-sm mb-6 leading-relaxed">
              Digital Solutions for Growing Businesses. Tunasaidia biashara, shule, na taasisi kukua mtandaoni kwa kutoa website za kisasa na mifumo ya kidigitali.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-vutalead-cyan flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-vutalead-cyan font-body text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">{t('footer.company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/60 hover:text-vutalead-cyan font-body text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-vutalead-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/40 font-body text-xs">{t('contact.phone')}</div>
                  <a
                    href="https://wa.me/255758277637"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-body text-sm hover:text-vutalead-cyan transition-colors"
                  >
                    +255 758 277 637
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-vutalead-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/40 font-body text-xs">{t('contact.email')}</div>
                  <a
                    href="mailto:info@vutalead.com"
                    className="text-white font-body text-sm hover:text-vutalead-cyan transition-colors"
                  >
                    info@vutalead.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-vutalead-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/40 font-body text-xs">{t('contact.location')}</div>
                  <span className="text-white font-body text-sm">
                    Dar es Salaam, Tanzania
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 font-body text-sm text-center md:text-left">
              © {currentYear} Vutalead. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white/40 hover:text-white font-body text-sm transition-colors"
              >
                {t('footer.privacy')}
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white font-body text-sm transition-colors"
              >
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-vutalead-cyan hover:bg-vutalead-cyan/90 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
