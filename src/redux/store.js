import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from './reducer';
// import contactReducer from './toolkit/reducer';

const store = createStore(reducer, composeWithDevTools());

export default store;

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const store = createStore(
//     reducer,
//     composeWithDevTools(
//       applyMiddleware(...middleware)
//       // other store enhancers if any
//     )
//   );
