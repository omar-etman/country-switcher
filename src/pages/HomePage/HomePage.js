import {useEffect,useState} from 'react'
import List from '../../Components/List/List'
import SearchParams from '../../Components/SearchParams/SearchParams'
import './HomePage.scss'
function HomePage() {
    
    const [countries, setCountries] = useState([])
    const [region, setRegion] = useState(``)
    const URL=`https://restcountries.com/v3.1/all`;
    const regionURL=`https://restcountries.com/v2/continent/${region}`
    
    useEffect(()=>{
        requestCountries();
      }, [])

    const requestCountries = async () => {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        setCountries(data);
    }

    const requestByRegion = async (region) => {
        const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        const data = await res.json();       
        console.log(data);
        debugger
        setCountries(data);
    } 

    const selectRegion = (e) => {
        debugger
        setRegion(e.target.value)
        console.log(region)
        // requestByRegion(region)
    }

    const clearRegion =(e)=>{
        setRegion('')
    }


    return (
        <div className='homepage'>
            <SearchParams
                selectRegion={selectRegion}
                region={region}
                clearRegion={clearRegion}
            />
            <List
                countries={countries}
            />
        </div>
    )
}

export default HomePage