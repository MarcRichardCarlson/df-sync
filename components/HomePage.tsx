"use client";

import React from 'react'
import Arrow from './shared/Arrow'

const HomePage = () => {
  return (
    <div className='w-screen h-screen flex flex-col gap-20 justify-center items-center bg-slate-600'>
        <h1>Lorem Ipsum</h1>
        <input placeholder='Lorem ipsum' className='w-1/4 rounded py-3 px-4'></input>
        <Arrow />
    </div>
  )
}

export default HomePage