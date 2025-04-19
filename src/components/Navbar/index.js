import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
        <ul className="navbar-container">
            <li><a href='#home'>Inicio</a></li>
            <li><a href='#destinos'>Destinos</a></li>
            <li><a href='#buses'>Autobuses</a></li>
            <li><a href='#servicios'>Servicios</a></li>
        </ul>
    )
}
