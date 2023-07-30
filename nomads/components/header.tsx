'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className='bg-[#131C27] text-white flex flex-col md:flex-row justify-between px-4 py-2 md:py-3 w-full fixed z-20'>
      <div className='flex justify-between'>
        <h1 className='font-abril text-2xl text-[#797DA5] md:px-4 md:text-6xl]'>Nomads.</h1>
        <div className='md:hidden text-3xl'>
          <button onClick={toggleMenu} className='text-white'>
            <AiOutlineMenu />
          </button>
        </div>
      </div>
      <ul
        className={`${showMenu ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row md:gap-10 md:text-xl font-abhaya`}
      >
        <li>
          <Link href={'#'}>Destinations</Link>
        </li>
        <li>
          <Link href={'#'}>Things To Do</Link>
        </li>
        <li>
          <Link href={'#'}>Tours</Link>
        </li>
        <li>
          <Link href={'#'}>Services</Link>
        </li>
      </ul>
      <div className='flex mt-4 md:mt-0 rounded-full desktop-content search-box px-1 mx-6 justify-center items-center w-4/3 md:w-1/4 bg-slate-50'>
        <FaSearch />
        <input
          type='text'
          placeholder='Search...'
          className='font-aloe text-xl rounded-full py-1 bg-slate-50 px-1 outline-none border-0 w-full'
        />
      </div>
    </nav>
  );
};

export default Header;
