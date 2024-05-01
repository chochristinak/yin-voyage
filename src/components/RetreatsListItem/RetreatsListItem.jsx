import "./RetreatListItem.css";

export default function RetreatListItem({retreat, handleBooking}) {
  return (
    <>
      <div
        className="retreat-card"
        style={{ backgroundImage: `url(${catalog.posterPath})` }}
      >
        <div className="retreat-card-content">
          <h3>{retreat.title}</h3>
          <h4>{retreat.location}</h4>
          <p>{retreat.startDate}</p>
        </div>
      </div>
    </>
  );
}
