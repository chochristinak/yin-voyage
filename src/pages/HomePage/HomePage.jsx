import { useState, useEffect } from "react";
import Catalog from "../../components/Catalog/Catalog";
import "./HomePage.css";
import CatalogModal from "../../components/CatalogModal/CatalogModal";
import * as catalogsAPI from '../../utilities/catalogs-api';
import TopHeader from "../../components/TopHeader/TopHeaader";


export default function HomePage() {
  const [catalogs, setCatalogs] = useState([])
  const [selectedCatalog, setSelectedCatalog] = useState([]);
  const handleCatalogClick = (catalog) => {
    setSelectedCatalog(catalog);
  };
  // Function to close modal
  const handleCloseModal = () => {
    setSelectedCatalog(null);
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

  
  return (
    <>
    <main className="HomePage">
     <TopHeader />
     <h2>CATALOGS</h2>
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
