import React from 'react';
import CreateRoot from 'react-dom/client';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';
import reducers from './reducers';




CreateRoot.createRoot(document.querySelector('#root')).render(
    <Provider>
        <App />
    </Provider>
);