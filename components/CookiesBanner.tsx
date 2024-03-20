"use client";

import { useState } from 'react';
import { Dialog } from '@headlessui/react';

const CookiesBanner = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed bottom-0 left-0 w-full text-slate-950 z-50">
      <div className='flex justify-around mt-4 bg-teal-200 py-4 px-6'>
          <span>
              We use our own cookies as well as third-party cookies on our websites to enhance your experience, analyze our traffic, and for security and marketing. Select "Accept All" to allow them to be used. Read our Cookie Policy.
          </span>

          <div className='flex gap-5'>
              <button onClick={() => setIsOpen(false)} className="rounded px-3 py-1 whitespace-nowrap bg-teal-500 hover:bg-teal-600">Block All Cookies</button>
              <button onClick={() => setIsOpen(false)} className="rounded px-3 py-1 whitespace-nowrap bg-teal-500 hover:bg-teal-600">Accept All</button>
          </div>
          
      </div>
    </Dialog>
  );
};

export default CookiesBanner;
