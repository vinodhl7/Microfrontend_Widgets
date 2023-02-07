import React from 'react'

import { ProfileDetailsWidget } from 'l7-profile-details-widget'
import 'l7-profile-details-widget/dist/index.css'
import { ContextDetailsProvider } from 'l7-context-provider';


const App = () => {
  return <div>
      <ContextDetailsProvider>
          <ProfileDetailsWidget widgetId="customer-mfe-widgtId" customerId="1" env="qa" />
          <ProfileDetailsWidget widgetId="customer-mfe-widgtId2"  env="qa" />
      </ContextDetailsProvider>
      
  </div>
}

export default App
