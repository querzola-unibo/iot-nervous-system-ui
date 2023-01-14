import React from 'react'
import { Spinner, Stack } from '@wonderflow/react-components'

export const LoadingFallback = () => (
  <Stack vAlign="center" hAlign="center" style={{ height: '100%' }} fill={false}>
    <Spinner />
  </Stack>
)
