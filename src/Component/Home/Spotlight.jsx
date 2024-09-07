import React from 'react'

const Spotlight = () => {
  return (
    <div>
        
        
        <div className='bg-white h-screen text-black p-10'>

          <h1 className='text-blue-400 text-5xl font-bold text-center pt-10 '>SPOTLIGHT </h1>
          <h2 className=' text-xl text-center  p-6 '>Our Work in Focus</h2>


          <div>
            <ul className='text-xl text-center flex justify-evenly gap-10 p-4'>
              <li className='hover:text-blue-400 cursor-pointer'>Dental </li>
              <li className='hover:text-blue-400 cursor-pointer '>Real Estate</li>
              <li className='hover:text-blue-400 cursor-pointer'>Restraunt</li>
              <li className='hover:text-blue-400 cursor-pointer'>Home Decor</li>
              <li className='hover:text-blue-400 cursor-pointer'>Hospitals</li>
              
            </ul>
          </div>


            
        </div>
        
        
        </div>
  )
}

export default Spotlight