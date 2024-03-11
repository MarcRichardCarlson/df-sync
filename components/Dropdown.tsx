import React from 'react'
import Profile from './Profile'
import Toggle from './Toggle'
import Divider from './Divider';
import LanguageSlider from './LanguageSlider';

interface UtilsProps {
    isOpen: boolean;
}
  

const Dropdown: React.FC<UtilsProps> = ({ isOpen }) => {

  return (
    <div className={`${isOpen ? 'absolute' : 'hidden'} flex flex-col gap-3 p-6 rounded-lg top-16 right-0 h-96 bg-neutral-200 text-black w-full sm:w-72`} id="navbar-default">
        <Profile />
        <Divider />
        <Toggle />
        <LanguageSlider />
    </div>
  )
}

export default Dropdown