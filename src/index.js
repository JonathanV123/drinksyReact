import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import { restaurantData, restaurantDataFetch } from './reducers/restaurantReducers';
import { userIsLoggedIn, tokenRetrieved } from './reducers/jwtReducers';
import registerServiceWorker from './registerServiceWorker';

// const logger = createLogger();
const rootReducer = combineReducers({
    userIsLoggedIn,
    tokenRetrieved,
    restaurantData,
    restaurantDataFetch,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware),
);
console.log(store);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
