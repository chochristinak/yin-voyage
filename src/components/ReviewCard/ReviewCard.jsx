import {useState} from 'react';

export default function ReviewCard({ review, onEdit, onDelete, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(review.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onEdit(index, editText);
  };
  

  return (
    <div className="review-card">
      <div className="review">
        <h3>{review.user.name}</h3>
        {isEditing ? (
          <input
            name="content"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <p>{review.content}</p>
        )}
        <p>Rating: {"⭐".repeat(review.rating)}</p>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    </div>
  );
}
