import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './utils/serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'



ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </Provider >,
    document.getElementById('root'));
serviceWorker.unregister();