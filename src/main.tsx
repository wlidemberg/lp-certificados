import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Importa o BrowserRouter
import { UIProvider } from './context/UIContext.tsx';


import './index.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. Envolve o componente App com o BrowserRouter */}
    <BrowserRouter>
      <UIProvider>
      <App />
      </UIProvider>
    </BrowserRouter>
  </React.StrictMode>
);