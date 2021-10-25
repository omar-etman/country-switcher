import {useEffect,useState} from 'react'
import List from '../../Components/List/List'
import SearchParams from '../../Components/SearchParams/SearchParams'
import './HomePage.scss'
const URL=`https://restcountries.com/v3.1/all`;
function HomePage() {

    const [countries, setCountries] = useState([])
    const [region, setRegion] = useState('')

    useEffect(()=>{
        requestCountries();
      }, [])

    const requestCountries = async () => {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        setCountries(data);
    }

    const selectRegion = (e) => {
        setRegion(e.target.value)
        //region is used to make fetch data
        //setCountries(data)
    }

    return (
        <div className='homepage'>
            <SearchParams
                selectRegion={selectRegion}
                region={region}
            />
            <List
                countries={countries}
            />
        </div>
    )
}

export default HomePage