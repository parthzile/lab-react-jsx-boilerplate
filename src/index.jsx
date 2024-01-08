import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppClass from './AppClass';
<<<<<<< HEAD
=======
import Data from "./components/ImageData"

>>>>>>> 64a7cbd7d2311d87c583fcbe07a2a309abe8cd97


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <AppClass />   
=======
    <App dataImg = {Data}/>
>>>>>>> 64a7cbd7d2311d87c583fcbe07a2a309abe8cd97
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);
