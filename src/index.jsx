import ReactDOM from 'react-dom/client';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, mixins } from './style/theme';
import GlobalStyle from './style/GlobalStyle';
import router from './routes/Router';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ ...theme, ...mixins }}>
      <GlobalStyle />
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </ThemeProvider>
  </React.StrictMode>,
);
