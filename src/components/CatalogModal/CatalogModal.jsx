import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CatalogModal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as catalogsAPI from '../../utilities/catalogs-api';

export default function CatalogModal({ catalog, onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showRetreats, setShowRetreats] = useState(false);
  const [retreats, setRetreats] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (showRetreats) {
      async function getRetreatsInCatalog() {
        const retreats = await catalogsAPI.getRetreatsByCatalog(id);
        setRetreats(retreats);
        console.log(retreats);
      }
      getRetreatsInCatalog();
    }
  }, [showRetreats, id]);

  const openModal = () => {
    setIsOpen(true);
    setShowRetreats(true); 
  };

  const closeModal = () => {
    setIsOpen(false);
    setShowRetreats(false); 
    onClose();
  };

  return (
    <div className="modal-dialog modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{catalog.retreatType}</h5>
          <button type="button" className="close" onClick={closeModal}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          {catalog.description}
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
