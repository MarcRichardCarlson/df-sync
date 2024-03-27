"use client";

import React from 'react'
import LanguagePicker from './LanguagePicker';
import { useQuestionState } from '@/store/selectors';
import ProgressDots from "./ProgressDots";

const Footer = () => {
  const { showDots } = useQuestionState();

  return (
    <div className='fixed bottom-0 left-0 bg-transparent w-full flex flex-col justify-center gap-16 items-start py-6 px-6 md:px-24 md:py-12'>
      {showDots && <ProgressDots/>}
      <LanguagePicker/>
    </div>
  )
}

export default Footer