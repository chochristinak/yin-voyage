import "./Catalog.css";

export default function Catalog({ catalog }) {
  return (
    <div
      className="catalog-card"
      style={{ backgroundImage: `url(${catalog.posterPath})` }}
    >
      <div className="catalog-card-content">
        <p>{catalog.name}</p>
      </div>
    </div>
  );
}
