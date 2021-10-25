import React from 'react'
import { Link } from 'react-router-dom'
import './country.scss'
function Country(props) {

    const {name, population, region, key, capital, flag, id } = props
    return (
        <Link className='country' key ={key}  to={`/details/name/${id}`}>     
       
            <div className='country__image'>
            <img src={flag} alt='flag' />
            </div> 
            <div className='country__data'>
                <h2 className='country__data__title'>{name}</h2>
                <div className='country__data__info'>
                    <p><span>Population:</span>{population}</p>
                    <p><span>Region:</span>{region}</p>
                    <p><span>Capital:</span>{capital}</p>
                </div>
            </div>
        </Link>
    )
}

export default Country
