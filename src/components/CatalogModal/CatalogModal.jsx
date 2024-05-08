import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CatalogModal.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div>
      <div className="description-box">{catalog && catalog.description}</div>
      <div className="card-container">
        {showRetreats &&
          retreats.map((retreat, index) => (
            <Card key={index} style={{ width: "18rem", marginBottom: "20px" }}>
              <Card.Img variant="top" src={retreat.posterPath} />
              <Card.Body>
                <Card.Title>{retreat.title}</Card.Title>
                <Link to={`/retreats/${retreat._id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
}
