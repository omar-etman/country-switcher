import {Fragment, useEffect, useState} from 'react'
import { withRouter } from "react-router"
import { Link } from 'react-router-dom'
import './DetailsPage.scss'
import {BsArrowLeft} from 'react-icons/bs'

function DetailsPage(props) {
    const [country, setCountry] = useState(null)

    useEffect(()=>{
        requestCountry();
    }, [props.match.params.id])

    const requestCountry = async () => {
        const res = await fetch(`https://restcountries.com/v3.1/${props.match.params.type}/${props.match.params.id}`);
        const data = await res.json();
        console.log(data[0]);
        setCountry(data[0]);
    }

    function nativeName(){
        const array= Object.values(country.name.nativeName)
        return array[0].official
    }
    function languages(){
        const array= Object.values(country.languages)
        return array.join(', ')
    }

    function handleBorders(border){
        props.history.push(`/details/alpha/${border}`)
        // console.log('borders')
    }
    return (
        
        <div className='details'>
            {
                !country ? (
                    <h2>loading</h2>
                ):(
                    <Fragment>
                        <button className='details__button back' onClick={()=>{props.history.goBack()}}>
                            {/* <Link
                                className="details__button__link"
                                to='/'
                            >
                            </Link> */}
                            <i><BsArrowLeft/></i>
                               <span>Back</span>
                        </button>
                        <div className='details__data'>
                            <div className='details__data__img'>
                            <img  alt='flag'src={country.flags.png}/>
                            </div>
                            <div className='details__data__info'>
                                <h1 className='details__data__info__title'>
                                    {country.name.common}
                                </h1>
                                <div className='details__data__info__Halves'>
                                    <div className='details__data__info__Halves__half-first'>
                                        <p>Native Name:<span>{nativeName()}</span></p>
                                        <p>Polulation:<span>{country.population}</span></p>
                                        <p>Region:<span>{country.region}</span></p>
                                        <p>Sub Region:<span>{country.subregion}</span></p>
                                        <p>Capital:<span>{country.capital}</span></p>               
                                    </div>
                                    <div className='details__data__info__Halves__half-second'>
                                        <p>Top Level Domain:<span>blabla</span></p>
                                        <p>Languages:<span>{languages()}</span></p>
                                        <p>Currencies:<span></span></p>    
                                    </div>
                                </div>
                                <div className='details__data__borderContainer'>
                                    <p className='details__data__borderContainer__title'>Border Countries:</p>
                                    {!country.borders?   <p>No borders Found</p> :
                                    <div className='details__data__borderContainer__buttonset'>  
                                    {country.borders.map((border)=>{
                                        return <button key={Math.random()} className='details__button' onClick={()=>{handleBorders(border)}}>{border.toLowerCase()}
                                            {/* <Link to={props.match.url.replace(`${props.match.params.id}`, `${border}`)}>{border}</Link> */}

                                        </button>
    
                                            
                                    })}
                                    </div>}

                                </div>
                            </div>
                        </div>
                    </Fragment>
                    
                )
            }            
        </div>
    )
}


export default  withRouter(DetailsPage);

/* const obj={name:'omar',age:20,country:'egypt'}

const arrayOfKeys=Object.keys(obj) //[name,age,country]
const arrayOfValues=Object.values(obj) //['omar',20,'egypt']
const arrayOfKeysAndValues=Object.entries(obj) // [[name,'omar'],[age,20],[country,'egypt']] */

// arrayOfKeysAndValues[0][]

/* [
    {official: 'Республика Таджикистан', common: 'Таджикистан'}
,
 {official: 'Ҷумҳурии Тоҷикистон', common: 'Тоҷикистон'}
]

['Республика Таджикистан','Таджикистан'] */