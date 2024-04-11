"use client";

import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import TextWrapper from './TextWrapper';

const CookiesBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Since "use client" should ensure this code runs only on the client,
    // we safely check localStorage here.
    const decisionMade = localStorage.getItem('cookiesDecision');
    // If 'accepted', don't show the banner; otherwise, show it.
    // This check is performed once, when the component mounts.
    setIsOpen(decisionMade !== 'accepted');
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesDecision', 'accepted');
    setIsOpen(false);
  };

  const blockCookies = () => {
    // Close the banner without setting 'accepted' in localStorage
    setIsOpen(false);
  };

  // Uncomment the next line to clear the decision automatically on component mount
  // useEffect(() => {
  //    localStorage.removeItem('cookiesDecision');
  // }, []);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed bottom-0 left-0 w-full text-slate-950 z-50">
      <div className='flex flex-col sm:flex-row justify-around gap-6 md:gap-8 bg-indigo-300 p-6 md:p-8'>
        <TextWrapper>
          <span className='flex items-center justify-start h-full'>
              We use our own cookies as well as third-party cookies on our websites to enhance your experience, analyze our traffic, and for security and marketing. Select &quot;Accept All&quot; to allow them to be used. Read our Cookie Policy.
          </span>
        </TextWrapper>
        <div className='flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center'>
            <button onClick={blockCookies} className="w-full h-fit rounded-md px-4 md:px-6 py-3 whitespace-nowrap bg-indigo-800 hover:bg-indigo-500 text-CustomWhite">Block All Cookies</button>
            <button onClick={acceptCookies} className="w-full h-fit rounded-md px-4 md:px-6 py-3 whitespace-nowrap bg-indigo-800 hover:bg-indigo-500 text-CustomWhite">Accept All</button>
        </div>
          
      </div>
    </Dialog>
  );
};

export default CookiesBanner;
