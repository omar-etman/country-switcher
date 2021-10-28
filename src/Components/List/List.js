import React from 'react'
import Country from '../Country/Country'
import './list.scss'

function List(props) {

    const {countries} = props;

    return (
        <div className="list">
           {
                !countries.length ? (
                    <h2>Loading</h2>
                ) : (countries.map((country) => (
                          <Country 
                            key={country.name.common}
                            name={country.name.common} 
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                            flag={country.flags.png}
                            id={country.name.common}
                          />
                        )
                    )
                      
                )
            }
        </div>
    )
}
/* function List(props) {

    // const {countries} = props;

    return (
        <div className="list">

        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        <div >a111</div>
        </div>
    )
} */

export default List;