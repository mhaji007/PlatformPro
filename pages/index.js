import axios from 'axios';

const Home = ({shows}) => {
    
     console.log("TCL: Home -> props", shows)
    
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
    return {
        shows: response.data
    }
}


export default Home;