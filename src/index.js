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

// Seting up Store
export const store = createStore(carReducer); 


const rootElement = document.getElementById('root');

// Setting up provider and wraping it around <App /> 

ReactDOM.render(
    <Provider store={store}> 
<App />
    </Provider> 
, rootElement);
