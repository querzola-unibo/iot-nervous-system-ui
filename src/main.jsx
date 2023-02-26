import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/app'
import '@wonderflow/react-components/core.css'
import '@wonderflow/themes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
