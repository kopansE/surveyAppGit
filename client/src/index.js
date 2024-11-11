import materializeCSS from 'materialize-css/dist/css/materialize.min.css'; // no need for relative path -> if it doesnt have a relative path prefix the compiler searches in node_module 
import React from 'react';
import ReactDOM from "react-dom/client";
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk as reduxThunk } from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const el = document.getElementById("root");
 
// Tell React to take control of that element
const root = ReactDOM.createRoot(el);
 
// Show the component on the screen
root.render(
    <Provider store ={store}> 
        <App /> 
    </Provider>
);