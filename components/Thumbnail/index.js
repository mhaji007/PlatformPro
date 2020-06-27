import Link from 'next/link';
import ThumbnailStyles from './styles';

const Thumbnail = ({imageUrl = 'http://via.placeholder.com/210x295?text=?', 
caption,
href='',
as='',
small = false}) => {
    return (
        <div className="thumbnail"> 
            <Link href= {href} as={as}>
            <a>
            <img src={imageUrl} className="thumbnail__image"/>
            <div className="thumbnail__caption">{caption}</div>
            </a>
            </Link>

        <style jsx>
            {`.thumbnail__image {
                width: ${small?'100px':'100%'};
                margin-right:10px
            }
            .thumbnail__caption {
                text-align:center;
                padding: 10px;
                }

            `}
       </style>
        </div>

    );
};

export default Thumbnail;