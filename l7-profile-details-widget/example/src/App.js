import React from 'react'

import { ProfileDetailsWidget } from 'l7-profile-details-widget'
import 'l7-profile-details-widget/dist/index.css'


const App = () => {
  return <ProfileDetailsWidget widgetId="customer-mfe-widgtId" customerId="1" env="qa" />
}

export default App
