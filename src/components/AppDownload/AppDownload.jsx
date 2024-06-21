import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For better expreince Download <br/> Tomato App </p>
        <div className="app-download-platorm">
          <a href="https://play.google.com/store/games?hl=en&pli=1" target="_blank" rel="noopener noreferrer">
          <img src={assets.play_store} alt="" />
          </a>
          <a href="https://play.google.com/store/games?hl=en&pli=1" target="_blank" rel="noopener noreferrer">
          
             <img src={assets.app_store} alt="" />
             </a>
        </div>

    </div>
  )
}

export default AppDownload