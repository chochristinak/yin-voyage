import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

export default function ReviewCard({ review, onEdit, onDelete, index, user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(review.content);
  const [rating, setRating] = useState(review.rating);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onEdit(index, editText, rating);
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title>Review by: </Card.Title>
          <div>
            <p className="card-text">Rating: {"⭐".repeat(review.rating)}</p>
          </div>
        </div>
        {isEditing ? (
          <>
            <Form.Control
              name="content"
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="mb-2"
            />
            <Form.Control
              name="rating"
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="mb-2"
            />
          </>
        ) : (
          <Card.Text>{review.content}</Card.Text>
        )}
        {isEditing ? (
          <div className="btn-group">
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
            <Button variant="secondary" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </div>
        ) : (
          <div className="btn-group">
            <Button variant="info" onClick={handleEdit}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => onDelete(index)}>
              Delete
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
