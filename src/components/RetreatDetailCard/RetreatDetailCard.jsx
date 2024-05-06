import './RetreatDetailCard.css'

export default function RetreatDetailCard({retreat}) {
  const randomImageNumber = Math.floor(Math.random() * 1000);
  return (
    <div className="RetreatsItem-wrapper">
      <img src={`https://picsum.photos/seed/${randomImageNumber}/400/?`} alt="Retreat" className="Retreat-card-image"/>
      <div className="Retreat-card-content">
        <div className="Retreat-card-overview">
          <h2>{retreat.title}</h2>
          <p>Description: {retreat.description}</p>
        </div>
        <div className="Retreat-card-details">
          <p>Location: {retreat.location}</p>
          <p>Start Date: {retreat.startDate}</p>
          <p>End Date: {retreat.endDate}</p>
          <p>Price: ${retreat.price}</p>
          <p>Available Spots: {retreat.availableSpots}</p>
        </div>
      </div>
    </div>
  );
}
