import React from 'react'
import ReactDOM from 'react-dom/client';
import Primeiro from './components/Primeiro';
import BomDia from './components/BomDia';
import Multiplos from './components/Multiplos';
import Saudacao from './components/Saudacao';

const elemento = <h1>Olá React!</h1>
const componente = <BomDia nome='Israel' idade={10} />
const multiplos = <Multiplos.BoaTarde nome='Israel'/>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Saudacao tipo={'teste1'} nome={'teste2'}/>);
