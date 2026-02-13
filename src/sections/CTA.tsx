import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '', service: '' });
      
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      value: '+255 758 277 637',
      link: 'https://wa.me/255758277637',
      color: 'bg-green-500',
    },
    {
      icon: Mail,
      title: t('contact.email'),
      value: 'info@vutalead.com',
      link: 'mailto:info@vutalead.com',
      color: 'bg-vutalead-cyan',
    },
    {
      icon: MapPin,
      title: t('contact.location'),
      value: 'Dar es Salaam, Tanzania',
      link: '#',
      color: 'bg-vutalead-black',
    },
  ];

  const socialLinks = [
    { name: 'Instagram', link: 'https://instagram.com/vutalead', icon: 'instagram' },
    { name: 'TikTok', link: 'https://tiktok.com/@vutalead', icon: 'tiktok' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background - Dark */}
      <div className="absolute inset-0 z-0 bg-vutalead-black">
        <div className="absolute inset-0 bg-gradient-to-br from-vutalead-gray via-vutalead-black to-vutalead-black" />
        
        {/* Cyan glow */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 70% 30%, rgba(0, 188, 212, 0.2) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-2xl bg-vutalead-cyan/20 backdrop-blur-sm animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-vutalead-cyan/15 backdrop-blur-sm animate-float-delayed" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-vutalead-cyan/20 border border-vutalead-cyan/30 text-vutalead-cyan font-body font-medium text-sm mb-6">
              {t('contact.badge')}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-white/70 font-body text-lg mb-8">
              {t('contact.description')}
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white/50 font-body text-sm">{info.title}</div>
                    <div className="text-white font-body font-semibold group-hover:text-vutalead-cyan transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-white/50 font-body text-sm mb-3">{t('contact.socialMedia')}</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-vutalead-cyan rounded-lg transition-all group"
                  >
                    <span className="text-white font-body text-sm">{social.name}</span>
                    <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Tagline */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-white font-heading text-xl font-bold italic">
                {t('contact.tagline')}
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="font-heading text-2xl font-bold text-vutalead-black mb-2">
                {t('contact.form.title')}
              </h3>
              <p className="text-vutalead-black/60 font-body mb-6">
                {t('contact.form.desc')}
              </p>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-vutalead-cyan/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-vutalead-cyan" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-vutalead-black mb-2">
                    {t('contact.form.success.title')}
                  </h4>
                  <p className="text-vutalead-black/60 font-body">
                    {t('contact.form.success.desc')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-vutalead-black font-body font-medium text-sm mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.form.namePlaceholder')}
                      className="w-full px-4 py-3 rounded-xl border border-vutalead-lightgray focus:border-vutalead-cyan focus:ring-2 focus:ring-vutalead-cyan/20 outline-none transition-all font-body"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-vutalead-black font-body font-medium text-sm mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-vutalead-lightgray focus:border-vutalead-cyan focus:ring-2 focus:ring-vutalead-cyan/20 outline-none transition-all font-body"
                      />
                    </div>
                    <div>
                      <label className="block text-vutalead-black font-body font-medium text-sm mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t('contact.form.phonePlaceholder')}
                        className="w-full px-4 py-3 rounded-xl border border-vutalead-lightgray focus:border-vutalead-cyan focus:ring-2 focus:ring-vutalead-cyan/20 outline-none transition-all font-body"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-vutalead-black font-body font-medium text-sm mb-2">
                      {t('contact.form.service')}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-vutalead-lightgray focus:border-vutalead-cyan focus:ring-2 focus:ring-vutalead-cyan/20 outline-none transition-all font-body bg-white"
                    >
                      <option value="">{t('contact.form.selectService')}</option>
                      <option value="website">Website Development</option>
                      <option value="maintenance">Website Maintenance</option>
                      <option value="ai">AI Automation</option>
                      <option value="social">Social Media Management</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-vutalead-black font-body font-medium text-sm mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder={t('contact.form.messagePlaceholder')}
                      className="w-full px-4 py-3 rounded-xl border border-vutalead-lightgray focus:border-vutalead-cyan focus:ring-2 focus:ring-vutalead-cyan/20 outline-none transition-all font-body resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-liquid group flex items-center justify-center gap-2 bg-vutalead-cyan hover:bg-vutalead-cyan/90 text-white py-4 rounded-xl font-body font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-vutalead-cyan/30 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        {t('contact.form.send')}
                        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
