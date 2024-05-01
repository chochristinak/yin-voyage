import { useState, useEffect } from 'react';
import './CatalogModal.css'
import * as retreatsAPI from '../../utilities/retreats-api'
import { useParams } from 'react-router-dom';

export default function CatalogModal({ catalog, onClose }) {
  const [retreats, setRetreats] = useState([]);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>×</span>
        <p>{catalog.retreatType}</p>
        {retreats.map((retreat, index) => (
          <div key={index}>
        
            <p>{retreat.name}</p> // replace 'name' with actual property name
          </div>
        ))}
      </div>
    </div>
  );
}
