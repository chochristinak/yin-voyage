import './Catalog.css'


export default function Catalog({catalog}){
    return (
        <div className="catalog-card" style={{ backgroundImage: `url(${catalog.posterPath})` }}>
      <div className="catalog-card-content">
        <h2>{catalog.title}</h2>
        <p>{catalog.retreatType}</p>
      </div>
    </div>

    )
}