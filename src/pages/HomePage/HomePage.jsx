import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Catalog from "../../components/Catalog/Catalog";
import "./HomePage.css";
import CatalogModal from "../../components/CatalogModal/CatalogModal";
import * as catalogsAPI from '../../utilities/catalogs-api';
import TopHeader from "../../components/TopHeader/TopHeaader";

export default function HomePage() {
  const [catalogs, setCatalogs] = useState([]);
  const [selectedCatalog, setSelectedCatalog] = useState(null);
  const [selectedCatalogRetreats, setSelectedCatalogRetreats] = useState([]);

  useEffect(() => {
    async function getCatalogs() {
      const catalogs = await catalogsAPI.getAll();
      setCatalogs(catalogs);
    } 
    getCatalogs();
  }, []);

  // Function to handle catalog click
  const handleCatalogClick = async (catalog) => {
    setSelectedCatalog(catalog);
    const retreats = await catalogsAPI.getRetreatsByCatalog(catalog._id);
    setSelectedCatalogRetreats(retreats);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setSelectedCatalog(null);
    setSelectedCatalogRetreats([]);
  };

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
            retreats={selectedCatalogRetreats} 
            onClose={handleCloseModal} 
          />
        )}
      </main>
    </>
  );
}
