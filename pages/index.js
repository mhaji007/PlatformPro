import {useEffect} from 'react';
import axios from 'axios';

const Home = (props) => {
    
    // console.log("TCL: Home -> props", props)
    
    // useEffect(() => {

    //     axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
    //         .then(response => console.log(response.data))

    // }, [])

    return (
    <h1>This is a country test</h1>
    )
}

Home.getInitialProps = async () => {
    const response = await axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
    console.log("TCL:Home.getInitialProps -> response", response.data)

    return {
        test: 'testing'
    }
}


export default Home;