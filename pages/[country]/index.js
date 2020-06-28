import axios from 'axios';
import Thumbnail from '../../components/Thumbnail';
import Error from 'next/error';
import cookies from 'nookies';




const Home = ({shows, country, statusCode}) => {
    

    if(statusCode) {
        return <Error statusCode={statusCode} />
    }
    const renderShows = () => {
      return shows.map((showItem,index) => {
          const {show} = showItem
        return (

            <li className="tvshows-image" key={index}>
                <Thumbnail className="image" imageUrl={(show.image && show.image.medium) || undefined} 
                caption={show.name}
                href="/[country]/[showId]"
                as={`/${country}/${show.id}`} />
  

                        
        {/* <style jsx>{`
					.tvshows-image {
                        grid-column: span 2;
                    }
                    .tvshows-image:nth-last-child(1):nth-child(odd) {
                        grid-column: 2 / span 2;
                    }
				`}</style> */}
            </li>
        );
      });
    };

    return (
<div className="home">
    <ul className="tvshows-grid">
        {renderShows()}
        
        <style jsx>{`
					.tvshows-grid {
						display: grid;
						grid-template-columns: repeat(2, 1fr);
                        gap: 10px;

					}
				`}</style>
        
        </ul>
    </div>
    )
}


Home.getInitialProps = async (context) => {
try {

    const {defaultCountry} = cookies.get(context);
    
    const country = context.query.country || defaultCountry || 'us';

    //const country = context.query.country || 'us';
    
    const response = await axios.get(`https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`)
    
    return {
        shows: response.data,
        country
    };

} catch (error) {
    return {
        statusCode: error.response ? error.response.status : 500
    }
}
}


export default Home;


