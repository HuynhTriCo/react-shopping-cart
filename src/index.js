import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import './materialize.min.css'
import cartReducer from './component/reducers/cardReducers'
import { Provider } from 'react-redux';
import { createStore } from 'redux';



const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
