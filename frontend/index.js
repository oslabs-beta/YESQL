import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles/index.scss';
import { store } from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);


