import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function MyApi(){
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:3003/faculties')
    .then((res)=>res.json())
    .then((res)=>{setData(res)})
  },[])
  
  const formetedfaculty = data.map((fac)=>{

    return (
      <>
         <h4>FacultyId:{fac.FacultyId}</h4>
         <h4>FacultyName:{fac.FacultyName}</h4>
         <h4>FacultyAge:{fac.FacultyAge}</h4>
         <br/>
         </>
         )
  });

  return formetedfaculty;

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <MyApi/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//msabnd