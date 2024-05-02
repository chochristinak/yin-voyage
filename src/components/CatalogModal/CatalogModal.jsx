
import './CatalogModal.css'
import {useState, useEffect} from 'react'


export default function CatalogModal({ catalog, onClose }) {

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
