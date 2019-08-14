import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux Imports 
import { createStore } from 'redux';
import { carReducer } from "./reducer/Reducer.js"; 
import { Provider } from "react-redux"; 
// Redux Imports

import 'bulma/css/bulma.css';
import './styles.scss';

// Redux
export const store = createStore(carReducer); 
// Redux

const rootElement = document.getElementById('root');

// wrap provider around <App /> like I would wrap Router around <App /> 

ReactDOM.render(
    <Provider> 
<App />
    </Provider> 
, rootElement);
