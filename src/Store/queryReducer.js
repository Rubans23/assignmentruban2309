const initialState = {
    queries: []  // Ensure queries is initialized as an array
  };
  
  const queryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_QUERY':
        return {
          ...state,
          queries: [...state.queries, action.payload]
        };
      case 'ADD_COMMENT':
        return {
          ...state,
          queries: state.queries.map(query =>
            query.id === action.payload.id
              ? { ...query, comments: [...query.comments, action.payload.comment] }
              : query
          )
        };
      default:
        return state;
    }
  };
  //new comment
  export const addQuery = (query) => ({
    type: 'ADD_QUERY',
    payload: query
  });
  
  export const addComment = (id, comment) => ({
    type: 'ADD_COMMENT',
    payload: { id, comment }
  });
  
  export default queryReducer;
  
  