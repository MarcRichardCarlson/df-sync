import React from 'react';

const Profile = () => {
  return (
    <div className='flex gap-2 items-center w-full group cursor-pointer'>
      <div className='w-8 h-8'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="iconify iconify--heroicons"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"
          ></path>
        </svg>
      </div>
      <div className='cursor-pointer hover:text-gray-400 group-hover:text-gray-400'>
        <p>Profile</p>
      </div>
      <div className='ml-auto hidden group-hover:block w-6 h-6'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="iconify iconify--heroicons"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 20 20"
        >
          <g fill="none">
            <g clip-path="url(#IconifyId18e297d65b1ef56c14)">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm3.25-7.25a.75.75 0 0 0 0-1.5H8.66l2.1-1.95a.75.75 0 1 0-1.02-1.1l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 0 0 1.02-1.1l-2.1-1.95h4.59Z"
                clip-rule="evenodd"
              ></path>
            </g>
            <defs>
              <clipPath id="IconifyId18e297d65b1ef56c14">
                <path fill="#fff" d="M0 0h20v20H0z"></path>
              </clipPath>
            </defs>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Profile;
