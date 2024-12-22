import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuery } from '../Store/queryReducer'; // Action to add a query
import './Query.css';

const QueryForm = () => {
  const [message, setMessage] = useState(''); // State to manage message input
  const [submit, setSubmit] = useState(false); // State to manage form submission trigger
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUser); // Get the current user from the state

  useEffect(() => {
    // Triggered when submit state or message changes
    if (submit && message) {
      const newQuery = {
        id: Date.now(), // Use Date.now() for a unique ID
        userEmail: user.email, // Set the user's email in the new query
        message, // Message from the input field
        comments: [], // Initialize with empty comments array
      };

      dispatch(addQuery(newQuery)); // Dispatch the action to add the new query
      setMessage(''); // Clear the message input after submission
      setSubmit(false); // Reset submit 
    }
  }, [submit, message, user.email, dispatch]); // Dependency array

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true); // Set submit to true to trigger useEffect
  };

  return (
    <form onSubmit={handleSubmit} className="query-form">
      <label htmlFor="message" className="query-label">
        Your Message:
      </label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)} // Update message state on change
        required
        className="query-textarea"
      />
      <button type="submit" className="query-button">
        Submit
      </button>
    </form>
  );
};

export default QueryForm;
