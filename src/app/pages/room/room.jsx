import React, { useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Wrapper } from '../home/components/section.module.css'

import { Stack } from '@wonderflow/react-components'
import { Carousel } from '../../components'

const DEVICES = [
  { id: 'curtain', label: 'Curtain', icon: 'todo' },
  { id: 'light', label: 'Light', icon: 'bulb' },
  { id: 'light-sensor', label: 'Light sensor', icon: 'sun-bright' }
]

export const Room = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const onDiveIn = useCallback((name) => {
    navigate(`devices/${name}`)
  }, [navigate])

  return (
    <Stack rowGap={32} vPadding={32} hAlign="center">
      <Stack className={Wrapper} hAlign="center">
        <Carousel title="Devices">
          {DEVICES.map(({ id, label, icon }) => (
            <Carousel.Item key={id} icon={icon} label={label} onClick={() => onDiveIn(id)} />
          ))}
        </Carousel>
      </Stack>
    </Stack>
  )
}
