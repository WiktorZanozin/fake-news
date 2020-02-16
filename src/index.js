import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import ErrorBoundry from './components/error-boundry'
import Navbar from './components/Navbar';

const app=(
    <Provider store={store}>
     <ErrorBoundry>
       <BrowserRouter>
        <Navbar/>
         <App/>
       </BrowserRouter>
      </ErrorBoundry>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
