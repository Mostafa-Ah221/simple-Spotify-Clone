import { useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'

export default function Navbar() {
    const navigate=useNavigate()
  return (
    <>
     <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
            <img onClick={()=> navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
            <img onClick={()=> navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className="flex items-center gap-4">
            <p className="bg-white text-black px-4 text-[15px] py-1 rounded-2xl hidden md:block cursor-pointer ">Explore Premium</p>
            <p className="bg-black px-3 text-[15px] py-1 rounded-2xl cursor-pointer">Install App</p>
            <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">M</p>
        </div>
        </div>   
        <div className='flex items-center gap-2 mt-4'>
            <p className='bg-white px-4 py-1 rounded-2xl text-black cursor-pointer'>All</p>
            <p className=' px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
            <p className=' px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p> 
        </div>
    </>
  )
}
