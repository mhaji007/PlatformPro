import axios from 'axios';

const Home = ({shows}) => {
    
  //  console.log("TCL: Home -> props", shows)
  
  // useEffect(() => {
    
    //     axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
    //         .then(response => console.log(response.data))
    
    // }, [])
    
    const renderShows = () => {
      return shows.map((show, index) => {
        return (
          <li key={index}>{show.show.name}</li>
        )
      })
    }
    return (
    <ul className="tvshows">{renderShows()}</ul>
    )
}


Home.getInitialProps = async ({query}) => {

    const {country} = query || 'us';
    
    const response = await axios.get(`http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`)
    
    return {
        shows: response.data
    }
}


export default Home;