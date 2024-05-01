import { Link } from 'react-router-dom';

export default function RetreatListItem({ retreat }) {
   const randomImageNumber = Math.floor(Math.random() * 1000);
   return (
        <div className="RetreatsItem-wrapper" style={{
         backgroundImage: `url(https://picsum.photos/id/${randomImageNumber}/400/?)`,
       }}>
         <div className="Retreat-card-content">
          <h2>{retreat.title}</h2>
          <p>Location: {retreat.location}</p>
          <p>Start Date: {retreat.startDate}</p>
          <Link to={`/retreats/${retreat.id}`}>View Details</Link>
        </div>
        </div>
    );
}