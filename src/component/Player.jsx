import { useContext } from 'react'
import {assets} from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

export default function Player() {

    const {seekBg,seekBar,playStatus,play,pause,track,time,previous,next,seekSong}=useContext(PlayerContext)
  return (
    <div className="h-[10%] flex justify-between items-center bg-black text-white px-4">
        <div className=" hidden lg:flex items-center gap-4 ">
            <img className='w-12' src={track.image} alt="" />
            <div>
                <p>{track.name}</p>
                <p>{track.desc.split(" ").slice(0,3).join(" ")}</p>
            </div>
        </div>
        <div className='flex flex-col items-center m-auto gap-1'>
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                {
                    !playStatus ?<img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" /> 
                    :<img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                }
                <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
            </div>
            <div className='flex items-center gap-5'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div onClick={seekSong} ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-s-full cursor-pointer'>
                    <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className='w-4' src={assets.plays_icon} alt="" />
            <img className='w-4' src={assets.mic_icon} alt="" />
            <img className='w-4' src={assets.queue_icon} alt="" />
            <img className='w-4' src={assets.speaker_icon} alt="" />
            <img className='w-4' src={assets.mini_player_icon} alt="" />
            <img className='w-4' src={assets.zoom_icon} alt="" />
        </div>
    </div>
  )
}
