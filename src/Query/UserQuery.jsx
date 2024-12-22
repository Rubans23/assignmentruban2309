import React from 'react';
import { useSelector } from 'react-redux';
import QueryForm from './QueryForm';
import CommentsSection from './CommentsSection'; // Ensure correct path to CommentsSection
import './Query.css';

const UserQuery = () => {
  const accessLevel = useSelector((state) => state.access.privilege); // Get the current access level
  const queries = useSelector((state) => state.queries.queries || []); // Get queries from state, default to an empty array
  return (
    <div className="user-query">
        <QueryForm />
      {accessLevel ? (
        queries.length > 0 ? (
          // Display a list of queries if available
          queries.map((query) => (
            <div key={query.id} className="query-item">
              <h4 className="query-message">{query.message}</h4>
              <CommentsSection query={query} />
            </div>
          ))
        ) : (
          // Show a message if no queries available
          <p>No queries available</p>
        )
      ) : (
        <p></p>
        
      ) }
    </div>
  );
};

export default UserQuery;
