import React from 'react'
import { Wrapper } from './section.module.css'

import { Stack } from '@wonderflow/react-components'
import { Carousel } from '../../../components/'

const DEVICES = [
  { name: 'Curtain', icon: 'todo' },
  { name: 'Light', icon: 'bulb' },
  { name: 'Light sensor', icon: 'sun-bright' },
  { name: 'Entrance door', icon: 'right-from-bracket' },
  { name: 'Compost', icon: 'trash-can' },
  { name: 'TV', icon: 'pc' }
]

export const Devices = () => (
  <Stack className={Wrapper} hAlign="center">
    <Carousel title="Devices">
      {DEVICES.map(({ name, icon }) => (
        <Carousel.Item key={name} icon={icon} label={name} />
      ))}
    </Carousel>
  </Stack>
)
