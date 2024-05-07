import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Catalog.css';

export default function Catalog({ catalog }) {
  return (
    <div className="catalog-container">
      <Row>
        <Col sm={10} md={6} lg={4}>
          <div
            className="catalog-card"
            style={{ backgroundImage: `url(${catalog.posterPath})` }}
          >
            <div className="catalog-card-content">
              <p>{catalog.name}</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

