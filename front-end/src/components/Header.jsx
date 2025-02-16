import React from 'react'
import logoSpotify from '../assets/logo/spotify-logo.png'
import './Header.css'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <Link to="/"><img src={logoSpotify} alt="logo-Spotify" /></Link>
        <Link to="/" className='header__link' >
            <h1>Spotify</h1>
        </Link>
    </div>
  )
}

export default Header