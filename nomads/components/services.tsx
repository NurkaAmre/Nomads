import React from 'react'
import Image from 'next/image';
import bus from '@/public/bus.png'
import hotel from '@/public/hotel.png'
import travel from '@/public/travel.png'
import meal from '@/public/meal.png'

const Services = () => {
  return (
    <div className='pt-10'>
      <div className='flex flex-col text-white justify-center items-center'>
        <h2 className='text-center mb-3 text-4xl md:text-5xl font-abhaya'>The Perfect Travel</h2>
        <hr className='w-[180px] md:w-[720px] h-px mx-auto mt-2 md:mb-2 bg-gray-500 border-0 rounded dark:bg-gray-700' />
        <p className='mx-6 my-4 text-xl font-aloe md:text-lg'>
          We cover all expences for picking the perfect hotel to flight and destination.
        </p>
      </div>
      <div className='bg-white flex py-6 flex-col justify-center md:flex-row'>
        <div className='mx-[2rem] shadow-lg'>
          <div className='flex justify-center gap-5 py-2 bg-[#1B1D33]'>
            <Image src={travel} alt='travel' width={30} height={30} />
            <p className='text-white font-abril'>Tour Guide</p>
          </div>
            <p className='p-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis magnam ut ea error perspiciatis magni velit unde tempore quasi? Dignissimos?
          </p>
        </div>
        <div className='mx-[2rem] shadow-lg'>
          <div className='flex justify-center gap-5 py-2 bg-[#1B1D33]'>
            <Image src={hotel} alt='hotel' width={30} height={30} />
            <p className='text-white font-abril'>Hotel</p>
          </div>
          <div>
            <p className='p-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis magnam ut ea error perspiciatis magni velit unde tempore quasi? Dignissimos?
            </p>
          </div>
        </div>
        <div className='mx-[2rem] shadow-lg'>
          <div className='flex justify-center gap-5 py-2 bg-[#1B1D33]'>
            <Image src={bus} alt='bus' width={30} height={30} />
            <p className='text-white font-abril'>Transport</p>
          </div>
          <div>
            <p className='p-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis magnam ut ea error perspiciatis magni velit unde tempore quasi? Dignissimos?
            </p>
          </div>
        </div>
        <div className='mx-[2rem] shadow-lg'>
          <div className='flex justify-center gap-5 py-2 bg-[#1B1D33]'>
            <Image src={meal} alt='meal' width={30} height={30} />
            <p className='text-white font-abril'>Meal</p>
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
