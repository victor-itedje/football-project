import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div class="min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden"
    style={{backgroundImage: "url('/ball.jpg')"}}
    id='home'
    >
      <div className='container text-center mt-[100px] mx-auto py-4 px-6 md:px-20 lg:px-32' >
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 text-white' >Football News & Updates</h2>
        <div className='space-x-6 mt-16' >
         <Link to="/latestnews"><a href="#News" className='border bg-white border-white px-8 py-3 rounded'> Latest News</a></Link>
          <a href="#Contact" className='border  border-white px-8 py-3 rounded text-white' >Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Home
