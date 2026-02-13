import { useEffect, useRef, useState } from 'react';
import { Code, Settings, Brain, Share2, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
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

  const services = [
    {
      id: 1,
      icon: Code,
      title: t('services.website.title'),
      shortTitle: 'Website',
      description: t('services.website.desc'),
      image: '/images/service-website.jpg',
      features: [
        t('services.website.feature1'),
        t('services.website.feature2'),
        t('services.website.feature3'),
        t('services.website.feature4'),
      ],
      color: 'from-vutalead-cyan to-vutalead-cyan/80',
    },
    {
      id: 2,
      icon: Settings,
      title: t('services.maintenance.title'),
      shortTitle: 'Maintenance',
      description: t('services.maintenance.desc'),
      image: '/images/service-maintenance.jpg',
      features: [
        t('services.maintenance.feature1'),
        t('services.maintenance.feature2'),
        t('services.maintenance.feature3'),
        t('services.maintenance.feature4'),
      ],
      color: 'from-vutalead-cyan to-vutalead-cyan/80',
    },
    {
      id: 3,
      icon: Brain,
      title: t('services.ai.title'),
      shortTitle: 'AI',
      description: t('services.ai.desc'),
      image: '/images/service-ai.jpg',
      features: [
        t('services.ai.feature1'),
        t('services.ai.feature2'),
        t('services.ai.feature3'),
        t('services.ai.feature4'),
      ],
      color: 'from-vutalead-cyan to-vutalead-cyan/80',
      comingSoon: true,
    },
    {
      id: 4,
      icon: Share2,
      title: t('services.social.title'),
      shortTitle: 'Social Media',
      description: t('services.social.desc'),
      image: '/images/service-social.jpg',
      features: [
        t('services.social.feature1'),
        t('services.social.feature2'),
        t('services.social.feature3'),
        t('services.social.feature4'),
      ],
      color: 'from-vutalead-cyan to-vutalead-cyan/80',
      comingSoon: true,
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-vutalead-lightgray overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-vutalead-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-vutalead-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-vutalead-cyan/10 text-vutalead-cyan font-body font-medium text-sm mb-4">
            {t('services.badge')}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-vutalead-black mb-4">
            {t('services.title')}
          </h2>
          <p className="text-vutalead-black/60 font-body text-lg max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${activeService === service.id ? 'lg:col-span-2' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Coming Soon Badge */}
                {service.comingSoon && (
                  <div className="absolute top-4 right-4 bg-vutalead-cyan text-white px-3 py-1 rounded-full text-xs font-body font-bold">
                    {t('services.ai.comingSoon')}
                  </div>
                )}

                {/* Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-vutalead-black mb-3 group-hover:text-vutalead-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-vutalead-black/60 font-body text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vutalead-cyan flex-shrink-0" />
                      <span className="text-vutalead-black/60 text-sm font-body">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 text-vutalead-cyan font-body font-semibold text-sm group/btn">
                  {t('services.learnMore')}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 transition-colors duration-300 pointer-events-none ${
                activeService === service.id ? 'border-vutalead-cyan' : 'border-transparent'
              }`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-vutalead-black/60 font-body mb-6">
            {t('services.customSolution')}
          </p>
          <button className="btn-liquid group inline-flex items-center gap-2 bg-vutalead-black hover:bg-vutalead-black/90 text-white px-8 py-4 rounded-full font-body font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-vutalead-black/20">
            {t('services.requestCustom')}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
