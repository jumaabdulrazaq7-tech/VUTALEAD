import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background - Black with gradient */}
      <div className="absolute inset-0 z-0 bg-vutalead-black">
        <div className="absolute inset-0 bg-gradient-to-br from-vutalead-gray via-vutalead-black to-vutalead-black" />
        
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(0, 188, 212, 0.15) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Floating Shapes with Cyan accents */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-2xl bg-vutalead-cyan/20 backdrop-blur-sm animate-float"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
          }}
        />
        <div
          className="absolute top-40 right-20 w-24 h-24 rounded-full bg-vutalead-cyan/10 backdrop-blur-sm animate-float-delayed"
          style={{
            transform: `translate(${-mousePosition.x * 2}px, ${-mousePosition.y * 2}px)`,
          }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-40 h-40 rounded-2xl bg-vutalead-cyan/15 backdrop-blur-sm animate-float"
          style={{
            transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vutalead-cyan/20 border border-vutalead-cyan/30 mb-6 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Sparkles className="w-4 h-4 text-vutalead-cyan" />
              <span className="text-vutalead-cyan text-sm font-body font-medium">{t('hero.badge')}</span>
            </div>

            {/* Main Heading */}
            <h1
              className={`font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="block">{t('hero.title1')}</span>
              <span className="block text-vutalead-cyan">
                {t('hero.title2')}
              </span>
              <span className="block">{t('hero.title3')}</span>
            </h1>

            {/* Description */}
            <p
              className={`text-lg text-white/70 font-body mb-8 max-w-xl mx-auto lg:mx-0 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                onClick={() => scrollToSection('#services')}
                className="btn-liquid group flex items-center justify-center gap-2 bg-vutalead-cyan hover:bg-vutalead-cyan/90 text-white px-8 py-4 rounded-full font-body font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-vutalead-cyan/30"
              >
                {t('hero.ourServices')}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-body font-semibold transition-all duration-300 hover:bg-white/20"
              >
                {t('hero.contactUs')}
              </button>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 transition-all duration-1000 delay-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <TrendingUp className="w-5 h-5 text-vutalead-cyan" />
                  <span className="text-2xl font-heading font-bold text-white">50+</span>
                </div>
                <span className="text-white/50 text-sm font-body">{t('hero.stats.projects')}</span>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Shield className="w-5 h-5 text-vutalead-cyan" />
                  <span className="text-2xl font-heading font-bold text-white">30+</span>
                </div>
                <span className="text-white/50 text-sm font-body">{t('hero.stats.clients')}</span>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Sparkles className="w-5 h-5 text-vutalead-cyan" />
                  <span className="text-2xl font-heading font-bold text-white">98%</span>
                </div>
                <span className="text-white/50 text-sm font-body">{t('hero.stats.satisfaction')}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div
            className={`hidden lg:block relative transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative">
              {/* Main Visual Card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {/* Service Card 1 */}
                  <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-xl bg-vutalead-cyan/30 flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-heading font-semibold mb-1">Website</h3>
                    <p className="text-white/50 text-sm font-body">Kisasa & salama</p>
                  </div>

                  {/* Service Card 2 */}
                  <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-xl bg-vutalead-cyan/30 flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-heading font-semibold mb-1">Maintenance</h3>
                    <p className="text-white/50 text-sm font-body">Msaada wa kila siku</p>
                  </div>

                  {/* Service Card 3 */}
                  <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-xl bg-vutalead-cyan/30 flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-heading font-semibold mb-1">AI Automation</h3>
                    <p className="text-white/50 text-sm font-body">Hariri muda wako</p>
                  </div>

                  {/* Service Card 4 */}
                  <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-xl bg-vutalead-cyan/30 flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-heading font-semibold mb-1">Social Media</h3>
                    <p className="text-white/50 text-sm font-body">Simamia mitandao yako</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-vutalead-cyan text-white px-4 py-2 rounded-full font-body font-bold text-sm shadow-lg animate-pulse-soft">
                {t('hero.comingSoon')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave - White */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
