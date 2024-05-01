
import './CatalogModal.css'


export default function CatalogModal({ catalog, onClose }) {

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>×</span>
        <p>{catalog.retreatType}</p>
        {/* {retreats.map((retreat, index) => (
          <div key={index}>
        
            <p>{retreat.title}</p> 
          </div>
        ))} */}
      </div>
    </div>
  );
}
