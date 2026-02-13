import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-vutalead-cyan/20 border border-white/20 transition-all duration-300 group"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 text-vutalead-cyan" />
      <span className="text-sm font-body font-medium text-white group-hover:text-vutalead-cyan transition-colors">
        {language === 'en' ? 'EN' : 'SW'}
      </span>
    </button>
  );
};

export default LanguageToggle;
