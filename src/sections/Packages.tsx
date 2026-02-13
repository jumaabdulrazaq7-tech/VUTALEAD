import { useEffect, useRef, useState } from 'react';
import { Check, Star, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';

const Packages = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const packages = [
    {
      id: 1,
      name: 'Starter',
      subtitle: 'Personal & Small Business',
      price: '340,000',
      maintenance: '150,000',
      period: 'TZS',
      description: 'Perfect for individuals and small businesses just starting out.',
      features: [
        '3-5 Pages',
        'WhatsApp integration',
        'Contact form',
        'Basic SEO',
        'Mobile responsive',
        '1 month support',
      ],
      color: 'border-vutalead-black/20',
      buttonStyle: 'bg-vutalead-black/10 text-vutalead-black hover:bg-vutalead-black hover:text-white',
      popular: false,
    },
    {
      id: 2,
      name: 'Business / School',
      subtitle: 'Business, School, Organization',
      price: '460,000',
      maintenance: '200,000',
      period: 'TZS',
      description: 'Ideal for businesses, schools, and organizations with advanced needs.',
      features: [
        '6-10 Pages',
        'Custom design',
        'News / blog section',
        'Gallery',
        'Advanced SEO',
        '3 months support',
        'Social media links',
      ],
      color: 'border-vutalead-cyan',
      buttonStyle: 'bg-vutalead-cyan text-white hover:bg-vutalead-cyan/80',
      popular: true,
    },
    {
      id: 3,
      name: 'Premium / Corporate',
      subtitle: 'Large Companies & NGOs',
      price: '790,000',
      maintenance: '260,000',
      period: 'TZS',
      description: 'Best for large companies and NGOs with custom requirements.',
      features: [
        '10+ Pages',
        'Advanced CMS',
        'SEO optimization',
        'Analytics & tracking',
        'Custom features',
        '6 months support',
        'Priority support',
        'Training included',
      ],
      color: 'border-vutalead-cyan',
      buttonStyle: 'bg-vutalead-cyan text-white hover:bg-vutalead-cyan/80',
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="packages"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-vutalead-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-vutalead-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-vutalead-cyan/10 text-vutalead-cyan font-body font-medium text-sm mb-4">
            OUR PACKAGES
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-vutalead-black mb-4">
            Choose Your Perfect Package
          </h2>
          <p className="text-vutalead-black/60 font-body text-lg max-w-2xl mx-auto">
            We offer flexible packages to suit different business needs. Choose the one that works best for you.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${
                hoveredCard === pkg.id
                  ? 'shadow-2xl scale-105 z-10'
                  : 'shadow-lg hover:shadow-xl'
              } ${pkg.popular ? 'ring-2 ring-vutalead-cyan' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(pkg.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-vutalead-cyan text-white px-4 py-1.5 rounded-full font-body font-bold text-sm shadow-lg animate-pulse-soft">
                  <Star className="w-4 h-4 fill-current" />
                  Best Value
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-bold text-vutalead-black mb-1">
                  {pkg.name}
                </h3>
                <p className="text-vutalead-black/50 text-sm font-body mb-4">
                  {pkg.subtitle}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-vutalead-black/50 font-body text-sm">TZS</span>
                  <span className="text-4xl font-heading font-bold text-vutalead-black">
                    {pkg.price}
                  </span>
                </div>
                <p className="text-vutalead-black/50 text-sm font-body mt-2">
                  {pkg.description}
                </p>
              </div>

              {/* Maintenance Fee */}
              <div className="flex items-center justify-center gap-2 mb-6 p-3 bg-vutalead-cyan/5 rounded-xl">
                <RefreshCw className="w-4 h-4 text-vutalead-cyan" />
                <span className="text-vutalead-black/70 font-body text-sm">
                  + TZS {pkg.maintenance}/month maintenance
                </span>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      pkg.popular ? 'bg-vutalead-cyan' : 'bg-vutalead-black'
                    }`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-vutalead-black/60 font-body text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className={`w-full group flex items-center justify-center gap-2 py-4 rounded-xl font-body font-semibold transition-all duration-300 ${pkg.buttonStyle}`}
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <div
          className={`mt-16 text-center p-8 rounded-3xl bg-gradient-to-r from-vutalead-cyan/5 via-vutalead-lightgray to-vutalead-cyan/5 border border-vutalead-cyan/10 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-vutalead-cyan" />
            <span className="font-heading text-lg font-semibold text-vutalead-black">
              Need a custom solution?
            </span>
          </div>
          <p className="text-vutalead-black/60 font-body mb-6 max-w-xl mx-auto">
            If none of our packages meet your needs, we are ready to help you create a custom solution.
          </p>
          <button
            onClick={scrollToContact}
            className="btn-liquid group inline-flex items-center gap-2 bg-vutalead-black hover:bg-vutalead-black/90 text-white px-8 py-4 rounded-full font-body font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-vutalead-black/20"
          >
            Request Custom Solution
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
