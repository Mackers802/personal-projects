import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import { UserAuthProvider } from "./context/UserAuthProvider";
ReactDOM.render(
  <Router>
    <UserAuthProvider>
      <App />
    </UserAuthProvider>
  </Router>
  ,document.getElementById('root')
);
