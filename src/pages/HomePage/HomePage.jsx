import { useState, useEffect } from "react";
import Catalog from "../../components/Catalog/Catalog";
import "./HomePage.css";
import CatalogModal from "../../components/CatalogModal/CatalogModal";
import * as catalogsAPI from '../../utilities/catalogs-api';


export default function HomePage() {
  const [catalogs, setCatalogs] = useState(true)
  const [selectedCatalog, setSelectedCatalog] = useState([]);
  const handleCatalogClick = (catalog) => {
    setSelectedCatalog(catalog);
  };

  useEffect(function() {
    async function getCatalogs() {
      const catalogs = await catalogsAPI.getAll();
      console.log(catalogs)
      setCatalogs(catalogs)
    } 
    getCatalogs();
  },[])
  console.log(catalogs)

  // Function to close modal
  const handleCloseModal = () => {
    setSelectedCatalog(null);
  };

  return (
    <>
      <h2>CATALOG</h2>
      <main className="HomePage">
        {catalogs.map((catalog, index) => (
          <div
            key={index}
            onClick={() => handleCatalogClick(catalog)}
            className="catalog-container"
          >
            <Catalog catalog={catalog} />
          </div>
        ))}
        {selectedCatalog && (
          <CatalogModal 
            catalog={selectedCatalog} 
            onClose={handleCloseModal} />
        )}
      </main>
    </>
  );
}
