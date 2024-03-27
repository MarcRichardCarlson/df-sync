"use client";

import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import QuestionsWrapper from './QuestionsWrapper';

const CookiesBanner = () => {
  const [isOpen, setIsOpen] = useState(() => {
    // Initially check if a decision has already been made regarding cookies
    const decisionMade = localStorage.getItem('cookiesDecision');
    // If 'accepted', don't show the banner again; otherwise, show it
    return decisionMade !== 'accepted';
  });

  const acceptCookies = () => {
    // Mark the decision to accept cookies in localStorage
    localStorage.setItem('cookiesDecision', 'accepted');
    setIsOpen(false);
  };

  const blockCookies = () => {
    // Optionally handle the blocking of cookies here
    // For now, just close the banner without setting 'accepted' in localStorage
    setIsOpen(false);
  };

  // Uncomment the next line to clear the decision automatically on component mount
  // useEffect(() => {
  //   // localStorage.removeItem('cookiesDecision');
  // }, []);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed bottom-0 left-0 w-full text-slate-950 z-50">
      <div className='flex justify-around mt-4 bg-indigo-300 py-6 px-6'>
        <div className='relative '>
          <QuestionsWrapper>
            <span className='flex items-center justify-start'>
                We use our own cookies as well as third-party cookies on our websites to enhance your experience, analyze our traffic, and for security and marketing. Select "Accept All" to allow them to be used. Read our Cookie Policy.
            </span>
          </QuestionsWrapper>
        </div>

        <div className='flex gap-6'>
            <button onClick={blockCookies} className="rounded-md px-6 py-3 whitespace-nowrap bg-indigo-800 hover:bg-indigo-500 text-CustomWhite">Block All Cookies</button>
            <button onClick={acceptCookies} className="rounded-md px-6 py-3 whitespace-nowrap bg-indigo-800 hover:bg-indigo-500 text-CustomWhite">Accept All</button>
        </div>
          
      </div>
    </Dialog>
  );
};

export default CookiesBanner;
