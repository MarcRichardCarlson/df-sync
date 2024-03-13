import React from 'react'
import Spline from '@splinetool/react-spline';
import ListBox from './ListBox';
import type { AppLocale } from "../app/locales"
import { useTranslation } from '@/i18n/client';


interface HeroProps{
  locale: AppLocale;
}

const Hero: React.FC<HeroProps> = ({locale}) => {
  const { t } = useTranslation(locale, "translation")

  return (
    <div className='w-full px-24 py-24 z-0 flex flex-col gap-12 justify-center items-center bg-transparent'>
      {/* <Spline scene="https://prod.spline.design/PxUeIow-L4Xhbx77/scene.splinecode" /> */}
      <h1 className='text-CustomWhite text-xl'>{t("hero-title")}</h1>
      <ListBox />
    </div>
  )
}

export default Hero
