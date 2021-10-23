import React from 'react'
import './country.scss'
function Country() {
    return (
        <div className='country'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/2560px-Flag_of_Egypt.svg.png' alt='flag' className='country__image'/>
            <div className='country__data'>
                <h2 className='country__data__title'>Egypt</h2>
                <div className='country__data__info'>
                    <p><span>Population:</span> boom</p>
                    <p><span>Region:</span> baam</p>
                    <p><span>Capital:</span> ping</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Country
