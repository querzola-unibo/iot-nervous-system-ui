import React from 'react'

import { Wrapper } from './section.module.css'

import { Stack } from '@wonderflow/react-components'
import { Carousel } from '../../../components/'

const ROOMS = [
  { name: 'Living room', icon: 'rectangle-barcode' },
  { name: 'Bedroom', icon: 'earth-europa' }
]

export const Rooms = () => {
  return (
    <Stack className={Wrapper} hAlign="center">
      <Carousel title="Rooms">
        {ROOMS.map(({ name, icon }) => (
          <Carousel.Item key={name} icon={icon} label={name} />))}
      </Carousel>
    </Stack>
  )
}
