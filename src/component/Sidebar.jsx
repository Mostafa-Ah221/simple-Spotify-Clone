import { useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'
import logo from '../assets/logoo.png'
export default function Sidebar() {
  const navigate=useNavigate()
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[30%] rounded flex flex-col justify-around'>
            <div onClick={()=> navigate("/")} className='flex items-center gap-3 pl-2 cursor-pointer'> 
                <img className='w-44' src={logo} alt="logo" />
            </div>
            <div onClick={()=> navigate("/")} className='flex items-center gap-3 pl-8 cursor-pointer'> 
                <img className='w-6' src={assets.home_icon} alt="logo" />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'> 
                <img className='w-6' src={assets.search_icon} alt="logo" />
                <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className='h-[85%] bg-[#121212] rounded '>
            <div className='flex p-4 justify-between items-center'> 
                <div className='flex items-center gap-3'> 
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className=' font-semibold'>Your Library</p>
                </div>
                <div className='flex items-center gap-3'> 
                    <img className='w-5' src={assets.arrow_icon} alt="" />
                    <img className='w-5' src={assets.plus_icon} alt="" />
                </div> 
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
              <h1>Create your frist palylist </h1>   
              <p className='font-light'>it is easy we will help you</p>
              <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
              <h1>Lets findsome podcasts to follow </h1>   
              <p className='font-light'>We will keep you update on new episodes</p>
              <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcasts</button>
            </div>
        </div>
    </div>
  )
}