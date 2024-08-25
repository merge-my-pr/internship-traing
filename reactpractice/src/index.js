import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Navbar2} from './Navbar';
import Component1 from './Component1';

const root = ReactDOM.createRoot(document.getElementById('root'));


const names=['raghav','ashmitha','deva','nakulV','rasi'];


root.render(
  <React.StrictMode>
    {/* <Navbar/> */}
    <Navbar2/>

    <div>
    {/* {console.log("hello from jsx")} */}

    {
    names.map((name,i)=>( 
      <li key={i}>name={name},{i}</li>
    ))
    
    }


    {/* name='raghav' */}

     {/* conditional rendering */}
    {1%2===0 ? <h1>even</h1>:<h1>odd</h1>}

    </div>


    <App />


    {/* compoennt */}
    <Component1/>


  </React.StrictMode>
);
