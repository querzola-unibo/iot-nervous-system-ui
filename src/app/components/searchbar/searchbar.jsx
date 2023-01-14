import React, { useState } from 'react'
import { useDebounce } from 'react-use'

import { Textfield } from '@wonderflow/react-components'

export const Searchbar = ({
  query = '',
  setQuery,
  placeholder,
  ...otherProps
}) => {
  const [value, setValue] = useState(query)

  useDebounce(() => query !== value && setQuery(value), 500, [value])

  return (
    <Textfield
      iconPosition="left"
      icon="magnifying-glass"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...otherProps}
    />
  )
}
