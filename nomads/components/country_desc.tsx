import React from 'react'

const CountryDesc = () => {
  return (
    <div className='text-white'>
      <div className='md:px-[4rem] px-6 pt-10'>
        <h2 className='text-center mb-3 text-5xl md:text-6xl font-abhaya'>Mongolia</h2>
        <hr className='w-[180px] md:w-[720px] h-px mx-auto mt-2 mb-10 md:mb-2 bg-gray-500 border-0 rounded dark:bg-gray-700' />
        <p className='text-xl my-10 font-aloe'>Mongolia is one of the most interesting and unexplored places on the planet.
          As the world’s least densely populated country, Mongolia’s untouched landscapes and nomadic culture make it an adventure destination like no other. Located in Northern Asia with China and Russia at its borders, Mongolia has only recently moved past its status as a Soviet-influenced Communist country. Wandering through the districts, you’ll notice an interesting mix of Asian and European influences, from Soviet architecture in the capital to the Buddhist-influenced traditions widely practised
        </p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10950425.714190695!2d101.96085300000001!3d47.927799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3627050669aa6d4b%3A0xe0dd213937e6e096!2sMongolia!5e0!3m2!1sen!2skz!4v1689951282338!5m2!1sen!2skz" className='w-full h-96'></iframe>
    </div>
  )
}

export default CountryDesc
