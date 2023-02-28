import React from "react";
import './navbar.component.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar_logo">
        <img
          src='/images/logo.svg'
          alt="logo"/>
      </div>
      <div className="navbar_text">
        my travel journal.
      </div>
    </div>
  )
}