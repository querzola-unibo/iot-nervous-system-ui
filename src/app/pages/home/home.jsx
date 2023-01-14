import React from 'react'
import { Stack } from '@wonderflow/react-components'
import { Rooms } from './components/rooms'
import { Devices } from './components/devices'
import { Environment } from './components/environment'

export const Home = () => (
  <Stack rowGap={32} vPadding={32} hAlign="center">
    <Rooms />

    <Devices />

    <Environment />
  </Stack>
)
