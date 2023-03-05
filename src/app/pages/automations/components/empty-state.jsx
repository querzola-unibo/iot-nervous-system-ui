import React from 'react'

import {
  Stack,
  InfoState
} from '@wonderflow/react-components'

export const EmptyState = ({ type, title, message, actions }) =>
  (
    <Stack
      data-id-test="initial-empty"
      vPadding={64}
      hPadding={32}
      fill={false}
    >
      <InfoState
        icon="file-alt"
        iconColor="gray"
        title="No tasks"
        actions={actions}
      >
        You haven&apos;t setup any task yet
      </InfoState>
    </Stack>
  )
