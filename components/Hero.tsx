import React from 'react'
import Spline from '@splinetool/react-spline';
import ListBox from './ListBox';
import type { AppLocale } from "../app/locales"
import { useTranslation } from 'react-i18next';


interface HeroProps{
  locale: AppLocale;
}

const Hero: React.FC<HeroProps> = ({locale}) => {
  const { t } = useTranslation(locale, "home-page-hero")

  return (
    <div className='w-full h-screen z-0 flex flex-col gap-12 justify-center items-center bg-indigo-900'>
      {/* <Spline scene="https://prod.spline.design/PxUeIow-L4Xhbx77/scene.splinecode" /> */}
      <h1 className='text-xl'>{t("hero-title")}</h1>
      <ListBox />
    </div>
  )
}

export default Hero
