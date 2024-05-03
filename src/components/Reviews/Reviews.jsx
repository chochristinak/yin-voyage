import { useState } from "react";
import * as retreatsAPI from "../../utilities/retreats-api";
import './Reviews.css'

export default function Reviews(){
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);

      /*--- Event Handlers ---*/
    async function handleReviewSubmission(event) {
        event.preventDefault();
        const newReview = {
          retreatId: retreat._id,
          text: reviewText,
          rating: rating, // Include the rating in the review data
        };
        const response = await retreatsAPI.create(newReview);
        setReviewText('');
        setRating(0); 
      }
    return (
        <div className="reviews">
          <h3>Reviews</h3>
          {/* Display existing reviews here */}
          <form className="review-input" onSubmit={handleReviewSubmission}>
            <h4>Leave a Review</h4>
            <textarea 
              placeholder="Write your review here..."
              value={reviewText}
              onChange={e => setReviewText(e.target.value)}
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
    )
}