import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as retreatsAPI from "../../utilities/retreats-api";

export default function RetreatListItem({ retreat }) {
  const [liked, setLiked] = useState(false);
  
  // Upcoming feature: user wishlist 
  // const handleLike = async () => {
  //   setLiked(!liked);
  //   try {
  //     await addToWishList(userId, retreat._id);
  //   } catch (error) {
  //     console.error("Error adding to wishlist:", error);
  //   }
  // };

  return (
    <Card className="RetreatsItem-wrapper m-5">
      <Row className="row g-0">
        <Col xs={4} style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src={retreat.posterPath}
            alt="Retreat"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col xs={8}>
          <Card.Body>
            <Card.Title>{retreat.title}</Card.Title>
            <Card.Text>Location: {retreat.location}</Card.Text>
            <Card.Text>
              Start Date: {new Date(retreat.startDate).toLocaleDateString()}
            </Card.Text>
            <Card.Text>Price: ${retreat.price}</Card.Text>
            <div className="average-rating">
              <i className="bi bi-heart-fill"></i> {retreat.averageRating}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
              style={{
                cursor: "pointer",
                position: "absolute",
                top: 0,
                right: 0,
              }}
            >
              <path
                d={
                  liked
                    ? "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.090.083.176.171a3 3 0 0 1 .176-.17C12.720-3.042 23.333 4.867 8 15"
                    : "M2.5 2.5a2.5 2.5 0 0 1 4 0L8 3.5l1.5-1.5a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 1 0 4L8 11 .5 6.5a2.5 2.5 0 0 1 0-4z"
                }
              />
            </svg>
            <Link to={`/retreats/${retreat._id}`}>
              <Button variant="primary">View Details</Button>
            </Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
