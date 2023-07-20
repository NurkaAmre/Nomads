import React from 'react'
import Image from 'next/image'
import khan from '@/public/chengis.jpg'
import ger from '@/public/ger.jpg'
import eagle from '@/public/eagle.jpg'
import gernight from '@/public/gernight.jpg'
import lake from '@/public/lake.jpg'

const Main = () => {
  return (
    <section className='md:py-4'>
      <div className="flex flex-row gap-4 relative">
        <Image src={ger} alt="Picture 1" className="w-200 h-150 object-cover" />
        <Image src={khan} alt="Picture 1" className="w-200 h-150 object-cover" />
        <Image src={eagle} alt="Picture 1" className="w-200 h-150 object-fill" />
        <Image src={lake} alt="Picture 1" className="w-200 h-150 object-cover" />
        <Image src={gernight} alt="Picture 1" className="w-200 h-150 object-cover" />
        <div className='bg-[#2B2D4293] absolute md:top-[10rem] md:left-[5rem] rounded-md'>
          <p className='font-abril text-white md:text-6xl md:p-[1rem]'>Travel Beyond<br /> Limits<br /> with Nomads.</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center bg-[#FFFFFF21] md:mx-[10rem] md:my-[2rem] rounded-sm text-white font-abhaya'>
        <p className='md:text-3xl md:px-[3rem] md:py-[2rem]'>
          Start your travel at an affordable price with Nomads.Contact us not below.
        </p>
        <button className='bg-[#6491C9] px-4 py-2 text-2xl md:mb-5'>
          Book Now
        </button>
      </div>
    </section>
  )
}

export default Main
