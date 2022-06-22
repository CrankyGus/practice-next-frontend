import React from 'react'

const Hero = () => {
  return (
    <>
      <div>
        <img src="images/bg.jpeg" alt="" className=' relative top-0 left-[-1px]' />
      </div>
      <div className='flex justify-center items-center'>
        <img src="images/Hero.png" alt="" className='  absolute top-32 w-[20%] md:w-[15%] md:top-[12rem]'/>
      </div>
    </>
  )
}

export default Hero