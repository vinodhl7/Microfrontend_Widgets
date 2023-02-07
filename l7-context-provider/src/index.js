import React from 'react'
import styles from './styles.module.css'
import Cookies from 'js-cookie';

import { createContext, useState, useEffect } from 'react';

//create a context, with createContext api

export const ContextDetails = createContext({});




export const ContextDetailsProvider = (props) => {
  // this state will be shared with all components 

const [contextData, setContextData] = useState({selectedCustomer: ''})


useEffect(() => {
  debugger;
  let contextCookie = Cookies.get('contextCookie');
  if (contextCookie) {
    fetch('http://localhost:8686/browseexpservice/v1/context/'+contextCookie)
    .then((response) => response.json())
    .then((data) => {
       console.log('Context Data' + data);
       setContextData(data);
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
       setContextData(data);
    })
    .catch((err) => {
       console.log(err.message);
       return null;
    });
  }
}, []);

useEffect(() => {
  debugger;
  if (contextData?.contextId) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contextData)
    };
    fetch('http://localhost:8686/browseexpservice/v1/context/'+contextData.contextId, requestOptions)
        .then(response => response.json())
        .then(data => {
          debugger;
          console.log('Updated context in service' + data);
        });
  }
}, [contextData]);

return (
          // this is the provider providing state
          <ContextDetails.Provider value={[contextData, setContextData]}>
            {props.children}
          </ContextDetails.Provider>
  
);
};

