import React from 'react';
import {createRoot} from "react-dom/client";
import './index.css';
//import App from './App';
//import App from './Test';
//import App from './Test1'
//import App from './Test2';
//import App from './Test4';
//import App from './Test5';


//import App from './FormData';

import App from './Expressfileupload1';

import {Provider} from 'react-redux';
import store from './store'

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);
root.render(<Provider store={store}><App /></Provider>)




