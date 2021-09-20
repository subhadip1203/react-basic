import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { loadState, saveState } from './localStorage';

const persistentState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  persistentState,
  composeEnhancers(applyMiddleware(thunk))
);

// store.subscribe(() => {
//   saveState(store.getState());
// });

// saving data in local storage after 5 second
setInterval(() => {
  saveState(store.getState());
}, 5000);

export default store;
