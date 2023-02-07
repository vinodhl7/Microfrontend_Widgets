import React from 'react'
import styles from './styles.module.css'
import Cookies from 'js-cookie';

import { createContext, useState, useEffect } from 'react';

//create a context, with createContext api

export const contextDetails = createContext();



export const refreshContext = () => {
  
  let contextCookie = Cookies.get('contextCookie');
  if (contextCookie) {
    fetch('http://localhost:8686/browseexpservice/v1/context/'+contextCookie)
    .then((response) => response.json())
    .then((data) => {
       console.log('Context Data' + data);
       return data;
    })
    .catch((err) => {
       console.log(err.message);
    });
  } else {
    fetch('http://localhost:8686/browseexpservice/v1/context/create')
    .then((response) => response.json())
    .then((data) => {
       console.log('Context Data' + data);
       data.selectedCustomer='';
       data.selectedOrder='';       
       Cookies.set('contextCookie', data?.contextId);
       return data;
    })
    .catch((err) => {
       console.log(err.message);
       return null;
    });
  }
};



export const ContextDetailsProvider = (props) => {
  // this state will be shared with all components 

debugger;


const [contextDetail, setContextDetail] = useState({});


useEffect(() =>{
  
let details = refreshContext();
console.log('details');
setContextDetail(details);

},[]);



const updateContext = (contextDetail) => {
  debugger;
  if (contextDetail?.contextId) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contextDetail)
    };
    fetch('http://localhost:8686/browseexpservice/v1/context/'+contextDetail.contextId, requestOptions)
        .then(response => response.json())
        .then(data => {
          debugger;
          console.log('Updated context' + data);
          setContextDetail(data);});
  }
  

};

return (
          // this is the provider providing state
  <contextDetails.Provider value={[contextDetail, setContextDetail, updateContext]}>
      {props.children}
  </contextDetails.Provider>
);
};

