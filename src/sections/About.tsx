import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Target, Users, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  const values = [
    {
      icon: Target,
      title: t('values.trust.title'),
      description: t('values.trust.desc'),
    },
    {
      icon: Award,
      title: t('values.quality.title'),
      description: t('values.quality.desc'),
    },
    {
      icon: Users,
      title: t('values.communication.title'),
      description: t('values.communication.desc'),
    },
    {
      icon: CheckCircle,
      title: t('values.support.title'),
      description: t('values.support.desc'),
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-white overflow-hidden"
    >
      {/* Decorative Vector */}
      <div
        className={`absolute top-20 right-10 w-40 h-40 transition-all duration-1000 ${
          isVisible ? 'opacity-100 rotate-0' : 'opacity-0 rotate-45'
        }`}
      >
        <img
          src="/images/about-vector.png"
          alt="Decorative"
          className="w-full h-full object-contain animate-float"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-vutalead-cyan/10 text-vutalead-cyan font-body font-medium text-sm mb-4">
            {t('about.badge')}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-vutalead-black mb-4">
            {t('about.title')}
          </h2>
          <p className="text-vutalead-black/60 font-body text-lg max-w-2xl mx-auto">
            {t('about.description1')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-image.jpg"
                alt="Vutalead Team"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-vutalead-black/30 to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-vutalead-cyan text-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-heading font-bold">5+</div>
              <div className="text-sm font-body text-white/80">{t('about.experience')}</div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-vutalead-cyan/30 rounded-2xl" />
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-vutalead-black mb-6">
              {t('about.subtitle')}
            </h3>

            <p className="text-vutalead-black/60 font-body text-lg mb-6">
              {t('about.description1')}
            </p>

            <p className="text-vutalead-black/60 font-body text-lg mb-8">
              {t('about.description2')}
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`group p-4 rounded-xl bg-vutalead-lightgray hover:bg-vutalead-cyan transition-all duration-300 cursor-default ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-vutalead-cyan/10 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <value.icon className="w-5 h-5 text-vutalead-cyan group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-vutalead-black group-hover:text-white mb-1 transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-vutalead-black/60 group-hover:text-white/80 text-sm font-body transition-colors">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-vutalead-cyan/5 to-vutalead-cyan/10 border border-vutalead-cyan/20">
              <blockquote className="text-vutalead-black font-body italic text-lg">
                {t('about.quote')}
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-vutalead-cyan flex items-center justify-center">
                  <span className="text-white font-heading font-bold">V</span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-vutalead-black">{t('about.team')}</div>
                  <div className="text-vutalead-black/50 text-sm font-body">{t('about.teamRole')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
