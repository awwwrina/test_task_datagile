import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.querySelector('.app'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
