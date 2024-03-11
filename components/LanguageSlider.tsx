import React, { useState } from 'react';
import { Language, LanguageSchema } from '../app/types';

const LanguageSlider: React.FC = () => {
  const [language, setLanguage] = useState<Language>('EN');

  const sliderLanguage = () => {
    setLanguage(language === 'EN' ? 'SV' : 'EN');
  };

  return (
    <div className="flex items-center">
      <button
        className={`relative inline-block w-14 h-8 rounded-full focus:outline-none transition-transform ${
          language === 'EN' ? 'bg-gray-400' : 'bg-blue-500'
        }`}
        onClick={sliderLanguage}
      >
        <span
          className={`absolute inline-block w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
            language === 'EN' ? 'translate-x-0' : 'translate-x-6'
          }`}
        ></span>
      </button>
      <p className="ml-2">{language === 'EN' ? 'English Content' : 'Swedish Content'}</p>
    </div>
  );
};

export default LanguageSlider;
