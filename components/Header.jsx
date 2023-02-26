import React from 'react'
import { urlFor } from '../lib/client';
const Header = ({header}) => {
  return (
    <div className='bg-grey-200 flex items-center justify-around gap-4 pt-7 p-7'>
      <img
      src={urlFor(header.image)}
      alt="Picture of the author"
      className=" h-[400px] w-[450px]"
      />
      <div className='grid'>
        <span className='text-4xl flex-wrap'>Get your Natural Coffee</span>
       <span className='sm:block'>Coffee mixed with weed, a drink made from roasted coffee beans.<br/> It contains caffeine, a natural stimulant that can boost energy and improve alertness. </span>
        <span className='text-xl font-semibold'>{header.desc}</span>
        <span> Get a Discount of {header.discount} </span>
        <button class="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
        {header.buttonText}
        </button>
      </div>
    </div>
  )
}

export default Header