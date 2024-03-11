import React from 'react'
import LanguageSlider from './LanguagePicker';
import Utils from './Utils';

interface NavbarProps {
  onDropdownToggle: () => void;
}

const Footer: React.FC<NavbarProps> = ({ onDropdownToggle }) => {
  return (
    <div className='fixed bottom-0 left-0 bg-transparent w-full flex justify-between items-center py-6 px-6 md:px-24 md:py-12'>
      <LanguageSlider />
      <Utils onDropdownToggle={onDropdownToggle} />
    </div>
  )
}

export default Footer