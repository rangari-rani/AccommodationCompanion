import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

//import router
import { BrowserRouter as Router } from 'react-router-dom';
import HouseContextProvider from './components/HouseContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HouseContextProvider>
  <Router>
  <React.StrictMode>
  <GoogleOAuthProvider clientId="18489417320-aqqv5h6qdpc6fmr364mr9nlbdamdtgve.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
  </Router>
  </HouseContextProvider>

);
