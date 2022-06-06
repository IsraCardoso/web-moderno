import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './essentials/reportWebVitals';
import Calculator from './main/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Calculator />
  </>
);


reportWebVitals();
