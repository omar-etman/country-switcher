import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosSearch } from 'react-icons/io';
import './searchParams.scss'

// <IoIosSearch/>
// <IoIosArrowBack/>
function SearchParams() {
    return (
        <div className="searchparams">
            <div className="searchparams__searchbar">
            <i><IoIosSearch/></i>
            <input
                className="searchparams__searchbar__input"
                placeholder='Search for a country...'
                type='text'
                />
                </div>

            <div className="searchparams__filter">

                <button className="searchparams__filter__button">Filter by Region <i><IoIosArrowUp/></i></button>

                {/* <ul className="searchparams__filter__options">
                    <li>option</li>
                    <li>option</li>
                    <li>option</li>
                    <li>option</li>
                    <li>option</li>
                    <li>option</li>
                    <li>option</li>
                    <li>option</li>
                    <li>option</li>
                    
                </ul> */}
            </div>
        </div>
    )
}

export default SearchParams
