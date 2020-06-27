// Header is a component that lies
// outisde the page folder and as such
// does not have access to the query route
// parameter. In order to access route
// parameters we need to import useRouter

import {useRouter} from 'next/router';
import {useState} from 'react';


const countries = [{
    label: 'us',
    name: 'United States'
}, {
    label:'br',
    name:'Brazil'
}]



const Header = () => {
    const router = useRouter();
    const [selectedCountry, setSelectedCountry] = useState(router.query.country);

        const handleChange = (e) => {
            console.log('selected country: ', e.target.value);
            setSelectedCountry(e.target.value);
    }

    const renderCountries = () => {
        return countries.map(country => {
            return (<option value={country.label}>{country.name} </option>
        )
        })
    }

    return (
        <div className="header">
            
        <select
        value={selectedCountry}
        onChange={handleChange}>
            {renderCountries()}
        </select>




            <style jsx>{`
                .header {
                    padding: 20px;
                    background-color: #333;
                    color:#fff;
                    text-align:center;

                }
            
            `}
            </style>
        </div>
    )
}

export default Header;


