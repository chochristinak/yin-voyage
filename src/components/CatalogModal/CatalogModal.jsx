import {useState, useEffect} from 'react'
import './CatalogModal.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as catalogsAPI from "../../utilities/catalogs-api";

  export default function CatalogModal({ catalog, onClose}) {
  const [isOpen, setIsOpen] = useState(false);
  const [retreats, setRetreats] = useState([])
  useEffect(function() {
    async function getRetreatsInCatalog() {
      const retreats = await catalogsAPI.getRetreatsByCatalog();
      setRetreats(retreats)
    } 
    getRetreatsInCatalog();
  },[])

  return (
    <div className="modal-dialog modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{catalog.retreatType}</h5>
          <button type="button" className="close" onClick={onClose}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          {catalog.description}
          {retreats.map((retreat, index) => (
            <div key={index}>
              <p>{retreat.title}</p> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
