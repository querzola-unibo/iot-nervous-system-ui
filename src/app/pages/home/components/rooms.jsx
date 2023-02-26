import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Wrapper } from './section.module.css'

import { Stack } from '@wonderflow/react-components'
import { Carousel } from '../../../components/'

const ROOMS = [
  { label: 'Living room', name: 'living-room', icon: 'rectangle-barcode' },
  { label: 'Bedroom', name: 'bedroom', icon: 'earth-europa' }
]

export const Rooms = () => {
  const navigate = useNavigate()

  const onDiveIn = useCallback((name) => {
    navigate(`rooms/${name}`)
  }, [navigate])

  return (
    <Stack className={Wrapper} hAlign="center">
      <Carousel title="Rooms">
        {ROOMS.map(({ label, name, icon }) => (
          <Carousel.Item key={name} icon={icon} label={label} onClick={() => onDiveIn(name)} />))}
      </Carousel>
    </Stack>
  )
}
