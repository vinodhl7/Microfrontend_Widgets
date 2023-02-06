import React from 'react'
import styles from './styles.module.css'
import { useState, useEffect } from "react";


export const ProfileListWidget = ({widgetId, env, context  }) => {
  
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('https://6326b210ba4a9c4753299365.mockapi.io/litmus7/users/')
    .then((response) => response.json())
    .then((data) => {
       console.log('profile_api_data' + data);
       setCustomers(data);
    })
    .catch((err) => {
       console.log(err.message);
    });
    
    
  }, []);

  

  return <div className={styles.test}>Profile List
    <ul>
    {customers?.map( (customer) =>  {
      return (<li>
        <a href={'/customer/CustomerDetail/'+ customer.id}> {customer.firstName + ' ' + customer.lastName} </a>
      </li>);
    })  
    }
    </ul>
   
    </div>
}
