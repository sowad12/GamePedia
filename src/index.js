import React from 'react';
import ReactDOM from 'react-dom/client';
import DataProvider from './components/Redux/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <DataProvider>
    <App />
    </DataProvider>  
    </BrowserRouter>
);


