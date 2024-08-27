import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {

    const savedLanguage = localStorage.getItem('language');

    const languageToSet = savedLanguage || (navigator.language.includes('ru') ? 'ru-RU' : 'en-US');
    
    i18n.changeLanguage(languageToSet);
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); 
  };

  const currentLanguage = i18n.language;

  return (
    <div>
      <button className="w-full mt-2 text-start rounded-lg"
        onClick={() => changeLanguage('en-US')}
        style={{
          backgroundColor: currentLanguage === 'en-US' ? 'lightblue' : 'transparent',
          color: currentLanguage === 'en-US' ? 'black' : 'white',
          border: '1px solid white',
          padding: '15px 10px',
          cursor: 'pointer',
        }}
      >
        English
      </button>
      <button className="w-full mt-2 text-start rounded-lg"
        onClick={() => changeLanguage('ru-RU')}
        style={{
          backgroundColor: currentLanguage === 'ru-RU' ? 'lightblue' : 'transparent',
          color: currentLanguage === 'ru-RU' ? 'black' : 'white',
          border: '1px solid white',
          padding: '15px 10px',
          cursor: 'pointer',
        }}
      >
        Русский
      </button>
    </div>
  );
};

export default LanguageSwitcher;