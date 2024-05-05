export default function ReviewCard({ review, onEdit, onDelete, index }) {
  return (
    <div className="review-card">
      <div className="review">
        <h3>{review.userName}</h3>
        <p>{review.content}</p>
        <p>Rating: {"⭐".repeat(review.rating)}</p>
        <button onClick={() => onEdit(index)}>Edit</button>
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    </div>
  );
}
