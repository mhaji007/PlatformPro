// Header is a component that lies
// outisde the page folder and as such
// does not have access to the query route
// parameter. In order to access route
// parameters we need to import useRouter

import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import cookies from 'nookies';
import {isAuthenticated} from '../../utils/withAuthorization';


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
            //console.log('selected country: ', e.target.value);
            setSelectedCountry(e.target.value);
            // if the first parameter in the push method
            // is not specified the data will be fetched
            // from the server
            router.push(`/[country]`,`/${e.target.value}`); 
    }

    // Now control shifts to useEffect to set a cookie for
    // the selected/changed country

    const renderCountries = () => {
        return countries.map(country => {
            return (<option value={country.label}>{country.name} </option>
          );
        });
    };

    const handleSignout = () => {
        cookies.destroy(null, 'token');
    }

    // Whenever a country is selected or a selected country 
    // changes (right after calling handlechange)
    // use the following effect
    useEffect(() => {
        if (selectedCountry) {
        // No context on serverside hence null as the first value
        cookies.set(null,'defa;ultCountry', selectedCountry, {
            maxAge: 30*24*60*60,
            path: '/'
        });
    }
    }, [selectedCountry])

    return (
        <div className="header">
            
        <select
        value={selectedCountry}
        onChange={handleChange}>
            {renderCountries()}
        </select>

        {isAuthenticated()&& (
        <Link href="/[country]" as={`/${selectedCountry}`}>
            <a onClick={handleSignout} >
                Sign out
            </a>
        </Link>)}

            <style jsx>{`
                .header {
                    padding: 20px;
                    background-color: #333;
                    color:#fff;
                    text-align:center;
                    margin-bottom: 10px;
                    display: flex;
                    justify-content: space-between;

                }

                .header > :global(a) {
                    color:#fff;
                }
            
            `}
            </style>
        </div>
    )
}

export default Header;


