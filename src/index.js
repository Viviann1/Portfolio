import React from 'react';
import ReactDOM from 'react-dom/client';



// css, this imports css that is available globally
import './styles/basic.css'
import './styles/palette.css'
import './styles/spacing.css'

// components
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
