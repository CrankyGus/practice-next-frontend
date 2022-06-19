import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaTh, FaWindowClose } from 'react-icons/fa'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenu, setIsMenu] = useState(false)



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
        <div className='flex fixed justify-between items-center px-14 md:px-24 py-8 top-0 w-full bg-[rgba(0,0,0,0.6)] backdrop-blur-md  text-white z-50'>
          <div className='font-[MinimalBold] text-3xl'>TreeHub</div>
          <div className='space-x-2 hidden md:flex'>
            <a className='p-4 transition-all rounded-2xl hover:bg-red-400 '>Store</a>
            <a className='p-4 transition-all rounded-2xl hover:bg-red-400'>Login</a>
            <a className='p-4 transition-all rounded-xl bg-red-500 hover:bg-blue-500'>Register</a>
          </div>

          {isMenu ? <FaWindowClose className='md:hidden text-xl cursor-pointer transition-all hover:scale-125' onClick={() => { setIsMenu(!isMenu) }} />:<FaTh className='md:hidden cursor-pointer transition-all hover:scale-125' onClick={() => { setIsMenu(!isMenu) }} />}
          {isMenu ?
            <div className=' absolute md:hidden top-16 right-12 bg-gray-400  text-white font-[MinimalBold]'>
              <div className='flex flex-col justify-center  p-4 '>
                <Link href="/">
                  <a className='p-2 hover:bg-red-500 hover:text-black'>
                    Store
                  </a>
                </Link>
                <Link href="/">
                  <a className='p-2 hover:bg-red-500 hover:text-black'>
                  Login
                  </a>
                </Link>
                <Link href="/">
                  <a className='p-2 hover:bg-red-500 hover:text-black'>
                    Register
                  </a>
                </Link>
              </div>
            </div> :
            <div className='hidden'></div>}

        </div>
      </header> : <header>
        <div className='flex fixed justify-between items-center px-14 md:px-24 py-8 top-0 w-full  text-white z-50'>
          <div className='font-[MinimalBold] text-3xl'>TreeHub</div>
          <div className='space-x-2 hidden md:flex'>
            <a className='p-4 transition-all rounded-2xl hover:bg-red-400'>Store</a>
            <a className='p-4 transition-all rounded-2xl hover:bg-red-400'>Login</a>
            <a className='p-4 transition-all rounded-xl bg-red-500 hover:bg-blue-500'>Register</a>
          </div>

          {isMenu ? <FaWindowClose className='md:hidden text-xl cursor-pointer transition-all hover:scale-125' onClick={() => { setIsMenu(!isMenu) }} />:<FaTh className='md:hidden cursor-pointer transition-all hover:scale-125' onClick={() => { setIsMenu(!isMenu) }} />}
          {isMenu ?
            <div className='md:hidden absolute top-16 right-12  bg-white text-black font-[MinimalBold]'>
              <div className='flex flex-col justify-center  p-4 '>
                <Link href="/">
                  <a className='p-2 hover:bg-red-500 hover:text-white'>
                    Store
                  </a>
                </Link>
                <Link href="/">
                  <a className='p-2 hover:bg-red-500 hover:text-white'>
                  Login
                  </a>
                </Link>
                <Link href="/">
                  <a className='p-2 hover:bg-red-500 hover:text-white'>
                    Register
                  </a>
                </Link>
              </div>
            </div> :
            <div className='hidden'></div>}
        </div>
      </header>}
    </>
  )
}

export default Navbar