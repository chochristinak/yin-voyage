import { useState } from "react";
import Catalog from "../../components/Catalog/Catalog";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";
import * as retreatsAPI from "../../utilities/retreats-api";
import CatalogModal from "../../components/CatalogModal/CatalogModal";

export const catalogs = [
  {
    name: "LUXURY",
    retreatType: "RESORT AND SPA YOGA RETREATS",
    posterPath:
      "https://images.unsplash.com/photo-1444312645910-ffa973656eba?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHlpbiUyMHlvZ2F8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "EMPOWERMENT",
    retreatType: "INTENSIVE YOGA RETREATS",
    posterPath:
      "https://images.unsplash.com/photo-1574406280735-351fc1a7c5e0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGludGVuc2UlMjB5b2dhfGVufDB8fDB8fHww",
  },
  {
    name: "EDGE",
    retreatType: "YOGA IMMERSION RETREATS",
    posterPath:
      "https://images.unsplash.com/photo-1567345911782-c2b16ed5f50d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "STOKE",
    retreatType: "YOGA ADVENTURE RETREATS",
    posterPath:
      "https://plus.unsplash.com/premium_photo-1664442991387-52d844d479e8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "INNER PEACE",
    retreatType: "DETOX YOGA RETREATS",
    posterPath:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "TIDE & FLOW",
    retreatType: "YOGA & SURF RETREATS",
    posterPath:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "LEVEL UP",
    retreatType: "ADVANCED TRAINING & CERTIFICATION",
    posterPath:
      "https://plus.unsplash.com/premium_photo-1669446008661-6729d2e91b00?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// const navigate = useNavigate(); / to navigate to catalogid/retreats

/*--- Event Handlers ---*/
//   async function showRetreatsList() {
//     await retreatsAPI.showRetreats();
//     navigate('/retreats/:catalogName');
//   }

export default function HomePage() {
  const [selectedCatalog, setSelectedCatalog] = useState([]);
  const handleCatalogClick = (catalog) => {
    setSelectedCatalog(catalog);
  };

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
