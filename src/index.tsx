import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Beneficios } from './pages/Beneficios';
import { Contatos } from './pages/Contatos';
import { Inicio } from './pages/Inicio';
import { Personais } from './pages/Personais';
import { Rodape } from './pages/Rodape';
import { Sobre } from './pages/Sobre';
import { Treinos } from './pages/Treinos';

ReactDOM.render(
  <React.StrictMode>
    <Inicio />
    <Sobre />
    <Beneficios />
    <Personais />
    <Treinos />
    <Contatos />
    <Rodape />
  </React.StrictMode>,
  document.getElementById('root')
);