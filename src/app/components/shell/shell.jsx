import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Shell as ShellClass, Main as MainClass } from './shell.module.css'

import {
  Container,
  IconButton,
  Button,
  Stack,
  OverlayContainer
} from '@wonderflow/react-components'
import { Searchbar, Topbar, Menu } from '..'

export const Shell = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const [search, setSearch] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = useNavigate()
  const onBackHome = useCallback(() => {
    navigate('/')
  }, [navigate])

  const onBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <Container
      as={Stack}
      className={ShellClass}
      padding={false}
      data-theme={theme}
      fill={false}
      hAlign="center"
    >
      <Topbar
        leftActions={(
          <>
            <IconButton
              dimension="big"
              kind="flat"
              icon="c-pulse"
              onClick={onBackHome}
            />

            {location.pathname !== '/' && (
              <Button kind="flat" icon="chevron-left" onClick={onBack}>
                Back
              </Button>
            )}
          </>
        )}
        rightActions={(
          <IconButton
            kind="flat"
            icon="bars"
            onClick={() => setIsMenuOpen(true)}
          />
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

      <OverlayContainer onClose={() => setIsMenuOpen(false)}>
        {isMenuOpen && (
          <Menu
            theme={theme}
            setTheme={setTheme}
            onClose={() => setIsMenuOpen(false)}
          />
        )}
      </OverlayContainer>
    </Container>
  )
}
