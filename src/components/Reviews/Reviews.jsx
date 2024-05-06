import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap"; // Import React Bootstrap components
import * as retreatsAPI from "../../utilities/retreats-api";
import "./Reviews.css";
import ReviewCard from "../ReviewCard/ReviewCard";

export default function Reviews({ retreat }) {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  async function getReviews() {
    const reviews = await retreatsAPI.getAllReviews();
    setReviews(reviews);
    console.log(reviews);
  }

  useEffect(function () {
    getReviews();
  }, []);

  async function handleReviewSubmission(event) {
    event.preventDefault();
    const newReview = {
      content: reviewText,
      rating: rating,
    };
    const response = await retreatsAPI.create(retreat._id, newReview);
    setReviewText("");
    setRating(0);
    setReviews([...reviews, response]);
    console.log(newReview);
  }

  async function handleEditReview(index, newText) {
    const reviewToEdit = reviews[index];
    reviewToEdit.content = newText;
    const editedReview = await retreatsAPI.updateReview(
      retreat._id,
      reviewToEdit._id,
      { content: reviewToEdit.content, rating: reviewToEdit.rating }
    );
    const updatedReviews = reviews.map((review, i) => {
      if (i === index) {
        return editedReview;
      }
      return review;
    });
    setReviews(updatedReviews);
    getReviews();
  }

  async function handleDeleteReview(index) {
    const reviewToDelete = reviews[index];
    await retreatsAPI.deleteReview(retreat._id, reviewToDelete._id);
    const updatedReviews = reviews.filter((review, i) => {
      return i !== index;
    });
    setReviews(updatedReviews);
  }

  return (
    <div className="reviews">
      <h3>Reviews</h3>
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          review={review}
          onEdit={handleEditReview}
          index={index}
          onDelete={() => handleDeleteReview(index)}
        />
      ))}

      <Form className="review-input" onSubmit={handleReviewSubmission}>
        <h4>Leave a Review</h4>
        <textarea
          name="content"
          placeholder="Tell Us About Your Experience"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <br />
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <span className="star">{ratingValue <= rating ? "⭐" : "☆"}</span>
            </label>
          );
        })}
        <br />
        <Button type="submit">Submit Review</Button> 
      </Form>
    </div>
  );
}
