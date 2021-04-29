import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header/Header.js';
import Footer from "./Components/Footer/Footer";
import Card from "./Components/Card/Card";
import Routes from "./Components/Routes/Routes";




ReactDOM.render(
  <React.StrictMode>

      <Routes />




  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
