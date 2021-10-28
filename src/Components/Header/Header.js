import React from 'react'
import './Header.scss'
import { BsMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'



function Header() {
    return (
        <div className='header'>
            <h1 className='header__title'>
                <Link to='/'>Where in the world?</Link>
            </h1>
            {/* reminder: the sun and moon inline logo */}

            <button className='header__toggler'>
                <BsMoonFill/>
                <span>Dark Mode</span>
            </button>
        </div>
    )
}

export default Header;
