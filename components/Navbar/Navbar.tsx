import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScroll(true)
        } else {
            setIsScroll(false)
        }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
}, [])

  return (
    <>
    {isScroll ? <header>
     <div className='flex fixed justify-between items-center px-24 py-8 top-0 w-full bg-[rgba(0,0,0,0.6)] backdrop-blur-md  text-white z-50'>
          <div className='font-[MinimalBold] text-4xl'>AMYOL</div>
          <div className='space-x-2'>
            <a className='p-4 transition-all rounded-2xl hover:bg-red-400'>Store</a>
            <a className='p-4 transition-all rounded-2xl hover:bg-red-400'>Login</a>
            <a className='p-4 transition-all rounded-xl bg-red-500 hover:bg-blue-500'>Register</a>
          </div>
        </div> 
    </header>:<header>
    <div className='flex fixed justify-between items-center px-24 py-8 top-0 w-full  text-white z-50'>
         <div className='font-[MinimalBold] text-4xl'>AMYOL</div>
         <div className='space-x-2'>
           <a className='p-4 transition-all rounded-2xl hover:bg-red-400'>Store</a>
           <a className='p-4 transition-all rounded-2xl hover:bg-red-400'>Login</a>
           <a className='p-4 transition-all rounded-xl bg-red-500 hover:bg-blue-500'>Register</a>
         </div>
       </div> 
   </header>}
    </>
  )
}

export default Navbar