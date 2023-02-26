import React from 'react'
import { Button, InfoState, Text, Stack } from '@wonderflow/react-components'

export const ErrorFallback = () => {
  const onReloadPage = () => {
    window.location.reload()
  }

  return (
    <Stack vAlign="center" hAlign="center" style={{ height: '100vh' }} fill={false}>
      <InfoState
        actions={
          <Button onClick={onReloadPage}>Reload page</Button>
          }
        title="Something went wrong"
        icon="circle-x"
        iconColor="red"
      >
        <Text as="span">
          We couldn&apos;t complete your request, this is a generic error. If
          the error persist, please contact support.
        </Text>
      </InfoState>
    </Stack>
  )
}
