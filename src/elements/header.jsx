import React, { useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import * as SolarIconSet from 'solar-icon-set';
import LanguageSwitcher from './langswitch';
import guhcat from '../images/guh.png';
export default function Header() {
  const { t } = useTranslation();
  const [showLocal, setShowLocale] = useState(false);
  const toggleLang = () => {
    setShowLocale(prevState => !prevState);
  };
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  return (
    <div>
      <div className="fixed top-0 w-full h-14 bg-[#141714] flex items-center pl-4">
        <div className="mt-1.5" onClick={toggleMenu}>
          <SolarIconSet.HamburgerMenu color="white" size={28} iconStyle="Linear" />
        </div>
        <h2 className="text-white ml-3 font-google font-bold text-xl cursor-pointer">{t('home')}
        </h2>
        <button className="bg-white w-auto h-auto p-2 absolute right-4 text-black" onClick={toggleLang}>
          кнопка
        </button>
      </div>
      <div
        className={classNames(
          'fixed left-0 w-full bg-black bottom-0 pt-2 h-full transition-transform',
          {
            '-translate-x-full': !showMenu,
            'translate-x-0': showMenu,
          }
        )}
      >
        <div onClick={toggleMenu} className="absolute top-4 right-5 cursor-pointer">
          <SolarIconSet.CloseSquare color="white" size={28} iconStyle="Linear" />
        </div>
        <div className="font-google text-white">
          <h1 className="text-4xl ml-4 mt-1">Menu</h1>
          <div className="mt-32 items-center relative">
<img className="mx-auto rounded-xl w-56" src={guhcat} alt=":)" />
            <p className="text-center p-5">There should be something here, but I do not know what to add there. Maybe silly cats...</p>
          </div>
        </div>
      </div>
  <div
        className={classNames(
          'fixed right-0 top-14 w-full  pt-2 h-full font-google transition-all duration-300',
          {
            'translate-y-1/4 opacity-0 invisible ': !showLocal,
            'translate-y-0 opacity-100 visible': showLocal,
          }
        )} onClick={toggleLang}
      >
        <div className="bg-black rounded-xl w-64 h-auto absolute right-4 transition-opacity duration-300">
         <div className="p-4">
    <h2 className="text-2xl text-white">{t('language')}</h2>
    <LanguageSwitcher />
    </div>
        </div>
      </div>
    </div>
  );
}