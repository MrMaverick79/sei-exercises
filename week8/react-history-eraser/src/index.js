import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HistoryEraser from './HistoryEraser';

// NOTE you can name the import whatever you like as long as you export default in the chosen file. 
// i.e. import MyEraser from './HistoryEraser'; and you call its <MyEraser /> in the render

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HistoryEraser />
  </React.StrictMode>
);