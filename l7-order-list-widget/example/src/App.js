import React, { useEffect } from 'react'

import { OrderListWidget } from 'l7-order-list-widget'
import 'l7-order-list-widget/dist/index.css'

const App = () => {
  
  return <OrderListWidget isRecentOrders={true} customerId={'1'} />
}

export default App
