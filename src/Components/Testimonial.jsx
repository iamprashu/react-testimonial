import React, { useEffect, useState } from 'react'
import { Card } from './Card';
import { FiChevronLeft,FiChevronRight } from 'react-icons/fi';


export const Testimonial = (props) => {
  let reviews = props.reviews;
  const [index,setIndex] = useState(0);
  console.log(index);

  function leftShiftHandler(){
    if(index-1 < 0){
      setIndex(reviews.length -1 );
    }else{
      setIndex(index-1);
    }
  }

  function rightShiftHandler(){
    if(index+1 >= reviews.length){
      setIndex(0);
    }else{
      setIndex(index+1);
    }
  }

  function surpriseHandler(){
    let randIndex = Math.floor((Math.random() * reviews.length));
    setIndex(randIndex)
  }

 

  return (
    <div className='flex flex-col w-[90%] md:w-[80%] bg-white mt-10 p-5'>
      <Card review={reviews[index]}></Card>

      <div className='flex text-5xl mt-5 gap-3 text-red-400 font-bold mx-auto'>
        <button className='hover:text-red-500' onClick={leftShiftHandler}><FiChevronLeft/></button>
        <button className='hover:text-red-500' onClick={rightShiftHandler}><FiChevronRight/></button>
      </div>

      <div className='text-center mt-5'>
        <button className='bg-red-400 hover:bg-red-600 hover:rounded-2xl text-white transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-lg' onClick={surpriseHandler}>Random Data</button>
      </div>

    </div>
  )
}
