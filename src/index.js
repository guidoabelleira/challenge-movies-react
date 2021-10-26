import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import store from './store/index';
import App from './App';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
require('dotenv').config()

axios.defaults.baseURL = process.env.REACT_APP_API || "https://api.themoviedb.org";

ReactDOM.render(
    <Provider store={store}>
        {/* <BrowserRouter> */}
            <App />
        {/* </BrowserRouter> */}
    </Provider>,
  document.getElementById('root')
);

