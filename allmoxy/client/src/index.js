import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemProvider} from './context.js/itemProvider';

ReactDOM.render(
  <ItemProvider>
    <App />
  </ItemProvider>
  ,document.getElementById('root')
);
