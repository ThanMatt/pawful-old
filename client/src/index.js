import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import authReducer from './store/reducers/auth';
import userReducer from './store/reducers/user';
import postReducer from './store/reducers/post';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

