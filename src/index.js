import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { ThemeProvider } from 'styled-components';
import './index.css';

const theme = {
  black: 'black',
  white: 'white',
  accent: 'aqua',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {' '}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
