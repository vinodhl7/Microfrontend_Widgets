import React from 'react'
import styles from './styles.module.css'
import {retrieveProfile} from './service/profile-widget-api'
import { useState, useEffect } from "react";


export const ProfileDetailsWidget = ({widgetId, customerId, env, context  }) => {
  
  const [customer, setCusstomer] = useState({});

  useEffect(() => {
    fetch('https://6326b210ba4a9c4753299365.mockapi.io/litmus7/users/'+customerId)
    .then((response) => response.json())
    .then((data) => {
       console.log('profile_api_data' + data);
       setCusstomer(data);
    })
    .catch((err) => {
       console.log(err.message);
    });
    
    
  }, []);

  

  return <div className={styles.test}>Profile Details
     <div>
        &nbsp; 
    </div>
    
    <div>
        First Name: {customer?.firstName} 
    </div>

    <div>
        Last Name: {customer?.lastName} 
    </div>

    <div>
        Email: {customer?.email} 
    </div>

    <div>
        City: {customer?.city} 
    </div>
    <div>
        Phone: {customer?.phoneNumber} 
    </div>
   
    </div>
}

