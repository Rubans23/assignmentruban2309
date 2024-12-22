const initialState = {
  cards: [
    { id: 1, name: "ruban", access: "admin", email: 'admin123@gmail.com', gender: "male", mobile: 1234567890, location: "chennai", bankno: 1234567890123456, password: "admin" },
    { id: 2, name: "Alice", access: "admin", email: 'alice@example.com', gender: "female", mobile: 9876543210, location: "Delhi", bankno: 1234567890123451, password: "password1" },
    { id: 3, name: "Bob", access: "public", email: 'bob@example.com', gender: "male", mobile: 9876543211, location: "Mumbai", bankno: 1234567890123452, password: "password2" },
    { id: 4, name: "Charlie", access: "admin", email: 'charlie@example.com', gender: "male", mobile: 9876543212, location: "Chennai", bankno: 1234567890123453, password: "password3" },
    { id: 5, name: "David", access: "public", email: 'david@example.com', gender: "male", mobile: 9876543213, location: "Kolkata", bankno: 1234567890123454, password: "password4" },
    { id: 6, name: "Eva", access: "admin", email: 'eva@example.com', gender: "female", mobile: 9876543214, location: "Bangalore", bankno: 1234567890123455, password: "password5" },
    { id: 7, name: "Frank", access: "public", email: 'frank@example.com', gender: "male", mobile: 9876543215, location: "Hyderabad", bankno: 1234567890123456, password: "password6" },
    { id: 8, name: "Grace", access: "admin", email: 'grace@example.com', gender: "female", mobile: 9876543216, location: "Pune", bankno: 1234567890123457, password: "password7" },
    { id: 9, name: "Hank", access: "public", email: 'hank@example.com', gender: "male", mobile: 9876543217, location: "Ahmedabad", bankno: 1234567890123458, password: "password8" },
    { id: 10, name: "Ivy", access: "admin", email: 'ivy@example.com', gender: "female", mobile: 9876543218, location: "Jaipur", bankno: 1234567890123459, password: "password9" },
    { id: 11, name: "Jack", access: "public", email: 'jack@example.com', gender: "male", mobile: 9876543219, location: "Surat", bankno: 1234567890123460, password: "password10" },
    { id: 12, name: "licy", access: "admin", email: 'rubans23094@gmail.com', gender: "female", mobile: 1234567890, location: "chennai", bankno: 1234567890123456, password: 12345678 },
    { id: 13, name: "ruban", access: "public", email: 'rubans23095@gmail.com', gender: "male", mobile: 1234567890, location: "chennai", bankno: 1234567890123456, password: 12345678 },
  ],
};
//new comment
const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CARD':
      const { email, name, gender, mobile, location, bankno, password, access } = action.payload;
      return {
        ...state,
        cards: state.cards.map(card => card.email === email ? { ...card, email, name, gender, mobile, location, bankno, password, access } : card),
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    default:
      return state;
  }
};

export const updateCard = (card) => ({
  type: 'UPDATE_CARD',
  payload: card,
});

export const addCard = (newCard) => ({
  type: 'ADD_CARD',
  payload: newCard,
});

export default cardsReducer;
