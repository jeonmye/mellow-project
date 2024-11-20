import ReactDOM from 'react-dom/client';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import './styles/globals.css'

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  </React.StrictMode>,
);
