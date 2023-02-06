
import React from 'react'




export const retrieveProfile = (customerId, env) => {
    fetch('https://6326b210ba4a9c4753299365.mockapi.io/litmus7/users/'+customerId)
    .then((response) => response.json())
    .then((data) => {
       console.log('profile_api_data' + data);
       return data;
    })
    .catch((err) => {
       console.log(err.message);
    });
    
}


