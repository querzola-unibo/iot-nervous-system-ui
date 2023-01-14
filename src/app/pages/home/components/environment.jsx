import React from 'react'
import { Wrapper } from './section.module.css'

import { Stack } from '@wonderflow/react-components'
import { Carousel } from '../../../components'

const ENVIRONMENT = [
  { name: 'Lighting', icon: 'bulb' },
  { name: 'Water', icon: 'wave-sine' },
  { name: 'Air quality', icon: 'hearts-suit' },
  { name: 'Electricity', icon: 'c-pulse' },
  { name: 'Sound', icon: 'megaphone' },
  { name: 'Wifi', icon: 'signal-stream' }
]

export const Environment = () => (
  <Stack className={Wrapper} hAlign="center">
    <Carousel title="Environment">
      {ENVIRONMENT.map(({ name, icon }) => (
        <Carousel.Item key={name} icon={icon} label={name} />))}
    </Carousel>
  </Stack>
)
