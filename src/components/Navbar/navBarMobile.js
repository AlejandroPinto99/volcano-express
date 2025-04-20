import React, { useState } from 'react'
import './navbar.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function NavbarMobile() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {
                !isOpen ? (
                    <Bars3Icon onClick={() => setIsOpen(true)} className="navbar-mobile" />
                ) : (
                    <div>
                        <button onClick={() => setIsOpen(false)}>
                            <XMarkIcon style={{ color: '#fff', height: '25px', width: '25px', position: 'absolute', top: 10, right: 10, zIndex: 2 }} />
                        </button>
                        <ul className="open-mobile-menu">
                            <li onClick={() => setIsOpen(false)}><a href='#home' >Inicio</a></li>
                            <li onClick={() => setIsOpen(false)}><a href='#destinos' >Destinos</a></li>
                            <li onClick={() => setIsOpen(false)}><a href='#buses' >Autobuses</a></li>
                            <li onClick={() => setIsOpen(false)}><a href='#servicios' >Servicios</a></li>
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
