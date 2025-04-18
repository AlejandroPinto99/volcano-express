import React, { useState } from 'react'
import './navbar.css'
import { Bars3Icon } from '@heroicons/react/24/outline'

export default function NavbarMobile() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {
                !isOpen ? (
                    <Bars3Icon onClick={() => setIsOpen(true)} className="navbar-mobile" />
                ) : (
                        <ul className="open-mobile-menu">
                            <li><a href='#home'>Inicio</a></li>
                            <li><a href='#destinies'>Destinos</a></li>
                            <li><a href='#buses'>Autobuses</a></li>
                            <li><a href='#services'>Servicios</a></li>
                        </ul>
                )
            }
        </div>
    )
}
