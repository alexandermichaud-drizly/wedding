import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LandingPage from './pages/landing';

const useRealApp = false;

ReactDOM.render(
  <React.StrictMode>
    {useRealApp ? <App /> : <LandingPage tempPage />}
  </React.StrictMode>,
  document.getElementById('root')
);
