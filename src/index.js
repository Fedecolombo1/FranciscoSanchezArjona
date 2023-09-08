import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './routes';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Helmet>
      <title>Francisco Sanchez Arjona</title>
    </Helmet>
    <Routes />
  </>
);