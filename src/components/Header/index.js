import React from 'react'
import './header.css'
import Navbar from '../Navbar'
import { logo } from '../../constants/images'
import NavbarMobile from '../Navbar/navBarMobile'

export default function Header() {
  return (
    <div className="container">
      <div className="header-container">
          <img src={logo} alt="logo" />
          <Navbar />
          <NavbarMobile />
      </div>
      <h2 className="slogan">Te llevaremos a tu siguiente aventura en la tierra de volcanes</h2>
    </div>
  )
}
