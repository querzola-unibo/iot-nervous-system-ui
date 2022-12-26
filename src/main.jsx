import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app/app'

import '@wonderflow/react-components/core.css'
import '@wonderflow/themes'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
