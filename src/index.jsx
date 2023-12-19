import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppClass from './AppClass';
import DataComponent from '../../exercise-lab-props-boilerplate/src/components/Image';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dataImg={DataComponent}/>   
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);
