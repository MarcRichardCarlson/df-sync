import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

const RadioButtons = () => {
  let [plan, setPlan] = useState('startup')

  return (
    <RadioGroup className="w-96" value={plan} onChange={setPlan}>
      <RadioGroup.Label>Plan</RadioGroup.Label>
        <RadioGroup.Option value="startup">
        {({ checked }) => (
            <div className="w-full flex justify-between items-center">
                <span className={twMerge('cursor-pointer flex flex-col gap-1 bg-CustomWhite py-4 px-4 w-full rounded-md mb-2 ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black',
                checked ? 'bg-opacity-30 text-CustomWhite' : '')}>
                Startup
                <p className="text-sm">2312 / 3123 / 4421414 / 2421</p>
                </span>
    
                {checked && (
                    <div className="h-8 w-8">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--heroicons" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094z" clip-rule="evenodd"></path></svg>
                    </div>
                )}
            </div>
        )}
        </RadioGroup.Option>
      <RadioGroup.Option value="business">
        {({ checked }) => (
            <span className={twMerge('cursor-pointer flex flex-col gap-3 bg-CustomWhite py-6 px-4 w-full rounded-md mb-2 ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black', checked ? 'bg-opacity-30 text-CustomWhite' : '')}>Startup</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="enterprise">
        {({ checked }) => (
            <span className={twMerge('cursor-pointer flex flex-col gap-3 bg-CustomWhite py-6 px-4 w-full rounded-md mb-2 ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black', checked ? 'bg-opacity-30 text-CustomWhite' : '')}>Startup</span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  )
}

export default RadioButtons