import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  IconButton,
  Drawer,
  Stack,
  Button,
  Symbol
} from '@wonderflow/react-components'
import { Topbar, ThemeSwitch } from '..'

export const Menu = ({ theme, setTheme, onClose, children }) => {
  const navigate = useNavigate()

  const onDiveIn = useCallback(
    (name) => {
      navigate(`/${name}`)
      onClose()
    },
    [navigate, onClose]
  )

  return (
    <Drawer theme={theme} showHeader={false}>
      <Topbar
        leftActions={(
          <>
            <ThemeSwitch theme={theme} setTheme={setTheme} />

            <IconButton
              kind="flat"
              icon="github"
              onClick={() =>
                window.open(
                  'https://github.com/querzola-unibo/iot-nervous-system-ui',
                  '_blank'
                )
              }
            />
          </>
        )}
        rightActions={<IconButton kind="flat" icon="xmark" onClick={onClose} />}
      />

      <Stack rowGap={16} vPadding={32} hPadding={16}>
        <Stack
          as={Button}
          direction="row"
          kind="flat"
          hAlign="right"
          vAlign="center"
          columnGap={16}
          fill={false}
          onClick={() => onDiveIn('')}
        >
          HOME
          <Symbol source="house" dimension={24} />
        </Stack>

        <Stack
          as={Button}
          direction="row"
          kind="flat"
          hAlign="right"
          vAlign="center"
          columnGap={16}
          fill={false}
          onClick={() => onDiveIn('rooms')}
        >
          ROOMS
          <Symbol
            source="grip-vertical
"
            dimension={24}
          />
        </Stack>

        <Stack
          as={Button}
          direction="row"
          kind="flat"
          hAlign="right"
          vAlign="center"
          columnGap={16}
          fill={false}
          onClick={() => onDiveIn('devices')}
        >
          DEVICES
          <Symbol source="pc" dimension={24} />
        </Stack>

        <Stack
          as={Button}
          direction="row"
          kind="flat"
          hAlign="right"
          vAlign="center"
          columnGap={16}
          fill={false}
          onClick={() => onDiveIn('environment')}
        >
          ENVIRONMENT
          <Symbol source="bulb" dimension={24} />
        </Stack>

        <Stack
          as={Button}
          direction="row"
          kind="flat"
          hAlign="right"
          vAlign="center"
          columnGap={16}
          fill={false}
          onClick={() => onDiveIn('automations')}
        >
          AUTOMATIONS
          <Symbol source="clock-rotate-left" dimension={24} />
        </Stack>

        <Stack
          as={Button}
          direction="row"
          kind="flat"
          hAlign="right"
          vAlign="center"
          columnGap={16}
          fill={false}
          onClick={() => onDiveIn('settings')}
        >
          SETTINGS
          <Symbol source="gear" dimension={24} />
        </Stack>

        <Stack
          as={Button}
          direction="row"
          kind="flat"
          hAlign="right"
          vAlign="center"
          columnGap={16}
          fill={false}
          onClick={() => onDiveIn('user')}
        >
          USER
          <Symbol source="user" dimension={24} />
        </Stack>
      </Stack>
    </Drawer>
  )
}
