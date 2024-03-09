import React, { useState } from 'react';

const Arrow = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input hidden type="text" value={inputValue} onChange={handleInputChange} />
      <button type="button" className={`h-24 w-24 ${inputValue ? 'rotate-180' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--heroicons" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></path>
        </svg>
      </button>
    </div>
  );
};

export default Arrow;
