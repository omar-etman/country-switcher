import React from 'react'
import List from '../../Components/List/List'
import SearchParams from '../../Components/SearchParams/SearchParams'

function HomePage() {
    return (
        <div>
            <SearchParams/>
            <List/>
        </div>
    )
}

export default HomePage