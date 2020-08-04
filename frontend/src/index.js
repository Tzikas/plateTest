import React, {  Context, useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import AuthProvider from './context'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(        <BrowserRouter>
                                <App />
                        </BrowserRouter>, document.getElementById('root'));


serviceWorker.unregister();
