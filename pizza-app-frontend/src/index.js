import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header/Header.js';
import Footer from "./Components/Footer/Footer";
import Card1 from "./Components/Card1/Card1";
import Card2 from "./Components/Card2/Card2";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Footer />
    <Card1 />
    <Card2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
