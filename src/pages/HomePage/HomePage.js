import React from 'react'
import List from '../../Components/List/List'
import SearchParams from '../../Components/SearchParams/SearchParams'

import './HomePage.scss'

function HomePage() {
    return (
        <div className='homepage'>

            <SearchParams/>
            <List/>
        </div>
    )
}

export default HomePage