"use client";

import React, { useState, useEffect } from 'react';
import LanguagePicker from './LanguagePicker';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkIfAtBottom = () => {
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY + windowHeight;
    setIsVisible(scrollPosition >= docHeight);
  };

  useEffect(() => {
    checkIfAtBottom(); // Check visibility on mount and on scroll
    window.addEventListener('scroll', checkIfAtBottom);

    return () => {
      window.removeEventListener('scroll', checkIfAtBottom);
    };
  }, []);

  // Attempting to indirectly detect page navigations
  useEffect(() => {
    const checkOnNavigate = () => {
      // Fake a small delay to let the new page load
      setTimeout(checkIfAtBottom, 50);
    };

    window.addEventListener('click', checkOnNavigate);

    return () => {
      window.removeEventListener('click', checkOnNavigate);
    };
  }, []);

  return (
    <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} fixed bottom-0 left-0 bg-transparent w-full flex flex-col gap-16 justify-center items-start py-6 px-6 md:px-24 md:py-12 transition duration-300 ease-in-out`}>
      <LanguagePicker />
    </div>
  );
};

export default Footer;
