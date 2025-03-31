import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import reviews from './data'
import { Testimonial } from './Components/Testimonial'

function App() {

  return (
      <div className='flex flex-col w-[100%] justify-center items-center h-[100vh] bg-gray-300'>

        <div className=''>
          <div className='text-center'>

            <h1 className='text-4xl font-bold font-serif'>React Testimonial Demo</h1>
          </div>
          <div className='bg-red-800 h-[4px] w-inherit '/>   
        </div>

          <Testimonial reviews={reviews}></Testimonial>

       </div>
  )
}

export default App
