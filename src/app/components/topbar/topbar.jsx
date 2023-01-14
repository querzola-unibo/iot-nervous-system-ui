import React from 'react'

import { Stack } from '@wonderflow/react-components'
import { TopBar as TopBarClass, Content } from './top-bar.module.css'

export const Topbar = ({
  leftActions = <div />,
  rightActions = <div />,
  children
}) => {
  return (
    <Stack
      className={TopBarClass}
      hPadding={8}
      vPadding={8}
      direction="row"
      fill={false}
      hAlign="space-between"
      vAlign="center"
    >
      <Stack
        className={Content}
        direction="row"
        columnGap={8}
        fill={false}
        vAlign="center"
      >
        {leftActions}
      </Stack>

      <Stack
        className={Content}
        direction="row"
        columnGap={8}
        fill={false}
        vAlign="center"
        hAlign="center"
      >
        {children}
      </Stack>

      <Stack
        className={Content}
        direction="row"
        columnGap={8}
        fill={false}
        vAlign="center"
        hAlign="right"

      >
        {rightActions}
      </Stack>
    </Stack>
  )
}
