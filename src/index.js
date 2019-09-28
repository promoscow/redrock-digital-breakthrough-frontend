import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {ContextProvider} from "./components/context/context";

import App from './components/app';
import store from './store';

import './index.css';
import RestService from "./service/rest-service";

const authService = new RestService();

ReactDOM.render(
    <Provider store={store}>
        <ContextProvider value={authService}>
                <Router>
                    <App/>
                </Router>
        </ContextProvider>
    </Provider>,
    document.getElementById('root')
);
