import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./components/Home.jsx";
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Home/>
  </BrowserRouter>
);

