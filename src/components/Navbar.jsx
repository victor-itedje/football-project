import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router'
import { UserIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "auto"
    }

    return()=> {
      document.body.style.overflow = "auto"
    }
  }, [showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10' >
      <div class="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.icon} alt="" />
        <ul class="hidden md:flex gap-7">
           <Link to="/"> <a href="#Home" class="cursor-pointer hover:text-gray-400">Home</a></Link>
           <Link to="/features"><a href="#Features" class="cursor-pointer hover:text-gray-400">Features</a></Link>
            <Link to="/chat"><a href="#Chat" class="cursor-pointer hover:text-gray-400">Chat</a></Link>
        </ul>
       <Link to="/dashboard"><button className="hidden cursor-pointer md:block border-2 bg-white px-5 py-4 rounded-full"><img src={assets.avatar} className='w-[20px]' /></button></Link>
      <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer' />
      </div>
      {/* --------mobile menu------- */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`} > 
      <div className='flex justify-end p-6 cursor-pointer' >
        <img onClick={() => setShowMobileMenu(false)} src={assets.close_icon} alt="" className='w-6' />
      </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium ' >
          <Link to="/"> <a onClick={() => setShowMobileMenu(false)} href="#Home" className='px-4 py-2 rounded-full inline-block' >Home</a></Link>
        <Link to="/features">  <a onClick={() => setShowMobileMenu(false)} href="#Features" className='px-4 py-2 rounded-full inline-block' >Features</a></Link>
         <Link to="/chat"> <a onClick={() => setShowMobileMenu(false)} href="#Chat" className='px-4 py-2 rounded-full inline-block' >Chat</a></Link>
          <Link to="/dashboard"><button className=" cursor-pointer md:block border-2 bg-white px-5 py-4 rounded-full"><img src={assets.avatar} className='w-[20px]' /></button></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
