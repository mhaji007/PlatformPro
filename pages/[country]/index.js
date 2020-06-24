import axios from 'axios';
import Thumbnail from '../../components/Thumbnail';

const Home = ({shows}) => {
    
    const renderShows = () => {
      return shows.map((showItem,index) => {
          const {show} = showItem
        return (

            <li key={index}>
                {/* {console.log(show.image)} */}
                {/* {console.log(show.image.medium)} */}
                <Thumbnail imageUrl={(show.image && show.image.medium) || undefined} caption={show.name} />
                {/* Once I include the above line I get the error */}
            </li>
        );
      });
    };

    return (
    <ul className="tvshows">{renderShows()}</ul>
    )
}


Home.getInitialProps = async (context) => {

    const country = context.query.country || 'us';
    
    const response = await axios.get(`http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`)
    
    return {
        shows: response.data
    }
}


export default Home;


