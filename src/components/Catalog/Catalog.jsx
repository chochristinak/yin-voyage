import "./Catalog.css";

export default function Catalog({ catalog }) {
  return (
    <div className="catalog-container" style={{ width: "60vw" }}>
      <div className="row">
        <div className="col-sm-10 col-md-6 col-lg-4">
          <div
            className="catalog-card"
            style={{ backgroundImage: `url(${catalog.posterPath})` }}
          >
            <div className="catalog-card-content">
              <p>{catalog.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
