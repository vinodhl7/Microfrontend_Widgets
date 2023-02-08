import React from 'react'
import styles from './styles.module.css'
import './tailwind.css'
import { retrieveProfile } from './service/profile-widget-api'
import { useState, useEffect } from 'react'

export const ProfileDetailsWidget = ({
  widgetId,
  customerId,
  env,
  context
}) => {
  const { contextData, setContextData } = context
  console.log('COntextData from props', contextData)
  console.log('COntext Props,', context)
  console.log('CustomerID in profile widget,', customerId)
  const [customer, setCusstomer] = useState({})

  useEffect(() => {
    console.log('CustomerID in profile widget use effect,', customerId)
    if (customerId) {
      fetch(
        'https://6326b210ba4a9c4753299365.mockapi.io/litmus7/users/' +
          customerId
      )
        .then((response) => response.json())
        .then((data) => {
          console.log('profile_api_data' + data)
          setCusstomer(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }, [customerId])

  const setContextHandler = (customerObject) => {
    setContextData({ ...contextData, customerId: customerObject.id })
  }

  return (
    <div className='w-full max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex flex-col items-center'>
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
        <button
          className='py-2.5 px-5 mr-2 mb-2 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-blue-200 rounded-lg border border-gray-200 hover:bg-blue-300 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
          onClick={() => {
            setContextHandler(customer)
          }}
        >
          Select customer!!
        </button>
      </div>
    </div>
  )
}
