import React from 'react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'
import './tailwind.css'

export const OrderListWidget = ({
  widgetId,
  env,
  context,
  customerId,
  isRecentOrders
}) => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('https://6326b210ba4a9c4753299365.mockapi.io/litmus7/orders/')
      .then((response) => response.json())
      .then((data) => {
        isRecentOrders
          ? customerId
            ? setOrders(
                data.filter((orders) => orders.customerId === customerId)
              )
            : setOrders(null)
          : setOrders(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [customerId])

  return (
    <div className='relative overflow-x-auto'>
      {orders ? (
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3 text-center'>
                Order id
              </th>
              <th scope='col' className='px-6 py-3 text-center'>
                Customer id
              </th>
              <th scope='col' className='px-6 py-3 text-center'>
                Guest
              </th>
              <th scope='col' className='px-6 py-3'>
                LastName
              </th>
              <th scope='col' className='px-6 py-3'>
                first name
              </th>
              <th scope='col' className='px-6 py-3'>
                Date submitted
              </th>
              <th scope='col' className='px-6 py-3'>
                Date shipped
              </th>
              <th scope='col' className='px-6 py-3'>
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center'
                >
                  <a href={'/order/order-detail/' + order.orderId}>
                    {order.orderId}
                  </a>
                </th>
                <td className='px-6 py-4 text-center'>{order.customerId}</td>
                <td className='px-6 py-4 text-center'>
                  {order.guestOrder ? 'yes' : 'no'}
                </td>
                <td className='px-6 py-4'>{order.lastName}</td>
                <td className='px-6 py-4'>{order.firstName}</td>
                <td className='px-6 py-4'>
                  {new Date(order.dateSubmitted).toLocaleString()}
                </td>
                <td className='px-6 py-4'>
                  {new Date(order.dateShipped).toLocaleString()}
                </td>
                <td className='px-6 py-4'>${order.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-center'> Please select a valid customer </p>
      )}
    </div>
  )
}
