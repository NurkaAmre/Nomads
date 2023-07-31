import React from 'react'
import Image from 'next/image'

const Todo = () => {
  return (
    <div className='pt-10'>
      <div className='flex flex-col text-white justify-center items-center'>
        <h2 className='text-center mb-3 text-4xl md:text-5xl font-abhaya'>To Do Things</h2>
        <ul className='flex flex-row justify-center md:gap-[5rem] md:py-[3rem]'>
          <li>
            <button className='rounded-full border-2 bg-[#6491C9] text-xl font-abhaya font-light px-6 py-2 hover:bg-transparent hover:border-[#6491C9]'>Culture</button>
          </li>
          <li>
            <button className='rounded-full border-2 bg-[#6491C9] text-xl font-abhaya font-light px-6 py-2 hover:bg-transparent hover:border-[#6491C9]'>Adventure</button>
          </li>
          <li>
            <button className='rounded-full border-2 bg-[#6491C9] text-xl font-abhaya font-light px-6 py-2 hover:bg-transparent hover:border-[#6491C9]'>Nature</button>
          </li>
          <li>
            <button className='rounded-full border-2 bg-[#6491C9] text-xl font-abhaya font-light px-6 py-2 hover:bg-transparent hover:border-[#6491C9]'>Relaxation</button>
          </li>
          <li>
            <button className='rounded-full border-2 bg-[#6491C9] text-xl font-abhaya font-light px-6 py-2 hover:bg-transparent hover:border-[#6491C9]'>Family</button>
          </li>
        </ul>
        <div>
          <div>
            <Image />
            <div>
              Arts & Culture
            </div>
          </div>
          <div>
            <Image />
            <div>
              Foods & Drink
            </div>
          </div>
          <div>
            <Image />
            <div>
              Festivals & Events
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
