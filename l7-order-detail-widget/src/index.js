import React from 'react'
import './tailwind.css'
import { useState, useEffect } from 'react'

export const OrderDetailsWidget = ({ widgetId, orderId, env, context }) => {
  const [order, setOrder] = useState({})

  useEffect(() => {
    fetch(
      'https://6326b210ba4a9c4753299365.mockapi.io/litmus7/orders/' + orderId
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('profile_api_data' + data)
        setOrder(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex flex-col items-center pb-10'>
        <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
          Order id : {order.orderId}
        </h5>
        <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
          Price: ${order.totalPrice}
        </h5>
        <div className='inline-flex items-start px-2 py-1 text-sm  text-left'>
          Customer id : {order.customerId}
        </div>

        <div className='inline-flex items-start px-2 py-1 text-sm  '>
          Name : {order.lastName},{order.firstName}
        </div>
        <div className='inline-flex items-start px-2 py-1 text-sm text-left'>
          Guest : {order.guestOrder ? 'yes' : 'no'}
        </div>
        <div className='inline-flex items-start px-2 py-1 text-sm text-left'>
          Created at: {new Date(order.createdAt).toLocaleString()}
        </div>

        <div className='inline-flex items-start px-2 py-1 text-sm  text-left'>
          Date submitted:{new Date(order.dateSubmitted).toLocaleString()}
        </div>
        <div className='inline-flex items-start px-2 py-1 text-sm text-left'>
          Date shipped: {new Date(order.dateShipped).toLocaleString()}
        </div>
        <div className='inline-flex items-start px-2 py-1 text-sm  text-left'>
          Phone Number: {order.phoneNumber}
        </div>
      </div>
    </div>
  )
}
