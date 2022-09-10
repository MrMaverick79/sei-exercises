import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';


//This is how and where React attaches to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
//below we see a component '<App />'. Note the capital letter
root.render(
  <React.StrictMode>
    
    <App />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//reportWebVitals();
