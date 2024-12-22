const initialState = {
    currentUser: null,
  };
  
  const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {
          ...state,
          currentUser: action.payload,
        };
      case 'CLEAR_CURRENT_USER':
        return {
          ...state,
          currentUser: null,
        };
      default:
        return state;
    }
  };
  //new comment
  export const setCurrentUser = (user) => ({
    type: 'SET_CURRENT_USER',
    payload: user,
  });
  
  export const clearCurrentUser = () => ({
    type: 'CLEAR_CURRENT_USER',
  });
  
  export default currentUserReducer;
  