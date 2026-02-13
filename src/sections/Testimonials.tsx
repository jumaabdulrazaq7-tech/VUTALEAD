import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const testimonials = [
    {
      id: 1,
      name: 'John Mwangi',
      role: 'Mwenyekiti, Mwangi Enterprises',
      avatar: '/images/avatar-1.jpg',
      content:
        'Vutalead waliweza kutengeneza website yetu kwa ufanisi mkubwa. Website inafanya kazi vizuri na tumekuwa tukiwaona mabadiliko chanya katika biashara yetu. Asanteni sana!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Kimani',
      role: 'Mwalimu Mkuu, Bright Future School',
      avatar: '/images/avatar-2.jpg',
      content:
        'Tulikuwa na website ya zamani ambayo haikukidhi mahitaji yetu. Vutalead wakatuletea suluhisho jipya lenye kasi, usalama, na muonekano mzuri. Wanafahamu kile wanachofanya.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Amina Juma',
      role: 'Mkurugenzi, Hope Foundation',
      avatar: '/images/avatar-3.jpg',
      content:
        'Kama NGO, tulikuwa tunahitaji website inayoweza kufikia wateja wetu kwa urahisi. Vutalead waliweza hilo na zaidi. Support yao ni wa kiwango cha juu.',
      rating: 5,
    },
  ];

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-vutalead-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-vutalead-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-vutalead-cyan/10 text-vutalead-cyan font-body font-medium text-sm mb-4">
              {t('testimonials.badge')}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-vutalead-black mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-vutalead-black/60 font-body text-lg max-w-xl">
              {t('testimonials.description')}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => scrollTo('left')}
              className="w-12 h-12 rounded-full bg-vutalead-lightgray hover:bg-vutalead-cyan hover:text-white text-vutalead-black flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo('right')}
              className="w-12 h-12 rounded-full bg-vutalead-lightgray hover:bg-vutalead-cyan hover:text-white text-vutalead-black flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div
          ref={scrollRef}
          className={`flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-vutalead-lightgray group">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-xl bg-vutalead-cyan/10 flex items-center justify-center mb-6 group-hover:bg-vutalead-cyan group-hover:text-white transition-colors">
                  <Quote className="w-6 h-6 text-vutalead-cyan group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <p className="text-vutalead-black/60 font-body text-base leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-vutalead-cyan fill-current"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-vutalead-lightgray">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-vutalead-lightgray">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-vutalead-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-vutalead-black/50 text-sm font-body">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'w-8 bg-vutalead-cyan'
                  : 'bg-vutalead-black/20 hover:bg-vutalead-black/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
