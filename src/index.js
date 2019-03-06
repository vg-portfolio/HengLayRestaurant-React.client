import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { autoRehydrate, persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers/rootReducer";

import './index.css';
import App from './App';
import Navigation from './Components/Navigation';


import * as serviceWorker from './serviceWorker';

export const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [
    "categories",
    "dishes"
  ]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const persistedStore = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <Router>
        <div>
          <Navigation />
          <App />
        </div>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
