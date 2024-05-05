import { useState, useEffect } from "react";
import * as retreatsAPI from "../../utilities/retreats-api";
import "./Reviews.css";
import ReviewCard from "../ReviewCard/ReviewCard";

export default function Reviews({retreat}) {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  useEffect(function() {
    async function getReviews() {
      const reviews = await retreatsAPI.getAllReviews();
      setReviews(reviews)
      console.log(reviews)
    } 
    getReviews();
  },[])

 
  /*--- Event Handlers ---*/
  async function handleReviewSubmission(event) {
    event.preventDefault();
    const newReview = {
      text: reviewText,
      rating: rating,
    };
    const response = await retreatsAPI.create(retreat._id , newReview);
    setReviewText("");
    setRating(0);
    setReviews([...reviews, response]);
    console.log(newReview)
  }

  async function handleEditReview(index) {
    const reviewToEdit = reviews[index];
    const editedReview = await retreatsAPI.updateReview(
      retreat._id,
      reviewToEdit._id,
      { content: reviewToEdit.text, rating: reviewToEdit.rating }
    );
    const updatedReviews = reviews.map((review, i) => {
      if (i === index) {
        return editedReview;
      }
      return review;
    });
    setReviews(updatedReviews);
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
            onEdit={() => handleEditReview(index)} 
            onDelete={() => handleDeleteReview(index)} 
          />
        ))}
      <form className="review-input" onSubmit={handleReviewSubmission}>
        <h4>Leave a Review</h4>
        <textarea
          placeholder="Tell Us About Your Experience"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
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
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}
