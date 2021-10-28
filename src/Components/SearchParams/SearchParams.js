import {useState, useEffect, Fragment} from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosSearch } from 'react-icons/io';
import './searchParams.scss'

// <IoIosSearch/>
// <IoIosArrowBack/>
function SearchParams(props) {

    const {selectRegion, region} = props

    const [dropdown, setDropDown] = useState(false)

    const viewDropDown = (e) => {
        setDropDown(!dropdown)
    }

    return (
        <div className="searchparams">
            <div className="searchparams__searchbar">
                <i><IoIosSearch/></i>
                <input
                    className="searchparams__searchbar__input"
                    placeholder='Search for a country...'
                    type='text'
                    // onChange={selectRegion}
                    value={region}
                />
            </div>

            <div className="searchparams__filter">
                <button
                    className="searchparams__filter__button"
                    onClick={viewDropDown}>
                    <span>Filter by Region</span> 
                    <i><IoIosArrowUp/></i>
                </button>
                {dropdown === true ?
                    <ul 
                        className="filter__dropdown"
                        onClick={selectRegion}
                        value={region}
                    >
                        <li value='africa'>Africa</li>
                        <li value='americas'>Americas</li>
                        <li value='oceana'>Oceana</li>
                        <li value='europe'>Europe</li>
                        <li value='asia'>Asia</li>
                    </ul>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default SearchParams