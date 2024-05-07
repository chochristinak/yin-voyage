import "./RetreatDetailCard.css";

export default function RetreatDetailCard({ retreat }) {
  return (
    <div className="RetreatsItem-wrapper">
      <img
        src={retreat.posterPath}
        alt="Retreat"
        className="Retreat-card-image"
      />
      <div className="Retreat-card-content">
        <div className="Retreat-card-overview">
          <h2>{retreat.title}</h2>
          <p>Description: {retreat.description}</p>
        </div>
        <div className="Retreat-card-details">
          <p>Location: {retreat.location}</p>
          <p>Start Date: {new Date(retreat.startDate).toLocaleDateString()}</p>
          <p>End Date: {new Date(retreat.endDate).toLocaleDateString()}</p>

          <p>Price: ${retreat.price}</p>
          <p>Available Spots: {retreat.availableSpots}</p>
        </div>
      </div>
    </div>
  );
}
