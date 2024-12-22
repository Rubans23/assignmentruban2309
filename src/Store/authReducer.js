const initialState = {
    haveaccount: false,
  };
  //new comment
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_AUTH':
        return {
          ...state,
          haveaccount: !state.haveaccount,
        };
      case 'SET_TRUE':
        return {
          ...state,
          haveaccount: true,
        };
      case 'SET_FALSE':
        return {
          ...state,
          haveaccount: false,
        };
      default:
        return state;
    }
  };
  
  export const toggleAuth = () => ({
    type: 'TOGGLE_AUTH',
  });
  
  export const setTrue = () => ({
    type: 'SET_TRUE',
  });
  
  export const setFalse = () => ({
    type: 'SET_FALSE',
  });
  
  export default authReducer;
  