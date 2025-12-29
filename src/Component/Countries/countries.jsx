import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = ({countriesPromise}) => {
    const [VisitedCountries, setVisitedCountries] = useState([]);

    const handleCountryVisited = (country) => {
        const newVisitedCountries = [...VisitedCountries, country];
        setVisitedCountries(newVisitedCountries);

    };
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    
    return (
        <div> 
            <h1>Countries : {countries.length}</h1>
            <h3>Total Country Visited : {VisitedCountries.length}</h3>
            <ol>
                {VisitedCountries.map( country => <li>{country.name.common}</li>)}
            </ol>
            <div className='Countries'>
            {
                countries.map( country => <Country 
                    key={country.cca3.cca3}
                    country={country}
                    handleCountryVisited = {handleCountryVisited}
                ></Country>)
            }
            </div>
        </div>
    );
}

export default Countries;