import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Shell as ShellClass, Main as MainClass } from './shell.module.css'

import {
  Avatar,
  Container,
  IconButton,
  Button,
  Stack
} from '@wonderflow/react-components'
import { Searchbar, Topbar, ThemeSwitch } from '..'

export const Shell = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const onBackHome = useCallback(() => {
    navigate('/')
  }, [navigate])

  const onBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <Container as={Stack} className={ShellClass} padding={false} data-theme={theme} fill={false} hAlign="center">
      <Topbar
        leftActions={(
          <>
            <IconButton dimension="big" kind="flat" icon="c-pulse" onClick={onBackHome} />

            {location.pathname !== '/' && (
            <Button kind="flat" icon="chevron-left" onClick={onBack}>
              Back
            </Button>
            )}
          </>
        )}
        rightActions={(
          <>
            <ThemeSwitch theme={theme} setTheme={setTheme} />

            <IconButton kind="flat" icon="github" />

            <IconButton kind="flat" icon="gear" />

            <Avatar />
          </>
        )}
      >
        <Searchbar
          query={search}
          setQuery={setSearch}
          placeholder="Search..."
          style={{ width: '350px' }}
        />
      </Topbar>

      <Container dimension="large" className={MainClass}>
        {children}
      </Container>
    </Container>
  )
}
