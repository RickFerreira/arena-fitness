import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home } from './pages/Home';
import { Footer } from './pages/Footer';
import { Main } from './pages/Main';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);