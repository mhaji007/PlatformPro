// Header is a component that lies
// outisde the page folder and as such
// does not have access to the query route
// parameter. In order to access route
// parameters we need to import useRouter

import {useRouter} from 'next/router';



const countries = [{
    label: 'us',
    name: 'United States'
}, {
    label:'br',
    name:'Brazil'
}]



const Header = () => {

    const router = useRouter();

        const handleChange = (e) => {
            console.log('selected country: ', e.target.value);
        
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
        value={router.query.country}
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