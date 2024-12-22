// accessReducer.js

const initialState = {
  privilege: '', // Default privilege is an empty string
};
//new comment
const accessReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PUBLIC':
      sessionStorage.setItem('privilege', 'public');
      return {
        ...state,
        privilege: 'public',
      };
    case 'SET_ADMIN':
      sessionStorage.setItem('privilege', 'admin');
      return {
        ...state,
        privilege: 'admin',
      };
    case 'SET_PRIVILEGE':
      sessionStorage.setItem('privilege', action.payload);
      return {
        ...state,
        privilege: action.payload,
      };
    default:
      return state;
  }
};

// Action creators
export const setPublic = () => ({
  type: 'SET_PUBLIC',
});

export const setAdmin = () => ({
  type: 'SET_ADMIN',
});

export const setPrivilege = (privilege) => ({
  type: 'SET_PRIVILEGE',
  payload: privilege,
});

export default accessReducer;
