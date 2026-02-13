import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'sw';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.packages': 'Packages',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero
    'hero.badge': 'Digital Agency of Tanzania',
    'hero.title1': 'We Help',
    'hero.title2': 'Businesses Grow',
    'hero.title3': 'Online',
    'hero.description': 'Vutalead is a digital agency providing modern website development, digital systems, and (coming soon) AI automation and social media management. We build systems that attract customers and increase your business credibility.',
    'hero.ourServices': 'Our Services',
    'hero.contactUs': 'Contact Us',
    'hero.stats.projects': 'Projects',
    'hero.stats.clients': 'Clients',
    'hero.stats.satisfaction': 'Satisfaction',
    'hero.comingSoon': 'Coming Soon: AI & Social',
    
    // About
    'about.badge': 'ABOUT US',
    'about.title': 'About Vutalead',
    'about.subtitle': 'We Help Businesses Grow Online',
    'about.description1': 'Vutalead is a digital agency providing modern website development, digital systems, and (coming soon) AI automation and social media management. We work with clients in Tanzania, delivering innovative, secure, and results-driven solutions.',
    'about.description2': 'With our headquarters in Dubai, we bring international standards while understanding the needs, budget, and market environment of Tanzania.',
    'about.experience': 'Years of Experience',
    'about.quote': '"We do not just build websites — we build systems that attract customers and increase your business credibility."',
    'about.team': 'Vutalead Team',
    'about.teamRole': 'Digital Solutions',
    
    // Values
    'values.trust.title': 'Trust',
    'values.trust.desc': 'We prioritize transparency and honesty in every project we undertake.',
    'values.quality.title': 'Quality Work',
    'values.quality.desc': 'We deliver the best results for every client.',
    'values.communication.title': 'Clear Communication',
    'values.communication.desc': 'We communicate openly and directly with our clients.',
    'values.support.title': 'Ongoing Support',
    'values.support.desc': 'We continue to help even after the project is completed.',
    
    // Services
    'services.badge': 'OUR SERVICES',
    'services.title': 'Our Core Services',
    'services.description': 'We are here to help your business grow by providing modern digital solutions.',
    'services.learnMore': 'Learn More',
    'services.customSolution': 'Need a custom solution? Let us discuss your unique requirements.',
    'services.requestCustom': 'Request Custom Solution',
    
    // Service Items
    'services.website.title': 'Website Development',
    'services.website.desc': 'We create professional-looking websites that work well on phones and computers, with speed, security, and basic SEO.',
    'services.website.feature1': 'Business websites',
    'services.website.feature2': 'School websites',
    'services.website.feature3': 'Organization / NGO websites',
    'services.website.feature4': 'Personal & portfolio websites',
    
    'services.maintenance.title': 'Website Maintenance',
    'services.maintenance.desc': 'A website without maintenance is risky. We provide regular updates, content updates, technical support, and website security.',
    'services.maintenance.feature1': 'Regular updates',
    'services.maintenance.feature2': 'Content updates',
    'services.maintenance.feature3': 'Technical support',
    'services.maintenance.feature4': 'Website security',
    
    'services.ai.title': 'AI Automation',
    'services.ai.desc': 'For businesses that want to save time and increase efficiency. WhatsApp auto-replies, chatbots, lead collection, and appointment booking.',
    'services.ai.feature1': 'WhatsApp auto-replies',
    'services.ai.feature2': 'Customer service chatbots',
    'services.ai.feature3': 'Lead collection systems',
    'services.ai.feature4': 'Appointment automation',
    'services.ai.comingSoon': 'Coming Soon',
    
    'services.social.title': 'Social Media Management',
    'services.social.desc': 'Manage your business accounts efficiently. Content creation, captions, posting schedule, and audience engagement.',
    'services.social.feature1': 'Account management',
    'services.social.feature2': 'Content creation',
    'services.social.feature3': 'Captions & posting',
    'services.social.feature4': 'Audience engagement',
    'services.social.comingSoon': 'Coming Soon',
    
    // Packages
    'packages.badge': 'OUR PACKAGES',
    'packages.title': 'Choose Your Perfect Package',
    'packages.description': 'We offer flexible packages to suit different business needs. Choose the one that works best for you.',
    'packages.bestValue': 'Best Value',
    'packages.maintenance': 'maintenance per month',
    'packages.getStarted': 'Get Started',
    'packages.customTitle': 'Need a custom solution?',
    'packages.customDesc': 'If none of our packages meet your needs, we are ready to help you create a custom solution.',
    'packages.requestCustom': 'Request Custom Solution',
    
    // Package Names
    'packages.starter.name': 'Starter',
    'packages.starter.subtitle': 'Personal & Small Business',
    'packages.starter.desc': 'Perfect for individuals and small businesses just starting out.',
    
    'packages.business.name': 'Business / School',
    'packages.business.subtitle': 'Business, School, Organization',
    'packages.business.desc': 'Ideal for businesses, schools, and organizations with advanced needs.',
    
    'packages.premium.name': 'Premium / Corporate',
    'packages.premium.subtitle': 'Large Companies & NGOs',
    'packages.premium.desc': 'Best for large companies and NGOs with custom requirements.',
    
    // Why Choose Us
    'whyChoose.badge': 'WHY CHOOSE VUTALEAD',
    'whyChoose.title': 'Reasons to Choose Vutalead',
    'whyChoose.description': 'We are here to help your business achieve its digital goals.',
    'whyChoose.trust.title': 'Trust & Quality',
    'whyChoose.trust.desc': 'With experience working with Tanzanian clients, we understand your market needs well.',
    
    'whyChoose.reason1.title': 'We Understand the Tanzanian Market',
    'whyChoose.reason1.desc': 'With experience working with Tanzanian clients, we understand well the needs, budget, and market environment.',
    'whyChoose.reason2.title': 'Transparent Service',
    'whyChoose.reason2.desc': 'We prioritize transparency in communication and costs. No hidden fees or surprises.',
    'whyChoose.reason3.title': 'We Focus on Results',
    'whyChoose.reason3.desc': 'Not just appearance — we aim to deliver real, measurable results.',
    'whyChoose.reason4.title': 'Ongoing Support',
    'whyChoose.reason4.desc': 'We support our clients even after the website is completed. You are safe with us.',
    
    // Stats
    'stats.projects': 'Projects Completed',
    'stats.clients': 'Happy Clients',
    'stats.satisfaction': 'Client Satisfaction',
    
    // Testimonials
    'testimonials.badge': 'TESTIMONIALS',
    'testimonials.title': 'What Our Clients Say',
    'testimonials.description': 'Read reviews from our clients who had the opportunity to work with us.',
    
    // FAQ
    'faq.badge': 'FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.description': 'Here are answers to questions frequently asked about our services.',
    'faq.otherQuestion': 'Have another question?',
    'faq.contactDesc': 'Do not hesitate to contact us for any questions about our services.',
    'faq.contactUs': 'Contact Us',
    
    // FAQ Items
    'faq.q1': 'How long does it take to build a website?',
    'faq.a1': 'The time depends on the type of website and client needs. For the Starter package, it usually takes 2-3 weeks. For the Business package, 3-4 weeks. For the Premium package, it may take 4-6 weeks or more depending on specific requirements.',
    'faq.q2': 'Can I change content after the website is completed?',
    'faq.a2': 'Yes, absolutely! We build websites with an easy-to-use Content Management System (CMS). We will teach you how to change content, and we also provide ongoing support to our clients.',
    'faq.q3': 'Are your websites mobile-friendly?',
    'faq.a3': 'Yes, all our websites work well on phones, computers, and tablets. This is a core part of our quality standards.',
    'faq.q4': 'Do you accept payment in installments?',
    'faq.a4': 'Yes, we accept payment in installments for our clients. The first payment is 50% of the cost before starting work, and the remaining 50% is paid before the website goes live.',
    'faq.q5': 'Do you provide domain and hosting?',
    'faq.a5': 'We can help you purchase a domain and choose the best hosting for your business. We can also manage these for you as part of our maintenance service.',
    'faq.q6': 'What makes you different from others?',
    'faq.a6': 'We understand the Tanzanian market, provide transparent service, focus on results rather than just appearance, and support our clients even after the website is completed.',
    
    // Contact
    'contact.badge': 'CONTACT US',
    'contact.title': 'Ready to Get Started?',
    'contact.description': 'Contact us today to discuss your project. We are here to help your business grow online.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.socialMedia': 'Social Media',
    'contact.tagline': '"Vutalead — We Build Your Strong Digital Foundation."',
    'contact.form.title': 'Send a Message',
    'contact.form.desc': 'Fill out this form and we will get back to you as soon as possible.',
    'contact.form.name': 'Your Name',
    'contact.form.namePlaceholder': 'Your full name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.phonePlaceholder': '+255 XXX XXX XXX',
    'contact.form.service': 'Service You Need',
    'contact.form.selectService': 'Select service...',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Describe your project or question...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success.title': 'Thank You!',
    'contact.form.success.desc': 'Your message has been sent. We will get back to you soon.',
    
    // Footer
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.support': 'Support',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  sw: {
    // Navigation
    'nav.home': 'Nyumbani',
    'nav.about': 'Kuhusu',
    'nav.services': 'Huduma',
    'nav.packages': 'Vifurushi',
    'nav.contact': 'Wasiliana',
    'nav.getStarted': 'Anza Sasa',
    
    // Hero
    'hero.badge': 'Digital Agency ya Tanzania',
    'hero.title1': 'Tunasaidia',
    'hero.title2': 'Biashara Kukua',
    'hero.title3': 'Mtandaoni',
    'hero.description': 'Vutalead ni digital agency inayotoa huduma za utengenezaji wa website za kisasa, mifumo ya kidigitali, na (hivi karibuni) AI automation na usimamizi wa mitandao ya kijamii. Tunajenga mifumo inayovutia wateja na kuongeza uaminifu wa biashara yako.',
    'hero.ourServices': 'Huduma Zetu',
    'hero.contactUs': 'Wasiliana Nasi',
    'hero.stats.projects': 'Miradi',
    'hero.stats.clients': 'Wateja',
    'hero.stats.satisfaction': 'Kuridhika',
    'hero.comingSoon': 'Hivi Karibuni: AI & Mitandao',
    
    // About
    'about.badge': 'KUHUSU SISI',
    'about.title': 'Kuhusu Vutalead',
    'about.subtitle': 'Tunasaidia Biashara Kukua Mtandaoni',
    'about.description1': 'Vutalead ni digital agency inayotoa huduma za utengenezaji wa website za kisasa, mifumo ya kidigitali, na (hivi karibuni) AI automation na usimamizi wa mitandao ya kijamii. Tunafanya kazi na wateja wa Tanzania, tukitoa suluhisho za kisasa, salama, na zinazolenga matokeo.',
    'about.description2': 'Tukiwa na makao yetu ya kazi Dubai, tunaleta viwango vya kimataifa huku tukielewa mahitaji, bajeti, na mazingira ya soko la Tanzania.',
    'about.experience': 'Miaka ya Uzoefu',
    'about.quote': '"Hatutengenezi website tu — tunajenga mifumo inayovutia wateja na kuongeza uaminifu wa biashara yako."',
    'about.team': 'Timu ya Vutalead',
    'about.teamRole': 'Suluhisho za Kidigitali',
    
    // Values
    'values.trust.title': 'Uaminifu',
    'values.trust.desc': 'Tunazingatia uwazi na uaminifu katika kila mradi tunaufanya.',
    'values.quality.title': 'Ubora wa Kazi',
    'values.quality.desc': 'Tunatoa matokeo bora zaidi kwa kila mteja wetu.',
    'values.communication.title': 'Mawasiliano Wazi',
    'values.communication.desc': 'Tunawasiliana kwa uwazi na moja kwa moja na wateja wetu.',
    'values.support.title': 'Huduma Endelevu',
    'values.support.desc': 'Tunaendelea kusaidia hata baada ya mradi kukamilika.',
    
    // Services
    'services.badge': 'HUDuma ZETU',
    'services.title': 'Huduma Zetu Kuu',
    'services.description': 'Tuko hapa kusaidia biashara yako kukua kwa kutoa suluhisho za kisasa za kidigitali.',
    'services.learnMore': 'Jifunze Zaidi',
    'services.customSolution': 'Je, unahitaji suluhisho maalum? Tuzungumzie mahitaji yako maalum.',
    'services.requestCustom': 'Omba Suluhisho Maalum',
    
    // Service Items
    'services.website.title': 'Utengenezaji wa Website',
    'services.website.desc': 'Tunatengeneza website zinazoonekana professional, zinazofanya kazi vizuri kwenye simu na kompyuta, zenye kasi, usalama, na SEO ya msingi.',
    'services.website.feature1': 'Website za biashara',
    'services.website.feature2': 'Website za shule',
    'services.website.feature3': 'Website za taasisi / NGOs',
    'services.website.feature4': 'Website za kibinafsi & portfolio',
    
    'services.maintenance.title': 'Matunzo ya Website',
    'services.maintenance.desc': 'Website bila matunzo ni hatari. Tunatoa updates za mara kwa mara, content updates, technical support, na usalama wa website.',
    'services.maintenance.feature1': 'Updates za mara kwa mara',
    'services.maintenance.feature2': 'Content updates',
    'services.maintenance.feature3': 'Technical support',
    'services.maintenance.feature4': 'Usalama wa website',
    
    'services.ai.title': 'AI Automation',
    'services.ai.desc': 'Kwa biashara zinazotaka kuokoa muda na kuongeza ufanisi. WhatsApp auto-replies, chatbots, lead collection, na appointment booking.',
    'services.ai.feature1': 'WhatsApp auto-replies',
    'services.ai.feature2': 'Chatbots za huduma kwa wateja',
    'services.ai.feature3': 'Lead collection systems',
    'services.ai.feature4': 'Appointment automation',
    'services.ai.comingSoon': 'Hivi Karibuni',
    
    'services.social.title': 'Usimamizi wa Mitandao ya Kijamii',
    'services.social.desc': 'Simamia akaunti za biashara yako kwa ufanisi. Content creation, captions, posting schedule, na audience engagement.',
    'services.social.feature1': 'Usimamizi wa akaunti',
    'services.social.feature2': 'Content creation',
    'services.social.feature3': 'Captions & posting',
    'services.social.feature4': 'Audience engagement',
    'services.social.comingSoon': 'Hivi Karibuni',
    
    // Packages
    'packages.badge': 'VIFURUSHI VETU',
    'packages.title': 'Chagua Kifurushi Chako Bora',
    'packages.description': 'Tuko na vifurushi mbalimbali vinavyolenga mahitaji tofauti ya biashara. Chagua kile kinachokufaa zaidi.',
    'packages.bestValue': 'Thamani Bora',
    'packages.maintenance': 'matunzo kila mwezi',
    'packages.getStarted': 'Anza Sasa',
    'packages.customTitle': 'Je, unahitaji suluhisho maalum?',
    'packages.customDesc': 'Kama hakuna kifurushi kinachokidhi mahitaji yako, tuko tayari kukusaidia kutengeneza suluhisho maalum.',
    'packages.requestCustom': 'Omba Suluhisho Maalum',
    
    // Package Names
    'packages.starter.name': 'Starter',
    'packages.starter.subtitle': 'Kibinafsi & Biashara Ndogo',
    'packages.starter.desc': 'Inafaa kwa watu binafsi na biashara ndogo zinazoanza.',
    
    'packages.business.name': 'Business / Shule',
    'packages.business.subtitle': 'Biashara, Shule, Taasisi',
    'packages.business.desc': 'Inafaa kwa biashara, shule, na taasisi zenye mahitaji ya kiwango cha juu.',
    
    'packages.premium.name': 'Premium / Corporate',
    'packages.premium.subtitle': 'Makampuni Makubwa & NGOs',
    'packages.premium.desc': 'Inafaa kwa makampuni makubwa na NGOs zenye mahitaji maalum.',
    
    // Why Choose Us
    'whyChoose.badge': 'KWA NINI VUTALEAD',
    'whyChoose.title': 'Sababu za Kuchagua Vutalead',
    'whyChoose.description': 'Tuko hapa kusaidia biashara yako kufikia malengo yake ya kidigitali.',
    'whyChoose.trust.title': 'Uaminifu na Ubora',
    'whyChoose.trust.desc': 'Tukiwa na uzoefu wa kazi na wateja wa Tanzania, tunaelewa vizuri mahitaji ya soko lako.',
    
    'whyChoose.reason1.title': 'Tunaelewa Soko la Tanzania',
    'whyChoose.reason1.desc': 'Tukiwa na uzoefu wa kazi na wateja wa Tanzania, tunaelewa vizuri mahitaji, bajeti, na mazingira ya soko.',
    'whyChoose.reason2.title': 'Huduma kwa Uwazi',
    'whyChoose.reason2.desc': 'Tunazingatia uwazi katika mawasiliano na gharama. Hakuna siri au gharama zisizotajwa.',
    'whyChoose.reason3.title': 'Tunazingatia Matokeo',
    'whyChoose.reason3.desc': 'Si muonekano tu — tunalenga kutoa matokeo halisi yanayoweza kuonekana na kupimika.',
    'whyChoose.reason4.title': 'Support Endelevu',
    'whyChoose.reason4.desc': 'Tuna-support wateja wetu hata baada ya website kukamilika. Uko salama nasi.',
    
    // Stats
    'stats.projects': 'Miradi Imekamilika',
    'stats.clients': 'Wateja Wanaofurahia',
    'stats.satisfaction': 'Kuridhika kwa Wateja',
    
    // Testimonials
    'testimonials.badge': 'USHUHUDA',
    'testimonials.title': 'Wasemaje Wateja Wetu',
    'testimonials.description': 'Soma maoni ya wateja wetu waliopata nafasi ya kufanya kazi nasi.',
    
    // FAQ
    'faq.badge': 'MASWALI',
    'faq.title': 'Maswali Yanayoulizwa Mara kwa Mara',
    'faq.description': 'Hapa kuna majibu ya maswali yanayoulizwa mara kwa mara kuhusu huduma zetu.',
    'faq.otherQuestion': 'Je, una swali lingine?',
    'faq.contactDesc': 'Usisite kuwasiliana nasi kwa maswali yoyote kuhusu huduma zetu.',
    'faq.contactUs': 'Wasiliana Nasi',
    
    // FAQ Items
    'faq.q1': 'Ni muda gani hutumika kutengeneza website?',
    'faq.a1': 'Muda hutegemea aina ya website na mahitaji ya mteja. Kwa package ya Starter, kawaida inachukua wiki 2-3. Kwa Business package, wiki 3-4. Kwa Premium package, inaweza kuchukua wiki 4-6 au zaidi kulingana na mahitaji maalum.',
    'faq.q2': 'Je, naweza kubadilisha content baada ya website kukamilika?',
    'faq.a2': 'Ndiyo, kabisa! Tunatengeneza website zilizo na CMS (Content Management System) rahisi kutumia. Tutakufunza jinsi ya kubadilisha content, na pia tunatoa support endelevu kwa wateja wetu.',
    'faq.q3': 'Je, website zenu ni mobile-friendly?',
    'faq.a3': 'Ndiyo, sote tunatengeneza website zinazofanya kazi vizuri kwenye simu, kompyuta, na tablets zote. Hii ni sehemu ya msingi ya kiwango chetu cha kazi.',
    'faq.q4': 'Je, mnapokea malipo kwa awamu?',
    'faq.a4': 'Ndiyo, tunapokea malipo kwa awamu kwa wateja wetu. Mara ya kwanza unalipa 50% ya gharama kabla ya kuanza kazi, na 50% inamalizia kabla ya website kuanza kufanya kazi.',
    'faq.q5': 'Je, mnapatoa domain na hosting?',
    'faq.a5': 'Tunaweza kusaidia kukununua domain na kuchagua hosting bora kwa biashara yako. Pia tunaweza kusimamia haya kwa ajili yako kama sehemu ya huduma yetu ya maintenance.',
    'faq.q6': 'Ni nini kinafanya tofauti na wengine?',
    'faq.a6': 'Tunaelewa soko la Tanzania, tunatoa huduma kwa uwazi, tunazingatia matokeo zaidi ya muonekano tu, na tuna-support wateja wetu hata baada ya website kukamilika.',
    
    // Contact
    'contact.badge': 'WASILIANA NASI',
    'contact.title': 'Je, Uko Tayari Kuanza?',
    'contact.description': 'Wasiliana nasi leo ili kuzungumza kuhusu mradi wako. Tuko hapa kusaidia biashara yako kukua mtandaoni.',
    'contact.phone': 'Simu',
    'contact.email': 'Barua Pepe',
    'contact.location': 'Eneo',
    'contact.socialMedia': 'Mitandao ya Kijamii',
    'contact.tagline': '"Vutalead — Tunakujengea Msingi Imara wa Kidigitali."',
    'contact.form.title': 'Tuma Ujumbe',
    'contact.form.desc': 'Jaza fomu hii tutarudi kwako haraka iwezekanavyo.',
    'contact.form.name': 'Jina Lako',
    'contact.form.namePlaceholder': 'Jina lako kamili',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Simu',
    'contact.form.phonePlaceholder': '+255 XXX XXX XXX',
    'contact.form.service': 'Huduma Unayohitaji',
    'contact.form.selectService': 'Chagua huduma...',
    'contact.form.message': 'Ujumbe',
    'contact.form.messagePlaceholder': 'Eleza kuhusu mradi wako au swali lako...',
    'contact.form.send': 'Tuma Ujumbe',
    'contact.form.sending': 'Inatuma...',
    'contact.form.success.title': 'Asante!',
    'contact.form.success.desc': 'Ujumbe wako umetumwa. Tutarudi kwako hivi karibuni.',
    
    // Footer
    'footer.services': 'Huduma',
    'footer.company': 'Kampuni',
    'footer.support': 'Msaada',
    'footer.contact': 'Wasiliana',
    'footer.rights': 'Haki zote zimehifadhiwa.',
    'footer.privacy': 'Sera ya Faragha',
    'footer.terms': 'Masharti ya Huduma',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
