import React, { useState, useEffect } from 'react';
import './CatalogModal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as catalogsAPI from '../../utilities/catalogs-api';

export default function CatalogModal({ catalog, retreats, onClose }) {
  const [showRetreats, setShowRetreats] = useState(false);

  useEffect(() => {
    if (!showRetreats && catalog) {
      setShowRetreats(true); 
    }
  }, [catalog, showRetreats]);

  const closeModal = () => {
    setShowRetreats(false);
    onClose();
  };

  return (
    <div className="modal-dialog modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{catalog && catalog.retreatType}</h5>
          <button type="button" className="close" onClick={closeModal}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          {catalog && catalog.description}
          {showRetreats &&
            retreats.map((retreat, index) => (
              <div key={index}>
                <p>{retreat.title}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
