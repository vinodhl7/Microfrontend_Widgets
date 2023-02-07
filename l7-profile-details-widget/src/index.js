import React from 'react'
import styles from './styles.module.css'
import './tailwind.css'
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

  

  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex flex-col items-center pb-10'>
        <img
          class='w-24 h-24 mb-3 rounded-full shadow-lg'
          src={customer.avatar}
          alt='avatar'
        />
        <h5 class='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
          {customer.lastName}, {customer.firstName}
        </h5>
        <div class='flex mt-4 space-x-3 md:mt-6'></div>
        <div className='inline-flex items-start px-2 py-1 text-sm font-medium text-left'>
          Last login: {customer.updatedAt}
        </div>

        <div className='inline-flex items-start px-2 py-1 text-sm font-medium text-left'>
          Phone Number: {customer.phoneNumber}
        </div>
        <div className='inline-flex items-start px-2 py-1 text-sm font-medium text-left'>
          email: {customer.email}
        </div>

        <div className='inline-flex items-start px-2 py-1 text-sm font-medium text-left'>
          City: {customer.city}
        </div>
        <div className='inline-flex items-start px-2 py-1 text-sm font-medium text-left'>
          State: {customer.state}
        </div>

        <div className='inline-flex items-start px-2 py-1 text-sm font-medium text-left'>
          Created at: {customer.createdAt}
        </div>
      </div>
    </div>
  )
}

