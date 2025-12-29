import { useState } from 'react';
import './Country.css';
const Country = ({country , handleCountryVisited}) => {
    // console.log(country);
    const [Visited , setVisited] = useState(false);
    const HandelVisited = () => {
        // setVisited(true)
        // console.log("Visited", country.name.common);
        // Basic Toggle Logic
        // if (Visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        // Second Approach
        // setVisited( Visited? false : true)
        // Third Approach
        setVisited(!Visited);
        handleCountryVisited(country);
    }

    return (
        <div className={`Country ${Visited && "country-visited"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common}</h3>
            <p>Population : {country.population.population}</p>
            <p>Area : {country.area.area} {country.area.area > 300000 ? " Big Country" : "Small Country"}</p>
            <button onClick={HandelVisited }>
                {Visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;