import React from 'react'
import './NavBarStyle.css'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
      <nav className='NavbarItems'>
         <h1 className='navbar-logo'>Sea Senora</h1>
          <ul className="nav-menu">
            <Link className='nav-link' to="/" id='homeButton'>Home</Link>
            <Link className='nav-link' to="/user/dashboard" id='DashBoardButton'>Dashboard</Link>
            <Link className='nav-link' to="/" id='profileButton'>Profile</Link>
            <Link className='nav-link' to="/" id='myBookingButton'>My Booking</Link>
          </ul>
          <Link className='logout-button' to="/" id='logout'>Logout</Link>
      </nav>
  )
}
