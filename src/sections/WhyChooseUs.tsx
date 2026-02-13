import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Award, Shield, Clock, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setCountersStarted(true), 500);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 50, suffix: '+', label: t('stats.projects'), icon: TrendingUp },
    { value: 30, suffix: '+', label: t('stats.clients'), icon: Users },
    { value: 98, suffix: '%', label: t('stats.satisfaction'), icon: Award },
  ];

  const reasons = [
    {
      icon: Shield,
      title: t('whyChoose.reason1.title'),
      description: t('whyChoose.reason1.desc'),
    },
    {
      icon: HeartHandshake,
      title: t('whyChoose.reason2.title'),
      description: t('whyChoose.reason2.desc'),
    },
    {
      icon: TrendingUp,
      title: t('whyChoose.reason3.title'),
      description: t('whyChoose.reason3.desc'),
    },
    {
      icon: Clock,
      title: t('whyChoose.reason4.title'),
      description: t('whyChoose.reason4.desc'),
    },
  ];

  const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersStarted) return;

      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [countersStarted, value]);

    return (
      <span className="tabular-nums">
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section
      id="why-choose"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-vutalead-lightgray overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-vutalead-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-vutalead-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-vutalead-cyan/10 text-vutalead-cyan font-body font-medium text-sm mb-4">
            {t('whyChoose.badge')}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-vutalead-black mb-4">
            {t('whyChoose.title')}
          </h2>
          <p className="text-vutalead-black/60 font-body text-lg max-w-2xl mx-auto">
            {t('whyChoose.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/why-choose.jpg"
                alt="Why Choose Vutalead"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vutalead-black/30 to-transparent" />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-vutalead-cyan text-white p-6 rounded-2xl shadow-xl">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <stat.icon className="w-5 h-5 text-white/80 mr-1" />
                      <span className="text-2xl font-heading font-bold">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </span>
                    </div>
                    <span className="text-white/70 text-xs font-body block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-4 border-vutalead-cyan/30 rounded-2xl" />
          </div>

          {/* Right - Reasons */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`group p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-default ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-vutalead-cyan/10 group-hover:bg-vutalead-cyan flex items-center justify-center flex-shrink-0 transition-colors">
                      <reason.icon className="w-6 h-6 text-vutalead-cyan group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-vutalead-black mb-2 group-hover:text-vutalead-cyan transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-vutalead-black/60 font-body text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-vutalead-black to-vutalead-gray text-white">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-vutalead-cyan" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-1">
                    {t('whyChoose.trust.title')}
                  </h4>
                  <p className="text-white/80 font-body text-sm">
                    {t('whyChoose.trust.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
