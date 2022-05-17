import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {store} from "./reducers";
import './index.css';
import App from './componets/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
