import React, { useState } from 'react';
import Utils from './Utils';

interface NavbarProps {
    onDropdownToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onDropdownToggle }) => {

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Digital fans Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DF Sync</span>
            </a>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded md:p-0 dark:text-white hover:text-slate-300" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded md:p-0 dark:text-white hover:text-slate-300">About</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded md:p-0 dark:text-white hover:text-slate-300">Contact</a>
                </li>
            </ul>
            </div>

            <Utils onDropdownToggle={onDropdownToggle}/>
        </div>
    </nav>
  );
}

export default Navbar

