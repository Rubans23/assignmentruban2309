import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import cardsReducer from './cardsReducer';
import authReducer from './authReducer';
import accessReducer from './accessReducer';
import currentUserReducer from './currentUserReducer';
import queryReducer from './queryReducer'; // Ensure correct import

const rootReducer = combineReducers({
  cards: cardsReducer,
  haveaccount: authReducer,
  access: accessReducer,
  currentUser: currentUserReducer,
  queries: queryReducer, // Add queryReducer to the combined reducers
});
//new comment
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor }; // Export store and persistor as named exports
