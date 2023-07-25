import React from 'react'
import { FaPlane, FaHotel, FaTruck, FaBed, } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

const Services = () => {
  return (
    <div className='pt-10'>
      <div className='flex flex-col text-white justify-center items-center'>
        <h2 className='text-center mb-3 text-4xl md:text-5xl font-abhaya'>The Perfect Travel</h2>
        <hr className='w-[180px] md:w-[720px] h-px mx-auto mt-2 md:mb-2 bg-gray-500 border-0 rounded dark:bg-gray-700' />
        <p className='mx-6 my-4 md:text-lg font-merri'>
          We cover all expences for picking the perfect hotel to flight and destination.
        </p>
      </div>
      <div className='bg-white flex py-6 flex-col gap-3 md:flex-row'>
        <div className='mx-[2rem] shadow-lg'>
          <div className='flex justify-evenly py-2 bg-[#1B1D33]'>
            <FaPlane className='text-[#6491C9]' />
            <p className='text-white font-aloe'>Tour Guide</p>
          </div>
          <div>
            <p className='p-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis magnam ut ea error perspiciatis magni velit unde tempore quasi? Dignissimos?
            </p>
          </div>
        </div>
        <div className='mx-[2rem] shadow-lg'>
          <div className='flex justify-evenly py-2 bg-[#1B1D33]'>
            <FaPlane className='text-[#6491C9]' />
            <p className='text-white font-aloe'>Tour Guide</p>
          </div>
          <div>
            <p className='p-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis magnam ut ea error perspiciatis magni velit unde tempore quasi? Dignissimos?
            </p>
          </div>
        </div>
        <div className='mx-[2rem] shadow-lg'>
          <div className='flex justify-evenly py-2 bg-[#1B1D33]'>
            <FaPlane className='text-[#6491C9]' />
            <p className='text-white font-aloe'>Tour Guide</p>
          </div>
          <div>
            <p className='p-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis magnam ut ea error perspiciatis magni velit unde tempore quasi? Dignissimos?
            </p>
          </div>
        </div>
        <div className='mx-[2rem] shadow-lg'>
          <div className='flex justify-evenly py-2 bg-[#1B1D33]'>
            <FaPlane className='text-[#6491C9]' />
            <p className='text-white font-aloe'>Tour Guide</p>
          </div>
          <div>
            <p className='p-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis magnam ut ea error perspiciatis magni velit unde tempore quasi? Dignissimos?
            </p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Services
