import React from 'react'
import './Header.scss'
import { BsMoon } from 'react-icons/bs';




function Header() {
    return (
        <div className='header'>
            <h1 className='header__title'>Where in the world?</h1>
            {/* reminder: the sun and moon inline logo */}
            <button className='header__toggler'>
                <i><BsMoon/></i>     Dark Mode</button>
        </div>
    )
}

export default Header
