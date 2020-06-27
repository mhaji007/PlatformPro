const countries = [{
    label: 'us',
    name: 'United States'
}, {
    label:'br',
    name:'Brazil'
}]



const Header = () => {

    
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
            
        <select onChange={handleChange}>
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