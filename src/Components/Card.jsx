import React from 'react'
import { FaQuoteLeft,FaQuoteRight } from 'react-icons/fa';

export const Card = (props) => {
  let review = props.review;

  return (
    <div className='flex flex-col md:relative'>

      <div className='lg:absolute top-0 md:top-[-7rem] z-[10] mx-auto'>
        <img 
        className="aspact-square rounded-full w-[140px] h-[140px] z-[25]"
        src={review.image}/>

        <div className='hidden lg:flex w-[140px] h-[140px] bg-red-500 rounded-full  lg:absolute top-[230px] md:top-[-6px] z-[-20] md:left-[10px]'/>        
      </div>

      <div className='text-center mt-7'>
        <p className='font-bold text-2xl capitalize'>{review.name}</p>
      </div>

      <div className='text-center mt-7'>
        <p className='text-red-400 uppercase'>{review.job}</p>
      </div>

      <div className='text-red-400 mx-auto mt-5'>
        <FaQuoteLeft/>
      </div>

      <div className='text-center mt-4 text-slate-500'>
        {review.text}
      </div>

      <div className='text-red-400 mx-auto mt-5'>
        <FaQuoteRight/>
      </div>

      
    </div>
  )
}
