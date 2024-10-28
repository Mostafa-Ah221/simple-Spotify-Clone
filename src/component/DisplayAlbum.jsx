import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import {albumsData, songsData} from '../assets/assets'
import {assets} from '../assets/assets'
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

export default function DisplayAlbum() {
    const {id}=useParams()
    const {image,name,desc}= albumsData[id]
      const {playWithId}=useContext(PlayerContext)

  return (
    <>
    <Navbar/>
     <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
      <img className="w-48 rounded" src={image} alt="" />
      <div className="flex flex-col">
        <p>Playlist</p>
        <h2 className="text-5xl font-bold mb-4 md:text-7xl">{name}</h2>
        <h4>{desc}</h4>
        <div className="mt-1">
            <img className="inline-block w-5 mr-1" src={assets.spotify_logo} alt="" />
            <b>Spotify</b>
            . 1,284.635 likes
            . <b>50 songs,</b>
            about 2 hr 30 min
        </div>
      </div>
     </div>
     <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text=[#a7a7a7]">
        <p className="mr-4"><b>#</b>Title</p>
        <p>Album</p>
        <p className="hidden sm:block">Data Added</p>
        <img className="w-4 m-auto " src={assets.clock_icon} alt="" />
     </div>
     <hr />
     {
        songsData.map((item,index)=>(
            <div onClick={()=>playWithId(item.id)} key={index} className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text=[#a7a7a7] hover:bg-[#ffffff2b]">
                <p className="text-white">
                    <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
                    <img className="inline w-10 mr-5" src={item.image} alt="" />
                    {item.name}
                </p>
                <p className="tex-[15px]">{name}</p>
                <p className="tex-[15px] hidden sm:block">5 days ago</p>
                <p className="tex-[15px] text-center">{item.duration}</p>
            </div>
        ))
     }
    </>
  )
}