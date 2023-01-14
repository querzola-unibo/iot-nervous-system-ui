import React from 'react'
import { useParams } from 'react-router-dom'

import { Stack } from '@wonderflow/react-components'

export const Device = () => {
  const { id } = useParams()

  return (
    <Stack rowGap={32} vPadding={32} hAlign="center">
      Device
      {' '}
      {id}
    </Stack>
  )
}