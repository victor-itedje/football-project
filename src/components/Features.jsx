 import React from 'react'
import { assets } from '../assets/assets'
import PlayerStatsTable from './Playerstats'
import LatestNews from './LatestNews'
import UserDashboard from './UserDashboard'
import ChatUI from './Chat'

const Features = () => {
  return (
    <div className='flex flex-col items-center justify-center container mt-[100px] mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='Features' >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2' >Overview <span className='underline underline-offset-4 decoration-1 under font-light' >Our brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8' >Passionate about the game, dedicated for the love</p>
      <div className='flex gap-10 md:gap-20' >
        <div className='flex flex-col gap-1 items-center' >
            <img className='w-[52px] h-[52px] rounded' src={assets.statistics} alt="" />
            <h1 className='text-[24px] text-center font-bold  ' >Player Statistics</h1>
            <p className='text-gray-500 text-center text-[16px]' >Analyze player performance</p>
        </div>
        <div className='flex flex-col gap-1 items-center' >
            <img className='w-[52px] h-[52px] rounded' src={assets.schedule} alt="" />
            <h1 className='text-[24px] text-center font-bold' >Match Schedules</h1>
            <p className='text-gray-500 text-center text-[16px]' >Stay updated with detailed match schedules</p>
        </div>
      </div>
      <div className='flex mt-[30px] flex-col gap-1 items-center' >
            <img className='w-[52px] h-[52px] rounded' src={assets.news} alt="" />
            <h1 className='text-[24px] text-center font-bold' >News Updates</h1>
            <p className='text-gray-500 text-center text-[16px]' >Get the latest news and updates from the world</p>
        </div>
        <div>
        <PlayerStatsTable />
        <ChatUI />
        </div>
    </div>
  )
}

export default Features
