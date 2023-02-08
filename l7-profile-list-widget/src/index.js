import React from 'react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'
import './tailwind.css'

export const ProfileListWidget = ({ widgetId, env, context }) => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    fetch('https://6326b210ba4a9c4753299365.mockapi.io/litmus7/users/')
      .then((response) => response.json())
      .then((data) => {
        console.log('profile_api_data' + data)
        setCustomers(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left text-gray-500 '>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
          <tr>
            <th scope='col' className='px-6 py-3 text-center'>
              profile id
            </th>
            <th scope='col' className='px-6 py-3'>
              name
            </th>
            <th scope='col' className='px-6 py-3'>
              email
            </th>
            <th scope='col' className='px-6 py-3'>
              billing phone number
            </th>
            <th scope='col' className='px-6 py-3'>
              city
            </th>
            <th scope='col' className='px-6 py-3'>
              state
            </th>
          </tr>
        </thead>
        <tbody>
          {customers?.map((customer) => (
            <tr className='bg-white border-b '>
              <td className='px-6 py-4 text-center'>{customer.id}</td>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-blue-300 whitespace-nowrap '
              >
                <a href={'/customer/customer-detail/' + customer.id}>
                  {customer.firstName + ' ' + customer.lastName}{' '}
                </a>
              </th>
              <td className='px-6 py-4'>{customer.email}</td>
              <td className='px-6 py-4'>{customer.phoneNumber}</td>
              <td className='px-6 py-4'>{customer.city}</td>
              <td className='px-6 py-4'>{customer.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
