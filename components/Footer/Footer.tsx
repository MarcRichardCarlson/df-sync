import React from 'react'
import LanguagePicker from './LanguagePicker/LanguagePicker';
import Utils from './Utils';
import { AppLocale } from '@/app/locales';

interface FooterProps {
  onDropdownToggle: () => void;
  locale: AppLocale
}

const Footer: React.FC<FooterProps> = ({ locale, onDropdownToggle }) => {
  return (
    <div className='fixed bottom-0 left-0 bg-transparent w-full flex justify-between items-center py-6 px-6 md:px-24 md:py-12'>
      <LanguagePicker locale={locale}/>
      <Utils onDropdownToggle={onDropdownToggle} />
    </div>
  )
}

export default Footer