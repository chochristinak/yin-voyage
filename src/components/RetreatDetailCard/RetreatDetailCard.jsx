import './RetreatDetailCard.css'

export default function RetreatDetailCard({retreat}) {

  const randomImageNumber = Math.floor(Math.random() * 1000);
  return (
    <div className="RetreatDetail-wrapper" style={{
      backgroundImage: `url(https://picsum.photos/seed/${randomImageNumber}/400/?)`,
    }}>
      <div className="Retreatdetail-content">
        <h2>{retreat.title}</h2>
        <p>Description: {retreat.description}</p>
        <p>Location: {retreat.location}</p>
        <p>Start Date: {retreat.startDate}</p>
        <p>End Date: {retreat.endDate}</p>
        <p>Price: ${retreat.price}</p>
        <p>Available Spots: {retreat.availableSpots}</p>
      </div>
    </div>
  );
}
