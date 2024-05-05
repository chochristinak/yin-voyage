import './CatalogModal.css'
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CatalogModal({ catalog, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  //  to later show retreats in this catalog // 
  // const [retreats, setRetreats] = useState([])
  // useEffect(function() {
  //   async function getRetreatsByCatalog() {
  //     const retreatsInCatalog = await retreatsAPI.getAll();
  //     setRetreatListItems(retreats)
  //   } 
  //   getRetreats();
  // },[])

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
          {/* {retreats.map((retreat, index) => (
            <div key={index}>
              <p>{retreat.title}</p> 
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
