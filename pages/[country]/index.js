import axios from 'axios';
import Link from 'next/Link';
import Thumbnail from '../../components/Thumbnail';

const Home = ({shows, country}) => {
    
    const renderShows = () => {
      return shows.map((showItem,index) => {
          const {show} = showItem
        return (

            <li key={index}>
                {/* {console.log(show.image)} */}
                {/* {console.log(show.image.medium)} */}
                <Thumbnail imageUrl={(show.image && show.image.medium) || undefined} 
                caption={show.name}
                href="/[country]/[showId]"
                as={`/${country}/${show.id}`} />
                {/* Once I include the above line I get the error */}
            </li>
        );
      });
    };

    return (
    <ul className="tvshows-grid">
        {renderShows()}
        
        <style jsx>{`
					.tvshows-grid {
						display: grid;
						grid-template-columns: 1fr 1fr;
						gap: 10px;
					}
				`}</style>
        
        </ul>
    )
}


Home.getInitialProps = async (context) => {

    const country = context.query.country || 'us';
    
    const response = await axios.get(`http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`)
    
    return {
        shows: response.data,
        country
    }
}


export default Home;


