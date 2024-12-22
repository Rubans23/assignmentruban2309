import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../Store/queryReducer'; // Ensure correct import
import "./Query.css";

const CommentsSection = ({ query }) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(query.id, comment));
    setComment('');
  };

  return (
    <div className="comments-section">
      <h3 className="comments-title">Comments</h3>
      {query.comments.map((cmt, index) => (
        <p key={index} className="comment">{cmt}</p>
      ))}
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <label htmlFor="comment" className="comment-label">Add Comment:</label>
        <input
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="comment-input"
        />
        <button type="submit" className="comment-button">Add</button>
      </form>
    </div>
  );
};



export default CommentsSection;
