import React, { Suspense, lazy } from 'react'
import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom'
import { MqttProvider } from './hooks'

import {
  Shell,
  ErrorBoundary,
  ErrorFallback,
  LoadingFallback
} from './components'

const Home = lazy(() =>
  import('./pages/home/home.jsx').then((module) => {
    return {
      default: module.Home
    }
  })
)

const Rooms = lazy(() =>
  import('./pages/rooms/rooms.jsx').then((module) => ({
    default: module.Rooms
  }))
)

const Room = lazy(() =>
  import('./pages/room/room.jsx').then((module) => ({
    default: module.Room
  }))
)

const Devices = lazy(() =>
  import('./pages/devices/devices.jsx').then((module) => ({
    default: module.Devices
  }))
)

const Device = lazy(() =>
  import('./pages/device/device.jsx').then((module) => ({
    default: module.Device
  }))
)

// const Settings = lazy(() =>
//   import('./pages/settings').then((module) => ({
//     default: module.Settings
//   }))
// )

// const Analytics = lazy(() =>
//   import('./pages/analytics').then((module) => ({
//     default: module.Analytics
//   }))
// )

// const Automations = lazy(() =>
//   import('./pages/automations').then((module) => ({
//     default: module.Automations
//   }))
// )

// const User = lazy(() =>
//   import('./pages/user').then((module) => ({
//     default: module.User
//   }))
// )

export const App = () => (
  <ErrorBoundary>
    <MqttProvider>
      <BrowserRouter>
        <Shell>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>

              <Route
                path="/"
                element={<Home />}
                errorElement={<ErrorFallback />}
              />

              <Route
                path="/rooms/:id"
                element={<Room />}
                errorElement={<ErrorFallback />}
              />

              <Route
                path="/rooms/:roomId/devices/:deviceId"
                element={<Device />}
                errorElement={<ErrorFallback />}
              />
            </Routes>
          </Suspense>
        </Shell>
      </BrowserRouter>
    </MqttProvider>
  </ErrorBoundary>
)
