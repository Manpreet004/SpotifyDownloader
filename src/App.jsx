import React from 'react'
import { AiOutlineSpotify } from "react-icons/ai";
import axios from 'axios';
import './App.css'
import { useState } from 'react';

const App = () => {
  const [URL, setURL] = useState("")
   
  const handleURL = (e) =>{
    e.preventDefault()
    setURL(e.target.value)
  }
  
  const download = async() =>{
    const options = {
      method: 'GET',
      url: 'https://spotify-downloader9.p.rapidapi.com/downloadSong',
      params: {
        songId: URL
      },
      headers: {
        'x-rapidapi-key': 'e0f326883amsh94b0942a9513da4p16494ajsn29296f6e19fe',
        'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
      }
    };
    try {
      const rspns = await axios.request(options)
      console.log(rspns.data.data.downloadLink)
      window.location.href = rspns.data.data.downloadLink
      //console.log(rspns)
    }catch (error){
      console.log(error)
    }
 }

  return (
    <>
    <div className='h-screen bg-black text-white  items-center justify-center flex flex-col gap-9'>
      <div className='flex items-center justify-center gap-2 text-xl'>
         <AiOutlineSpotify size={50}/>
         <p>Song Downloader</p>
      </div>
      <div >
        <input onChange={handleURL} type="url" className='h-10 w-[400px] rounded outline-none text-black px-2 mr-4'/>
        <button className='bg-green-500 py-2 px-3 rounded hover:text-black'
        onClick={download}
        >
          Download</button>
      </div>
    </div>
    </>
  )
}

export default App