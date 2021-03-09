import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import GlobalStyle from './globalStyle';

render(
  <div>
    <GlobalStyle />
    <App />
  </div>,
  document.getElementById('app')
);
