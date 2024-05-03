import { useState } from "react";
import * as retreatsAPI from "../../utilities/retreats-api";
import "./Reviews.css";

export default function Reviews({retreat}) {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  console.log(retreat)
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
        <div key={index}>
          <p>{review.text}</p>
          <button onClick={() => handleEditReview(index)}>Edit</button>
          <button onClick={() => handleDeleteReview(index)}>Delete</button>
        </div>
      ))}
      <form className="review-input" onSubmit={handleReviewSubmission}>
        <h4>Leave a Review</h4>
        <textarea
          placeholder="Write your review here..."
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
