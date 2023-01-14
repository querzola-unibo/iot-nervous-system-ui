import React, { useMemo, useCallback } from 'react'

import { Stack, Symbol, Toggle } from '@wonderflow/react-components'

export const ThemeSwitch = ({ theme, setTheme }) => {
  const value = useMemo(() => theme === 'light', [theme])

  const onChange = useCallback(() => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [setTheme, theme])

  return (
    <Stack direction="row" fill={false} columnGap={8} vAlign="center" hPadding={8}>
      <Symbol source="moon" />

      <Toggle value={value} onChange={onChange} />

      <Symbol source="sun-bright" />
    </Stack>
  )
}
