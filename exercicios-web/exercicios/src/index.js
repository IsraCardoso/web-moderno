import React from 'react'
import ReactDOM from 'react-dom/client';
import Primeiro from './components/Primeiro';

const elemento = <h1>Olá React!</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Primeiro/>);
