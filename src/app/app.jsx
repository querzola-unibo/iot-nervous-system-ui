import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { RestfulApiProvider } from './contexts/restful-api'

import { Shell } from './shell'

export const App = () => (
  <BrowserRouter>
    <RestfulApiProvider>
      <Shell />
    </RestfulApiProvider>
  </BrowserRouter>
)
