import ReactDOM from 'react-dom';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={{ ...theme, ...mixins }}>
      <GlobalStyle /> */}
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    {/* </ThemeProvider> */}
    하이하이방글라데시 akdka
  </React.StrictMode>,
);
