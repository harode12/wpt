import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import { Function2, Function3 } from './myFn';
// import MyFunction from './myFn';
// import Factorial from './fact';
import Calculate from './calc';
import Asign4 from './ass3';
import Education from './education';
import Factorupdated from './factupdated';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Factorial />    */}
     {/* <Asign4 ></Asign4 >     */}
      <Asign4/> 
    {/* <Factorial num1={5} />    */}
    {/* <Factorial num1="5"></Factorial> */}
    {/* <Calculate num1="6" num2="3"/> */}
 <Calculate/> 
     {/* <MyFunction data="user"
      skills="WPT , C , C++"
      doj="12/12/12"
    /> */}
   
     <Education></Education>   


     <Factorupdated ></Factorupdated>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
