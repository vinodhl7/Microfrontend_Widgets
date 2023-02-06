import React from 'react'

import { ProfileListWidget } from 'l7-profile-list-widget'
import 'l7-profile-list-widget/dist/index.css'

const App = () => {
  return <ProfileListWidget widgetId="cutomer-mfe-profile-list-widget" env="qa" />
}

export default App
