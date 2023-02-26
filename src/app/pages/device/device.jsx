import React, { useState } from 'react'
import { useDebounce } from 'react-use'
import { useParams } from 'react-router-dom'
import { useMqttContext } from '../../hooks'

import { Stack, Slider, Toggle } from '@wonderflow/react-components'

export const Device = () => {
  const [value, setValue] = useState()
  const [light, setLight] = useState()
  const { roomId, deviceId } = useParams()
  const { publish } = useMqttContext()

  useDebounce(() => value && publish({ roomId, deviceId, action: 'move', value }), 600, [value])

  useDebounce(() => light !== undefined && publish({ roomId, deviceId: 'light', action: 'switch', value: light ? 'on' : 'off' }), 600, [light])

  return (
    <Stack rowGap={32} vPadding={32} hAlign="center">
      <Slider
        label="Tapparella"
        min={0}
        max={100}
        iconMin="moon"
        iconMax="sun-bright"
        onInput={(newValue) => setValue(newValue)}
      />

      <Toggle
        label="Light"
        onChange={() => setLight(!light)}
      />

    </Stack>
  )
}
