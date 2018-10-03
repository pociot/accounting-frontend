import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import user from './state/user';

const reducer = combineReducers({
  user,
});

export type TRootState = ReturnType<typeof reducer>;

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
