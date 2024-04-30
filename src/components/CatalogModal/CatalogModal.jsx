import './CatalogModal.css'


export default function CatalogModal({ catalog, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>

        <p>{catalog.retreatType}</p>
      </div>
    </div>
  );
}

