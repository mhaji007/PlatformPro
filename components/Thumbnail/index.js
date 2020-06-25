import Link from 'next/link';
import ThumbnailStyles from './styles';

const Thumbnail = ({imageUrl = 'http://via.placeholder.com/210x295?text=?', caption}) => {
    return (
        <div className="thumbnail"> 
            <Link href="/[country]/[showId]" as="/us/5617">
            <a>
            <img src={imageUrl} className="thumbnail__image"/>
            <div className="thumbnail__caption">{caption}</div>
            </a>
            </Link>

        <style jsx>
            {ThumbnailStyles}
       </style>
        </div>

    );
};

export default Thumbnail;