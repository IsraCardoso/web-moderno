import React from 'react'
import ReactDOM from 'react-dom/client';
import Primeiro from './components/Primeiro';
import BomDia from './components/BomDia';
import Multiplos from './components/Multiplos';
import Saudacao from './components/Saudacao';
import Filho from './components/Filho';

const elemento = <h1>Olá React!</h1>
const componente = <BomDia nome='Israel' idade={10} />
const multiplos = <Multiplos.BoaTarde nome='Israel'/>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Filho nome={''} sobrenome= {''}/>);
