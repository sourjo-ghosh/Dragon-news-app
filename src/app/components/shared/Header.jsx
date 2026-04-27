import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';

const Header = () => {
   const options = { year: 'numeric', month: 'long', day: 'numeric' };
   const withoutDay = new Date().toLocaleDateString('en-US', options);
   const onlyDay = {weekday: 'long'}
    const OnlyDayTime = new Date().toLocaleDateString('en-US', onlyDay);

    return (
        <div className='flex flex-col gap-2 justify-center items-center p-6'>
            <Image src={logo} alt='page header logo' width={450} height={450}></Image>
            <p className='text-gray-600 dark:text-gray-400'>Journalism Without Fear or Favour</p>
            <p className='text-gray-600 dark:text-gray-400 text-[18px]'><span className='text-black dark:text-white'>{OnlyDayTime}</span> {withoutDay}</p>
        </div>
    );
};

export default Header;